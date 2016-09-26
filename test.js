var makerjs = require("makerjs");
var DoubleBandClamp = require('./index');

var clamp = new DoubleBandClamp(12.7, 25.4, 3, 14, 6, 0, 2, 0.7, 5);

console.log(makerjs.exporter.toDXF(clamp));
