var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hospitals_2 = new ol.format.GeoJSON();
var features_hospitals_2 = format_hospitals_2.readFeatures(json_hospitals_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospitals_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospitals_2.addFeatures(features_hospitals_2);
var lyr_hospitals_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hospitals_2, 
                style: style_hospitals_2,
                popuplayertitle: "hospitals",
                interactive: true,
                    title: '<img src="styles/legend/hospitals_2.png" /> hospitals'
                });
var format_major_roads_3 = new ol.format.GeoJSON();
var features_major_roads_3 = format_major_roads_3.readFeatures(json_major_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_major_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_major_roads_3.addFeatures(features_major_roads_3);
var lyr_major_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_major_roads_3, 
                style: style_major_roads_3,
                popuplayertitle: "major_roads",
                interactive: true,
                    title: '<img src="styles/legend/major_roads_3.png" /> major_roads'
                });
var format_water_bodies_4 = new ol.format.GeoJSON();
var features_water_bodies_4 = format_water_bodies_4.readFeatures(json_water_bodies_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_bodies_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_bodies_4.addFeatures(features_water_bodies_4);
var lyr_water_bodies_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_bodies_4, 
                style: style_water_bodies_4,
                popuplayertitle: "water_bodies",
                interactive: true,
                    title: '<img src="styles/legend/water_bodies_4.png" /> water_bodies'
                });
var format_area_of_interest_5 = new ol.format.GeoJSON();
var features_area_of_interest_5 = format_area_of_interest_5.readFeatures(json_area_of_interest_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_of_interest_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_of_interest_5.addFeatures(features_area_of_interest_5);
var lyr_area_of_interest_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_of_interest_5, 
                style: style_area_of_interest_5,
                popuplayertitle: "area_of_interest",
                interactive: true,
                    title: '<img src="styles/legend/area_of_interest_5.png" /> area_of_interest'
                });
var lyr_Rastermask_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Raster mask",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rastermask_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-21970.138379, 6710492.288555, -16806.150877, 6713771.466676]
                            })
                        });
var format_Contornos_7 = new ol.format.GeoJSON();
var features_Contornos_7 = format_Contornos_7.readFeatures(json_Contornos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contornos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contornos_7.addFeatures(features_Contornos_7);
var lyr_Contornos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contornos_7, 
                style: style_Contornos_7,
                popuplayertitle: "Contornos",
                interactive: true,
                    title: '<img src="styles/legend/Contornos_7.png" /> Contornos'
                });
var format_elevation_contours_8 = new ol.format.GeoJSON();
var features_elevation_contours_8 = format_elevation_contours_8.readFeatures(json_elevation_contours_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elevation_contours_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elevation_contours_8.addFeatures(features_elevation_contours_8);
var lyr_elevation_contours_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_elevation_contours_8, 
                style: style_elevation_contours_8,
                popuplayertitle: "elevation_contours",
                interactive: true,
                    title: '<img src="styles/legend/elevation_contours_8.png" /> elevation_contours'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_hospitals_2.setVisible(true);lyr_major_roads_3.setVisible(true);lyr_water_bodies_4.setVisible(true);lyr_area_of_interest_5.setVisible(true);lyr_Rastermask_6.setVisible(false);lyr_Contornos_7.setVisible(false);lyr_elevation_contours_8.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_hospitals_2,lyr_major_roads_3,lyr_water_bodies_4,lyr_area_of_interest_5,lyr_Rastermask_6,lyr_Contornos_7,lyr_elevation_contours_8];
lyr_hospitals_2.set('fieldAliases', {'Name': 'Name', 'City': 'City', });
lyr_major_roads_3.set('fieldAliases', {'Name': 'Name', 'City': 'City', });
lyr_water_bodies_4.set('fieldAliases', {'Name': 'Name', 'Location': 'Location', 'Item': 'Item', });
lyr_area_of_interest_5.set('fieldAliases', {'ID': 'ID', 'Desc.': 'Descrição', 'City': 'Cidade', });
lyr_Contornos_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_elevation_contours_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_hospitals_2.set('fieldImages', {'Name': 'TextEdit', 'City': 'TextEdit', });
lyr_major_roads_3.set('fieldImages', {'Name': 'TextEdit', 'City': 'TextEdit', });
lyr_water_bodies_4.set('fieldImages', {'Name': 'TextEdit', 'Location': 'TextEdit', 'Item': 'TextEdit', });
lyr_area_of_interest_5.set('fieldImages', {'ID': 'Hidden', 'Desc.': 'TextEdit', 'City': 'TextEdit', });
lyr_Contornos_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_elevation_contours_8.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_hospitals_2.set('fieldLabels', {'Name': 'inline label - always visible', 'City': 'inline label - always visible', });
lyr_major_roads_3.set('fieldLabels', {'Name': 'no label', 'City': 'no label', });
lyr_water_bodies_4.set('fieldLabels', {'Name': 'no label', 'Location': 'no label', 'Item': 'no label', });
lyr_area_of_interest_5.set('fieldLabels', {'Desc.': 'no label', 'City': 'no label', });
lyr_Contornos_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_elevation_contours_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_elevation_contours_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});