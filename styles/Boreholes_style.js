var size = 0;
function categories_Boreholes(feature, value) {
                switch(value) {case "14-Sep":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.2 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(247,255,7,1.0)"})})
    })];
                    break;
case "17-Feb":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.2 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(52,255,1,1.0)"})})
    })];
                    break;}};
var styleCache_Boreholes={}
var style_Boreholes = function(feature, resolution){
    var value = feature.get("Date Of Survey");
    var style = categories_Boreholes(feature, value);
    if (feature.get("Name") !== null) {
        var labelText = String(feature.get("Name"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Boreholes[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 1
              }),
            });
        styleCache_Boreholes[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Boreholes[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};