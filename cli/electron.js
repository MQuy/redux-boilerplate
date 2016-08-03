"use strict"

const path = require('path');
const builder = require("electron-builder")
const Platform = builder.Platform

// Promise is returned
builder.build({
  targets: Platform.MAC.createTarget(),
  devMetadata: {
    "build": {
      "appId": "your.id",
      "app-category-type": "your.app.category.type",
      "asar": false,
      "compression": true,
      "files": [
        "publish/**/*",
        "main.js",
        "package.json"
      ]
    }
  }
})
  .then(() => {
    // handle result
  })
  .catch((error) => {
    // handle error
  })
