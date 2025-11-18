// Products data organized by manufacturer
const productsData = {
  cfm: {
    title: "CFM",
    description:
      "Quality fireplace fan kits and blowers compatible with CFM and Vermont Castings fireplaces.",
    products: [
      {
        code: "MFK-24",
        name: "Fan Kit MFK-24",
        image: "img/products_catalog/mfk-24-w.jpg",
        oem: "CFM / Vermont Castings",
        dimensions: '2.5" x 9.5" (65mm x 240mm)',
        cfm: "140",
      },
      {
        code: "MFK-12",
        name: "Fan Kit MFK-12",
        image: "img/products_catalog/mfk-12-w.jpg",
        oem: "CFM / Vermont Castings",
        dimensions: '2.5" x 9.5" (65mm x 240mm)',
        cfm: "140",
      },
      {
        code: "BLWR-VC-MAJ",
        name: "Blower BLWR-VC-MAJ",
        image: "img/products_catalog/BLWR-VC-MAJ-2-w.jpg",
        oem: "CFM / Vermont Castings",
        dimensions: '2.5" x 9.5" (65mm x 240mm)',
        cfm: "140",
      },
    ],
  },
  continental: {
    title: "Continental",
    description:
      "Replacement fan kits and blowers for Napoleon fireplace models.",
    products: [
      {
        code: "MFK-550",
        name: "Fan Kit MFK-550",
        image: "img/products_catalog/MFK-550-w.jpg",
        oem: "Napoleon (GZ550)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "MFK-62-1",
        name: "Fan Kit MFK-62-1",
        image: "img/products_catalog/MFK-62-1-w.jpg",
        oem: "Napoleon (NZ-62)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "MFK-62",
        name: "Fan Kit MFK-62",
        image: "img/products_catalog/MFK-62-w.jpg",
        oem: "Napoleon (EP-62)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "BLWR-NAP",
        name: "Blower BLWR-NAP",
        image: "img/products_catalog/BLWR-NAP-w.jpg",
        oem: "Napoleon (GZ552)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
    ],
  },
  empire: {
    title: "Empire",
    description:
      "High-performance fan kits and blowers for Empire Comfort Systems fireplaces.",
    products: [
      {
        code: "MFK-FBB4",
        name: "Fan Kit MFK-FBB4",
        image: "img/products_catalog/MFK-FBB4-2017w.jpg",
        oem: "Empire Comfort Systems (FBB4)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "BLWR-FBB4",
        name: "Blower BLWR-FBB4",
        image: "img/products_catalog/BLWR-BLOT-2017w.jpg",
        oem: "Empire Comfort Systems",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
    ],
  },
  "heat-glo": {
    title: "Heat & Glo",
    description: "Premium fan kits designed for Heat & Glo fireplace systems.",
    products: [
      {
        code: "MFK-160",
        name: "Fan Kit MFK-160",
        image: "img/products_catalog/MFK-160-w.jpg",
        oem: "Heat & Glo (GFK160A)",
        dimensions: '3" x 4"',
        cfm: "140",
      },
      {
        code: "BLWR-HGLO",
        name: "Blower BLWR-HGLO",
        image: "img/products_catalog/BLWR-HGLO-w.jpg",
        oem: "Heat & Glo",
        dimensions: '3" x 4"',
        cfm: "140",
      },
    ],
  },
  heatilator: {
    title: "Heatilator",
    description:
      "Reliable replacement fans and blowers for Heatilator fireplace models.",
    products: [
      {
        code: "MFK-4B",
        name: "Fan Kit MFK-4B",
        image: "img/products_catalog/MFK-4B-2017w.jpg",
        oem: "Heatilator (GFK4B)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-21B",
        name: "Fan Kit MFK-21B",
        image: "img/products_catalog/MFK-21-w.jpg",
        oem: "Heatilator (GFK21B)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "BLWR-4B",
        name: "Blower BLWR-4B",
        image: "img/products_catalog/BLWR-BLOT-2017w.jpg",
        oem: "Heatilator",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "BLWR-21B",
        name: "Blower BLWR-21B",
        image: "img/products_catalog/product_13.jpg",
        oem: "Heatilator",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
    ],
  },
  "ihp-lennox": {
    title: "IHP / Lennox",
    description:
      "Compatible fan kits for IHP and Lennox fireplace installations.",
    products: [
      {
        code: "MFK-250S",
        name: "Fan Kit MFK-250S",
        image: "img/products_catalog/MFK-250S-w.jpg",
        oem: "IHP/Lennox (FBK250)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-200S",
        name: "Fan Kit MFK-200S",
        image: "img/products_catalog/MFK-200S.jpg",
        oem: "IHP/Lennox (FBK200)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-100S",
        name: "Fan Kit MFK-100S",
        image: "img/products_catalog/MFK-100S-w.jpg",
        oem: "IHP/Lennox (FBK100)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-200",
        name: "Fan Kit MFK-200",
        image: "img/products_catalog/product_16.jpg",
        oem: "IHP/Lennox (FBK200)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-100",
        name: "Fan Kit MFK-100",
        image: "img/products_catalog/product_17.jpg",
        oem: "IHP/Lennox (FBK100)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "BLWR-LNOX",
        name: "Blower BLWR-LNOX",
        image: "img/products_catalog/BLWR-BLOT-2017w.jpg",
        oem: "IHP/Lennox",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
    ],
  },
  kingsman: {
    title: "Kingsman",
    description: "Efficient fan systems for Kingsman fireplace models.",
    products: [
      {
        code: "MFK-36",
        name: "Fan Kit MFK-36",
        image: "img/products_catalog/MFK-36-w.jpg",
        oem: "Kingsman (Z36FK)",
        dimensions: '2.25" x 9.5"',
        cfm: "120",
      },
      {
        code: "MFK-46",
        name: "Fan Kit MFK-46",
        image: "img/products_catalog/MFK-46-2017w.jpg",
        oem: "Kingsman (Z46FK)",
        dimensions: '1.75" x 9.5"',
        cfm: "120",
      },
      {
        code: "BLWR-KNGMN36",
        name: "Blower BLWR-KNGMN36",
        image: "img/products_catalog/BLWR-BLOT-2017w.jpg",
        oem: "Kingsman 36",
        dimensions: '2.25" x 9.5"',
        cfm: "120",
      },
      {
        code: "BLWR-KNGMN46",
        name: "Blower BLWR-KNGMN46",
        image: "img/products_catalog/BLWR-KNGMN46-2017w.jpg",
        oem: "Kingsman MDVFK",
        dimensions: '1.75" x 9.5" (45mm x 240mm)',
        cfm: "120",
      },
    ],
  },
  "kozy-heat": {
    title: "Kozy Heat",
    description: "Quality replacement blowers for Kozy Heat fireplace systems.",
    products: [
      {
        code: "MFK-SLA42",
        name: "Fan Kit MFK-SLA42",
        image: "img/products_catalog/MFK-SLA42-2017w.jpg",
        oem: "Kozy Heat SLA-42",
        dimensions: '1.75" x 7" (45mm x 180mm)',
        cfm: "90",
      },
      {
        code: "BLWR-SLA42",
        name: "Blower BLWR-SLA42",
        image: "img/products_catalog/BLWR-SLA42-2017w.jpg",
        oem: "Kozy Heat SLA-42",
        dimensions: '1.75" x 7" (45mm x 180mm)',
        cfm: "90",
      },
    ],
  },
  majestic: {
    title: "Majestic",
    description:
      "Durable fan kits designed for Majestic fireplace applications.",
    products: [
      {
        code: "MFK-24",
        name: "Fan Kit MFK-24",
        image: "img/products_catalog/mfk-24-w.jpg",
        oem: "Majestic/Vermont Castings (BLOT24)",
        dimensions: '2.5" x 9.5" (63mm x 240mm)',
        cfm: "140",
      },
      {
        code: "MFK-12",
        name: "Fan Kit MFK-12",
        image: "img/products_catalog/mfk-12-w.jpg",
        oem: "Majestic/Vermont Castings (BLOT12)",
        dimensions: '2.5" x 9.5" (63mm x 240mm)',
        cfm: "140",
      },
      {
        code: "BLWR-VC-MAJ",
        name: "Blower BLWR-VC-MAJ",
        image: "img/products_catalog/BLWR-VC-MAJ-2-w.jpg",
        oem: "Majestic/Vermont Castings",
        dimensions: '2.5" x 9.5" (63mm x 240mm)',
        cfm: "140",
      },
    ],
  },
  monessen: {
    title: "Monessen",
    description: "Replacement fan solutions for Monessen fireplace models.",
    products: [
      {
        code: "MFK-BLOT",
        name: "Fan Kit MFK-BLOT",
        image: "img/products_catalog/MFK-BLOT-w.jpg",
        oem: "Monessen (BLOT)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLOT240",
        name: "Fan Kit MFK-BLOT240",
        image: "img/products_catalog/MFK-BLOT240-2017w.jpg",
        oem: "Monessen (BLOT240)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLOT180",
        name: "Fan Kit MFK-BLOT180",
        image: "img/products_catalog/MFK-BLOT180-w.jpg",
        oem: "Monessen (BLOT180)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "90",
      },
      {
        code: "MFK-BLDV",
        name: "Fan Kit MFK-BLDV",
        image: "img/products_catalog/MFK-BLDV-w.jpg",
        oem: "Monessen (BLDV)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLDV-SC",
        name: "Fan Kit MFK-BLDV-SC",
        image: "img/products_catalog/MFK-BLDVSC-trial.jpg",
        oem: "Monessen (BLDV-SC)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLOTST-SC",
        name: "Fan Kit MFK-BLOTST-SC",
        image: "img/products_catalog/MFK-BLOTST-SC-w.jpg",
        oem: "Monessen (BLOTST-SC)",
        dimensions: '1.5" x 9.5" (38mm x 240mm)',
        cfm: "60",
      },
      {
        code: "BLWR-BLOT/BLOT240",
        name: "Blower BLWR-BLOT/BLOT240",
        image: "img/products_catalog/BLWR-BLOT-2017w.jpg",
        oem: "Monessen (BLOT/BLOT240)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "BLWR-BLOT180",
        name: "Blower BLWR-BLOT180",
        image: "img/products_catalog/BLWR-BLOT180-w.jpg",
        oem: "Monessen (BLOT180)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "90",
      },
      {
        code: "BLWR-BLDV/BLDV-SC/BLOTST-SC",
        name: "Blower BLWR-BLDV/BLDV-SC/BLOTST-SC",
        image: "img/products_catalog/BLWR-BLDV-w.jpg",
        oem: "Monessen (BLDV/BLDV-SC/BLOTST-SC)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
    ],
  },
  napoleon: {
    title: "Napoleon",
    description:
      "High-quality fan kits and blowers for Napoleon fireplace systems.",
    products: [
      {
        code: "MFK-550",
        name: "Fan Kit MFK-550",
        image: "img/products_catalog/MFK-550-w.jpg",
        oem: "Napoleon (GZ550)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "MFK-AUB-M",
        name: "Fan Kit MFK-AUB-M",
        image: "img/products_catalog/MFK-AUB-M-2017w.jpg",
        oem: "Napoleon (AUB-M)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-AUB",
        name: "Fan Kit MFK-AUB",
        image: "img/products_catalog/MFK-AUB-w.jpg",
        oem: "Napoleon (AUB)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-62-1",
        name: "Fan Kit MFK-62-1",
        image: "img/products_catalog/MFK-62-1-w.jpg",
        oem: "Napoleon (GZ62-1)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "MFK-62",
        name: "Fan Kit MFK-62",
        image: "img/products_catalog/MFK-62-w.jpg",
        oem: "Napoleon (GZ62)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "BLWR-NAP",
        name: "Blower BLWR-NAP",
        image: "img/products_catalog/BLWR-NAP-w.jpg",
        oem: "Napoleon (GZ552)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "115",
      },
      {
        code: "BLWR-AUB",
        name: "Blower BLWR-AUB",
        image: "img/products_catalog/BLWR-AUB-w.jpg",
        oem: "Napoleon (AUB)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
    ],
  },
  "pacific-energy": {
    title: "Pacific Energy",
    description:
      "Efficient fan systems for Pacific Energy wood and gas fireplaces.",
    products: [
      {
        code: "MFK-PWB",
        name: "Fan Kit MFK-PWB",
        image: "img/products_catalog/MFK-PWB-w.jpg",
        oem: "Pacific Energy (PWB)",
        dimensions: '3" x 4" (75mm x 100mm)',
        cfm: "125",
      },
      {
        code: "BLWR-PWB",
        name: "Blower BLWR-PWB",
        image: "img/products_catalog/BLWR-PACF-w.jpg",
        oem: "Pacific Energy (PWB)",
        dimensions: '3" x 4" (75mm x 100mm)',
        cfm: "125",
      },
    ],
  },
  travis: {
    title: "Travis",
    description:
      "Replacement blowers for Travis Industries fireplace products.",
    products: [
      {
        code: "BLWR-TRAVIS",
        name: "Blower BLWR-TRAVIS",
        image: "img/products_catalog/BLWR-VC-MAJ-2-w.jpg",
        oem: "Travis Industries (250-00589)",
        dimensions: '2.5" x 9.5" (63mm x 240mm)',
        cfm: "140",
      },
    ],
  },
  universal: {
    title: "Universal",
    description:
      "Versatile fan kits compatible with multiple fireplace brands.",
    products: [
      {
        code: "MFK-UNIV60",
        name: "Fan Kit MFK-UNIV60",
        image: "img/products_catalog/MFK-UNIV60-w.jpg",
        oem: "Universal Fan",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-UNIVDBL",
        name: "Universal Double Blower Kit",
        image: "img/products_catalog/MFK-UNIVDBL-w.jpg",
        oem: "Universal Fit",
        dimensions: '3" x 4" (75mm x 100mm)',
        cfm: "140",
      },
      {
        code: "UNIV-SPDCTRL",
        name: "Universal Speed Control",
        image: "img/products_catalog/UNIV-SPDCTRL-2017w.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
    ],
  },
  "vermont-castings": {
    title: "Vermont Castings",
    description: "Premium fan kits for Vermont Castings wood and gas stoves.",
    products: [
      {
        code: "MFK-24",
        name: "Fan Kit MFK-24",
        image: "img/products_catalog/MFK-24-w.jpg",
        oem: "Vermont Castings (BLOT24)",
        dimensions: '2.5" x 9.5" (63mm x 240mm)',
        cfm: "140",
      },
      {
        code: "MFK-12",
        name: "Fan Kit MFK-12",
        image: "img/products_catalog/MFK-12-w.jpg",
        oem: "Vermont Castings (BLOT12)",
        dimensions: '2.5" x 9.5" (63mm x 240mm)',
        cfm: "140",
      },
      {
        code: "MFK-BLOT",
        name: "Fan Kit MFK-BLOT",
        image: "img/products_catalog/MFK-BLOT-w.jpg",
        oem: "Vermont Castings (BLOT)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLOT240",
        name: "Fan Kit MFK-BLOT240",
        image: "img/products_catalog/MFK-BLOT240-2017w.jpg",
        oem: "Vermont Castings (BLOT240)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLOT180",
        name: "Fan Kit MFK-BLOT180",
        image: "img/products_catalog/MFK-BLOT180-w.jpg",
        oem: "Vermont Castings (BLOT180)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "90",
      },
      {
        code: "MFK-BLDV",
        name: "Fan Kit MFK-BLDV",
        image: "img/products_catalog/MFK-BLDV-w.jpg",
        oem: "Vermont Castings (BLDV)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLDV-SC",
        name: "Fan Kit MFK-BLDV-SC",
        image: "img/products_catalog/MFK-BLDVSC-trial.jpg",
        oem: "Vermont Castings (BLDV-SC)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "MFK-BLOTST-SC",
        name: "Fan Kit MFK-BLOTST-SC",
        image: "img/products_catalog/MFK-BLOTST-SC-w.jpg",
        oem: "Vermont Castings (BLOTST-SC)",
        dimensions: '1.5" x 9.5" (38mm x 240mm)',
        cfm: "60",
      },
      {
        code: "BLWR-VC-MAJ",
        name: "Blower BLWR-VC-MAJ",
        image: "img/products_catalog/BLWR-VC-MAJ-2-w.jpg",
        oem: "Vermont Castings",
        dimensions: '2.5" x 9.5" (63mm x 240mm)',
        cfm: "140",
      },
      {
        code: "BLWR-BLOT/BLOT240",
        name: "Blower BLWR-BLOT/BLOT240",
        image: "img/products_catalog/BLWR-BLOT-2017w.jpg",
        oem: "Vermont Castings (BLOT/BLOT240)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "BLWR-BLOT180",
        name: "Blower BLWR-BLOT180",
        image: "img/products_catalog/BLWR-BLOT180-w.jpg",
        oem: "Vermont Castings (BLOT180)",
        dimensions: '2.25" x 7" (60mm x 180mm)',
        cfm: "90",
      },
    ],
  },
  "wolf-steel": {
    title: "Wolf Steel",
    description: "High-performance fan kits and blowers for Wolf Steel fireplaces.",
    products: [
      {
        code: "MFK-FBB4",
        name: "Fan Kit MFK-FBB4",
        image: "img/products_catalog/MFK-FBB4-2017w.jpg",
        oem: "Wolf Steel (FBB4)",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
      {
        code: "BLWR-FBB4",
        name: "Blower BLWR-FBB4",
        image: "img/products_catalog/BLWR-BLOT-2017w.jpg",
        oem: "Wolf Steel",
        dimensions: '2.25" x 9.5" (60mm x 240mm)',
        cfm: "120",
      },
    ],
  },
  accessories: {
    title: "Accessories",
    description:
      "Speed controls, mounting brackets, and other fireplace blower accessories.",
    products: [
      {
        code: "TEMP-SENS1",
        name: "Temperature Sensor TEMP-SENS1",
        image: "img/products_catalog/TEMP-SENS1.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
      {
        code: "TEMP-SENS2",
        name: "Temperature Sensor TEMP-SENS2",
        image: "img/products_catalog/TEMP-SENS2.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
      {
        code: "TEMP-SENS3",
        name: "Temperature Sensor TEMP-SENS3",
        image: "img/products_catalog/TEMP-SENS3.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
      {
        code: "TEMP-SENSBRKT",
        name: "Temperature Sensor Bracket",
        image: "img/products_catalog/TEMP-SENSBRKT.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
      {
        code: "UNIV-SPDCTRL",
        name: "Universal Speed Control",
        image: "img/products_catalog/UNIV-SPDCTRL-2017w.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
      {
        code: "SPD-CTRLBRKT",
        name: "Speed Control Bracket",
        image: "img/products_catalog/SPD-CTRLBRKT-2017w.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
      {
        code: "EP36",
        name: "Electronic Parts EP36",
        image: "img/products_catalog/EP-36-w.jpg",
        oem: "Universal",
        dimensions: "N/A",
        cfm: "N/A",
      },
    ],
  },
  "pellet-stove-parts": {
    title: "Pellet Stove Parts",
    description: "Replacement parts and components for pellet stoves.",
    products: [
      {
        code: "PELLET-PARTS-001",
        name: "Pellet Stove Parts - Coming Soon",
        image: "img/products_catalog/placeholder.jpg",
        oem: "Various",
        dimensions: "N/A",
        cfm: "N/A",
      },
    ],
  },
};

// Initialize products page
document.addEventListener("DOMContentLoaded", function () {
  const manufacturerLinks = document.querySelectorAll(".manufacturer-link");
  const productsContainer = document.getElementById("products-container");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".products-sidebar");
  const productsMain = document.querySelector(".products-main");

  console.log("Products page loaded");
  console.log("Container found:", productsContainer);
  console.log("Products data keys:", Object.keys(productsData));

  // Load all manufacturers as sections
  loadAllManufacturers();

  console.log(
    "Products loaded, container children:",
    productsContainer.children.length
  );

  // Scroll spy functionality
  let scrollTimeout;
  const sections = [];

  // Build sections array after loading manufacturers
  setTimeout(() => {
    Object.keys(productsData).forEach((key) => {
      const section = document.getElementById(key);
      if (section) {
        sections.push({
          id: key,
          element: section,
          link: document.querySelector(`[data-manufacturer="${key}"]`),
        });
      }
    });

    // Initialize scroll spy
    initScrollSpy();
  }, 100);

  function initScrollSpy() {
    productsMain.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveLink, 50);
    });

    // Initial check
    updateActiveLink();
  }

  function updateActiveLink() {
    const scrollPos = productsMain.scrollTop + 150; // Offset for header

    let currentSection = sections[0];

    for (const section of sections) {
      const rect = section.element.getBoundingClientRect();
      const sectionTop =
        rect.top + productsMain.scrollTop - productsMain.offsetTop;

      if (scrollPos >= sectionTop) {
        currentSection = section;
      }
    }

    // Update active states
    manufacturerLinks.forEach((link) => link.classList.remove("active"));
    if (currentSection && currentSection.link) {
      currentSection.link.classList.add("active");
    }
  }

  // Manufacturer navigation click handlers - smooth scroll to section
  manufacturerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const manufacturer = this.getAttribute("data-manufacturer");
      const targetSection = document.getElementById(manufacturer);

      if (targetSection) {
        // Smooth scroll to section
        const offsetTop =
          targetSection.offsetTop - productsMain.offsetTop - 100;
        productsMain.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Update URL hash
        history.pushState(null, null, `#${manufacturer}`);

        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("active");
        }
      }
    });
  });

  // Mobile sidebar toggle
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  }

  // Load all manufacturers as scrollable sections
  function loadAllManufacturers() {
    productsContainer.innerHTML = "";

    Object.keys(productsData).forEach((manufacturer, index) => {
      const section = createManufacturerSection(manufacturer, index);
      productsContainer.appendChild(section);
    });
  }

  function createManufacturerSection(manufacturer, index) {
    const data = productsData[manufacturer];
    const section = document.createElement("section");
    section.id = manufacturer;
    section.className = "manufacturer-section";
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    const header = document.createElement("div");
    header.className = "section-header-products";
    header.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.description}</p>
    `;

    const grid = document.createElement("div");
    grid.className = "products-grid-section";

    data.products.forEach((product, productIndex) => {
      const productCard = createProductCard(product, productIndex);
      grid.appendChild(productCard);
    });

    section.appendChild(header);
    section.appendChild(grid);

    // Stagger animation for section
    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.6s ease";

      // Animate product cards
      const cards = section.querySelectorAll(".product-card");
      cards.forEach((card, cardIndex) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, cardIndex * 50);
      });
    }, index * 100);

    return section;
  }

  // Create product card element
  function createProductCard(product, productIndex) {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='img/products/fireplacekit_product.png'">
            </div>
            <div class="product-info">
                <div class="product-header">
                    <h3>${product.name}</h3>
                    <div class="product-code">${product.code}</div>
                </div>
                <div class="product-specs">
                    <div class="spec">
                        <i class="fas fa-building"></i>
                        <div class="spec-content">
                            <strong>OEM Cross-Reference</strong>
                            <p>${product.oem}</p>
                        </div>
                    </div>
                    <div class="spec">
                        <i class="fas fa-ruler"></i>
                        <div class="spec-content">
                            <strong>Dimensions of Blower (inches)</strong>
                            <p>${product.dimensions}</p>
                        </div>
                    </div>
                    <div class="spec">
                        <i class="fas fa-fan"></i>
                        <div class="spec-content">
                            <strong>CFM</strong>
                            <p>${product.cfm}</p>
                        </div>
                    </div>
                </div>
                <button class="btn-quote" onclick="openQuoteModal('${product.code}', '${product.name}')">Request a quote</button>
            </div>
        `;

    return card;
  }

  // Quote Modal Functions
  window.openQuoteModal = function (productCode, productName) {
    const modal = document.getElementById("quoteModal");
    if (modal) {
      document.getElementById("modalProductCode").textContent = productCode;
      document.getElementById("modalProductName").textContent = productName;
      document.getElementById("quoteForm").reset();
      document.getElementById("quantity").value = "1";
      modal.classList.add("show");
    }
  };

  window.closeQuoteModal = function () {
    const modal = document.getElementById("quoteModal");
    if (modal) {
      modal.classList.remove("show");
    }
  };

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("quoteModal");
    if (modal && event.target == modal) {
      modal.classList.remove("show");
    }
  });

  // Handle quote form submission
  const quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const productCode =
        document.getElementById("modalProductCode").textContent;
      const productName =
        document.getElementById("modalProductName").textContent;
      const quantity = document.getElementById("quantity").value;
      const company = document.getElementById("company").value;
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const comments = document.getElementById("comments").value;

      // Create request object
      const quoteRequest = {
        product: {
          code: productCode,
          name: productName,
        },
        quantity: quantity,
        contact: {
          company: company,
          name: name,
          email: email,
          phone: phone,
        },
        comments: comments,
      };

      // Log the request (in real implementation, would send to backend)
      console.log("Quote Request:", quoteRequest);

      // Show success message
      alert(
        `Thank you ${name}! Your quote request for ${productCode} has been sent. We will contact you soon at ${email}.`
      );

      // Close modal
      closeQuoteModal();
    });
  }

  // Handle hash changes for direct links
  window.addEventListener("hashchange", function () {
    const hash = window.location.hash.substring(1);
    if (hash && productsData[hash]) {
      const link = document.querySelector(`[data-manufacturer="${hash}"]`);
      if (link) {
        link.click();
      }
    }
  });

  // Load from hash on page load
  const initialHash = window.location.hash.substring(1);
  if (initialHash && productsData[initialHash]) {
    const link = document.querySelector(`[data-manufacturer="${initialHash}"]`);
    if (link) {
      link.click();
    }
  }
});
