var map;
    var midnightCommander = {
        "version": "1.0",
        "settings": {
            "landColor": "#583442"
        },
        "elements": {
            "mapElement": {
                "labelColor": "#FFFFFF",
                "labelOutlineColor": "#000000"
            },
            "political": {
                "borderStrokeColor": "#957186",
                "borderOutlineColor": "#00000000"
            },
            "point": {
                "iconColor": "#402A2C",
                "fillColor": "#000000",
                "strokeColor": "#402A2C"
            },
            "transportation": {
                "strokeColor": "#000000",
                "fillColor": "#000000"
            },
            "highway": {
                "strokeColor": "#B795A5",
                "fillColor": "#000000"
            },
            "controlledAccessHighway": {
                "strokeColor": "#B795A5",
                "fillColor": "#000000"
            },
            "arterialRoad": {
                "strokeColor": "#A57B8E",
                "fillColor": "#000000"
            },
            "majorRoad": {
                "strokeColor": "#A57B8E",
                "fillColor": "#000000"
            },
            "railway": {
                "strokeColor": "#61404A",
                "fillColor": "#000000"
            },
            "structure": {
                "fillColor": "#703D57"
            },
            "water": {
                "fillColor": "#241715"
            },
            "area": {
                "fillColor": "#703D57"
            }
        }
    };

    function GetMap()
    {
        map = new Microsoft.Maps.Map('#myMap', {
            customMapStyle: midnightCommander
			//Microsoft.Maps.Location(47.60357, -122.32945)
        });
    
	 map.setView({
           // mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            center: new Microsoft.Maps.Location(48.43724, -122.31020),
            zoom: 10
        });
	}