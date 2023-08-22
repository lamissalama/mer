var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_bazar_lamis_1 = new ol.format.GeoJSON();
var features_bazar_lamis_1 = format_bazar_lamis_1.readFeatures(json_bazar_lamis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bazar_lamis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bazar_lamis_1.addFeatures(features_bazar_lamis_1);
var lyr_bazar_lamis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bazar_lamis_1, 
                style: style_bazar_lamis_1,
                interactive: true,
                title: '<img src="styles/legend/bazar_lamis_1.png" /> bazar_lamis'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_bazar_lamis_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bazar_lamis_1];
lyr_bazar_lamis_1.set('fieldAliases', {'Id': 'Id', 'No': 'NO', 'Name': 'Brand Name', 'Type': 'Type', 'price': 'Price', });
lyr_bazar_lamis_1.set('fieldImages', {'Id': 'Hidden', 'No': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'price': 'TextEdit', });
lyr_bazar_lamis_1.set('fieldLabels', {'No': 'no label', 'Name': 'no label', 'Type': 'no label', 'price': 'no label', });
lyr_bazar_lamis_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});