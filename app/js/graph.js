var graph = document.getElementById("chartdiv");

if (graph) {

	am4core.useTheme(am4themes_animated);

	var chart = am4core.create("chartdiv", am4charts.XYChart);

	chart.data = [
		{
			"dateFormat": "01/01/2021",
			"date": '2021-01-24T07:12:02.000Z',
			"month": "Январь",
			"label": "Январь 01, 2021",
			"value": 20100
		},
		{
			"dateFormat": "05/02/2022",
			"date": '2022-02-24T07:12:02.000Z',
			"month": "Февраль",
			"label": "Февраль 05, 2022",
			"value": 20200
		},
		{
			"dateFormat": "10/03/2023",
			"date": '2023-03-24T07:12:02.000Z',
			"month": "Март",
			"label": "Март 10, 2023",
			"value": 20300
		},
		{
			"dateFormat": "17/04/2032",
			"date": '2032-04-24T07:12:02.000Z',
			"month": "Апрель",
			"label": "Апрель 17, 2032",
			"value": 20400
		},
		{
			"dateFormat": "20/05/2033",
			"date": '2033-05-24T07:12:02.000Z',
			"month": "Май",
			"label": "Май 20, 2033",
			"value": 20500
		},
		{
			"dateFormat": "21/06/2034",
			"date": '2034-06-24T07:12:02.000Z',
			"month": "Июнь",
			"label": "Июнь 21, 2034",
			"value": 20600
		},
		{
			"dateFormat": "25/12/2035",
			"date": '2035-12-24T07:12:02.000Z',
			"month": "Декабрь",
			"label": "Декабрь 25, 2035",
			"value": 20700
		},
	];
	chart.dateFormatter.inputDateFormat = "DD/MM/YYYY";
	chart.zoomOutButton.disabled = true;


// Create axes
	var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

	valueAxis.renderer.grid.template.strokeOpacity = 1;
	valueAxis.renderer.grid.template.strokeWidth = 1;
	valueAxis.renderer.grid.template.stroke = am4core.color("#EEEFF0");
	valueAxis.adjustLabelPrecision = false;

// dateAxis.renderer.grid.template.location = 0;
// dateAxis.renderer.minGridDistance = 90;


// Create series
	var series = chart.series.push(new am4charts.LineSeries());
	series.dataFields.valueY = "value";
	series.dataFields.dateX = "dateFormat";
	series.strokeWidth = 14;
	series.minBulletDistance = 20;
	series.stroke = '#CE091D';

// Drop-shaped tooltips
	series.tooltip.getFillFromObject = false;
	series.tooltip.background.cornerRadius = 10;
	series.tooltip.background.strokeOpacity = 0;
	series.tooltip.background.fillOpacity = 1;
	series.tooltip.pointerOrientation = "horizontal";
	series.tooltip.background.fill = am4core.color("#154D80");
	series.tooltip.label.minWidth = 157;
	series.tooltip.label.minHeight = 80;
	series.tooltip.label.textValign = "middle";
	series.tooltipText = `[color:#ffffff; font-size:14px; font-family: "Montserrat Medium", sans-serif;]{label} \n[color:#ffffff;font-size:24px; font-family: "Montserrat Medium", sans-serif;]{valueY}[/]`;

	var shadow = series.tooltip.background.filters.getIndex(0);
	shadow.dx = 0;
	shadow.dy = 0;
	shadow.blur = 0;

// Make bullets grow on hover
	var bullet = series.bullets.push(new am4charts.CircleBullet());
	bullet.circle.strokeWidth = 0;
	bullet.circle.radius = 12;
	bullet.circle.fill = am4core.color("#CE091D");

	var bullethover = bullet.states.create("hover");
	bullethover.properties.scale = 1.5;

// Make a panning cursor
	chart.cursor = new am4charts.XYCursor();
// chart.cursor.behavior = "panXY";
	chart.cursor.xAxis = dateAxis;
	chart.cursor.snapToSeries = series;

	chart.cursor.lineX.stroke = am4core.color("#CE091D");
	chart.cursor.lineX.strokeWidth = 2;
	chart.cursor.lineX.strokeOpacity = 1;
	chart.cursor.lineX.strokeDasharray = "";

	chart.cursor.lineY.stroke = am4core.color("#CE091D");
	chart.cursor.lineY.strokeWidth = 2;
	chart.cursor.lineY.strokeOpacity = 1;
	chart.cursor.lineY.strokeDasharray = "";


	var dropShadow = new am4core.DropShadowFilter();
	dropShadow.dy = 1;
	dropShadow.dx = 1;
	dropShadow.opacity = 0.5;


// Add range selector
	var selector = new am4plugins_rangeSelector.DateAxisRangeSelector();
	selector.container = document.getElementById("controls");
	selector.axis = dateAxis;
	selector.inputDateFormat = "dd/mm/yyyy";

// Add DatePicker
	selector.events.on("drawn", function(ev) {

		from = $(".amcharts-range-selector-from-input").datepicker({
			defaultDate: "+1w",
			dateFormat: 'dd/mm/yyyy',
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			closeText: 'Закрыть',
			prevText: 'Предыдущий',
			nextText: 'Следующий',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Не',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: '',
			onSelect: function() {
				selector.updateZoom();
			}
		}),
			to = $(".amcharts-range-selector-to-input").datepicker({
				defaultDate: "+1w",
				dateFormat: 'dd/mm/yyyy',
				changeMonth: true,
				changeYear: true,
				numberOfMonths: 1,
				closeText: 'Закрыть',
				prevText: 'Предыдущий',
				nextText: 'Следующий',
				currentText: 'Сегодня',
				monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
				monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
				dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
				dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
				dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
				weekHeader: 'Не',
				firstDay: 1,
				isRTL: false,
				showMonthAfterYear: false,
				yearSuffix: '',
				onSelect: function() {
					selector.updateZoom();
				}
			});
	});
}
