# Extract and download all product images from old site
$urls = Get-Content "old_site_urls.txt"
$allImageUrls = @{}

Write-Host "Fetching pages and extracting product image URLs..." -ForegroundColor Cyan

foreach ($url in $urls) {
    if ([string]::IsNullOrWhiteSpace($url)) { continue }
    
    Write-Host "Processing: $url" -ForegroundColor Yellow
    
    try {
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20
        
        # Extract Thumbnail.ashx URLs from background-image styles
        $regexMatches = [regex]::Matches($response.Content, 'Thumbnail\.ashx\?[^''"\)\s]+')
        
        foreach ($match in $regexMatches) {
            $thumbUrl = $match.Value
            $fullUrl = "http://www.monmettech.com/cms/controller/services/$thumbUrl"
            $allImageUrls[$fullUrl] = $true
            
            # Also extract the actual image filename
            if ($thumbUrl -match 'fileName=([^&''"]+)') {
                $imgPath = $Matches[1]
                $imgFullUrl = "http://www.monmettech.com$imgPath"
                $allImageUrls[$imgFullUrl] = $true
            }
        }
    }
    catch {
        Write-Host "  Error: $_" -ForegroundColor Red
    }
}

$imageUrls = $allImageUrls.Keys | Sort-Object
Write-Host "`nFound $($imageUrls.Count) unique product images" -ForegroundColor Green

# Save to file
$imageUrls | Out-File -FilePath "product_image_urls.txt" -Encoding UTF8

# Download all product images
Write-Host "`nDownloading product images..." -ForegroundColor Cyan
$outputDir = "img/products_catalog"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$webClient = New-Object System.Net.WebClient
$count = 0
$success = 0

foreach ($imgUrl in $imageUrls) {
    $count++
    
    try {
        # Get filename from URL
        if ($imgUrl -match '/([^/]+\.(jpg|png|gif|jpeg))') {
            $filename = $Matches[1]
        } else {
            $filename = "product_$count.jpg"
        }
        
        $filename = $filename -replace '[<>:"/\\|?*]', '_'
        $outputPath = Join-Path $outputDir $filename
        
        if (Test-Path $outputPath) {
            Write-Host "[$count/$($imageUrls.Count)] Skip (exists): $filename" -ForegroundColor Gray
            continue
        }
        
        Write-Host "[$count/$($imageUrls.Count)] Downloading: $filename" -ForegroundColor Yellow
        $webClient.DownloadFile($imgUrl, $outputPath)
        Write-Host "  Saved" -ForegroundColor Green
        $success++
    }
    catch {
        Write-Host "  Failed: $_" -ForegroundColor Red
    }
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Download Complete!" -ForegroundColor Green
Write-Host "Downloaded: $success images" -ForegroundColor Cyan
Write-Host "Location: $outputDir" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
