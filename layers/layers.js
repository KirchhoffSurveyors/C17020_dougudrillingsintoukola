var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_40mSeismicLines = new ol.format.GeoJSON();
var features_40mSeismicLines = format_40mSeismicLines.readFeatures(geojson_40mSeismicLines, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_40mSeismicLines = new ol.source.Vector();
jsonSource_40mSeismicLines.addFeatures(features_40mSeismicLines);var lyr_40mSeismicLines = new ol.layer.Vector({
                source:jsonSource_40mSeismicLines, 
                style: style_40mSeismicLines,
                title: "40m Seismic Lines"
            });var format_Boreholes = new ol.format.GeoJSON();
var features_Boreholes = format_Boreholes.readFeatures(geojson_Boreholes, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boreholes = new ol.source.Vector();
jsonSource_Boreholes.addFeatures(features_Boreholes);var lyr_Boreholes = new ol.layer.Vector({
                source:jsonSource_Boreholes, 
                style: style_Boreholes,
                title: "Boreholes"
            });

lyr_40mSeismicLines.setVisible(true);lyr_Boreholes.setVisible(true);
var layersList = [baseLayer,lyr_40mSeismicLines,lyr_Boreholes];
lyr_40mSeismicLines.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TEXT': 'TEXT', });
lyr_Boreholes.set('fieldAliases', {'Name': 'Name', 'Y': 'Y', 'X': 'X', 'Geoidal Elevation Top of Pipe': 'Geoidal Elevation Top of Pipe', 'Taped': 'Taped', 'Ground level': 'Ground level', 'Description': 'Description', 'Date Of Survey': 'Date Of Survey', });
lyr_40mSeismicLines.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TEXT': 'TextEdit', });
lyr_Boreholes.set('fieldImages', {'Name': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Geoidal Elevation Top of Pipe': 'TextEdit', 'Taped': 'TextEdit', 'Ground level': 'TextEdit', 'Description': 'TextEdit', 'Date Of Survey': 'TextEdit', });
lyr_40mSeismicLines.set('fieldLabels', {'ID': 'inline label', 'AREA': 'inline label', 'PERIMETER': 'inline label', 'TEXT': 'no label', });
lyr_Boreholes.set('fieldLabels', {'Name': 'header label', 'Y': 'inline label', 'X': 'inline label', 'Geoidal Elevation Top of Pipe': 'inline label', 'Taped': 'inline label', 'Ground level': 'inline label', 'Description': 'inline label', 'Date Of Survey': 'inline label', });
