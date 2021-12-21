/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = null; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math';
window.DRAWIO_CONFIG = {
    "language": "",
    "customFonts": [],
    "libraries": "general;ABC;uml;er;bpmn;flowchart;basic;arrows2",
    "customLibraries": [
      "L.scratchpad"
    ],
    "plugins": [],
    "recentColors": [],
    "formatWidth": "240",
    "createTarget": false,
    "pageFormat": {
      "x": 0,
      "y": 0,
      "width": 827,
      "height": 1169
    },
    "search": true,
    "showStartScreen": true,
    "gridColor": "#d0d0d0",
    "darkGridColor": "#6e6e6e",
    "autosave": true,
    "resizeImages": null,
    "openCounter": 1,
    "version": 18,
    "unit": 1,
    "isRulerOn": false,
    "ui": ""
  }; 
  // Replace with your custom draw.io configurations. For more details, https://www.diagrams.net/doc/faq/configure-diagram-editor
urlParams['sync'] = 'manual';
