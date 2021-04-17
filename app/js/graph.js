/***/

$(document).ready(function () {
	var chartData = [
		{ "date": "2021-01-26 10:13", "value": 1000 },
		{ "date": "2021-01-26 10:17", "value": 2718 },
		{ "date": "2021-01-28 14:35", "value": 5047 },
		{ "date": "2021-01-28 14:41", "value": 7236 },
		{ "date": "2021-01-30 10:56", "value": 10143 },
		{ "date": "2021-01-30 10:59", "value": 8593 },
		{ "date": "2021-01-30 11:02", "value": 7193 },
		{ "date": "2021-01-30 11:07", "value": 11225 },
		{ "date": "2021-01-31 10:45", "value": 9105 },
		{ "date": "2021-01-31 10:48", "value": 9678 },
		{ "date": "2021-02-01 11:26", "value": 10781 },
		{ "date": "2021-02-02 14:04", "value": 11967 },
		{ "date": "2021-02-03 11:42", "value": 9767 },
		{ "date": "2021-02-05 13:20", "value": 11509 },
		{ "date": "2021-02-07 11:30", "value": 12584 },
		{ "date": "2021-02-08 17:35", "value": 12584 },
		{ "date": "2021-02-09 17:07", "value": 10324 },
		{ "date": "2021-02-10 08:17", "value": 10324 },
		{ "date": "2021-02-12 07:54", "value": 10612 },
		{ "date": "2021-02-15 16:07", "value": 11889 },
		{ "date": "2021-02-17 08:10", "value": 13356 },
		{ "date": "2021-02-18 08:12", "value": 13356 },
		{ "date": "2021-02-19 08:02", "value": 11016 },
		{ "date": "2021-02-27 10:43", "value": 11016 },
		{ "date": "2021-03-06 10:21", "value": 12507 },
		{ "date": "2021-03-06 10:21", "value": 13452 },
		{ "date": "2021-03-07 12:09", "value": 15144 },
		{ "date": "2021-03-17 16:02", "value": 12634 },
		{ "date": "2021-03-17 16:02", "value": 14193 },
		{ "date": "2021-03-20 09:47", "value": 16081 },
		{ "date": "2021-03-20 09:48", "value": 17890 },
		{ "date": "2021-03-21 10:46", "value": 19480 },
		{ "date": "2021-03-21 10:47", "value": 19480 },
		{ "date": "2021-03-21 10:48", "value": 19480 },
		{ "date": "2021-03-22 15:45", "value": 19480 },
		{ "date": "2021-03-23 11:24", "value": 16530 },
		{ "date": "2021-03-25 13:42", "value": 18385 },
	];

	var chart = AmCharts.makeChart('chartdiv', {
		"type": "stock",
		"language": "ru",
		"theme": "light",
		"dataDateFormat": "YYYY-MM-DD JJ:NN",
		"minPeriod": "mm",
		"dataSets": [{
			"color": "#CE091D",
			"fieldMappings": [{
				"fromField": "value",
				"toField": "value"
			}, {
				"fromField": "volume",
				"toField": "volume"
			}],
			"dataProvider": chartData,
			"categoryField": "date",

		}],
		"listeners": [{
			"event": "zoomed",
			"method": handleZoom
		}],

		"panels": [{
			"stockGraphs": [{
				"id": "g1",
				"valueField": "value",
				"lineThickness": 14,
				"bullet": "circle",
				"balloonText": "<div class='chart-baloon' style='margin: -5px -11px -6px -10px; padding:18px; background: #154D80; color: #fff; text-align: left; font-size:24px;'><span style='font-size:14px;'>[[category]]</span><br>[[value]]</div>"
			}],
			"stockLegend": false
		}],

		"chartScrollbarSettings": {
			"graph": "g1",
			"position": "bottom",
			"graphType": "ohlc",
			"backgroundColor": "#1b212b",
			"selectedBackgroundColor": "#CE091D",
			"selectedBackgroundAlpha": 1
		},

		"chartCursorSettings": {
			"valueBalloonsEnabled": true,
			"graphBulletSize": 2,
			"valueLineBalloonEnabled": true,
			"valueLineEnabled": true,
			"valueLineAlpha": 1,
			"dataDateFormat": "DD/MM/YYYY",
		},

		"panelsSettings": {
			"usePrefixes": false,
			"marginRight": 0,
			"marginLeft": 0,
		},
		"export": {
			"enabled": false
		},
		"chartCursorSettings": {
			"valueBalloonsEnabled": true
		},
	});

	chart.addListener("zoomed", handleZoom);
	function handleZoom(event) {
		console.log(event);

		var startDate = AmCharts.formatDate(new Date(event.startDate), "YYYY-MM-DD");
		var endDate = AmCharts.formatDate(new Date(event.endDate), "YYYY-MM-DD");
			console.log(startDate);
		    console.log(endDate);
	}
});
