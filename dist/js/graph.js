am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

var data = [
	{ "date": "01-01-2021", "month": "Январь 01, 2021", "value": 20100},
	{ "date": "05-02-2022", "month": "Февраль 05, 2022", "value": 20200},
	{ "date": "10-03-2023", "month": "Март 10, 2023", "value": 20300},
	{ "date": "17-04-2032", "month": "Апрель 17, 2032", "value": 20400},
	{ "date": "20-05-2033", "month": "Май 20, 2033", "value": 20500},
	{ "date": "21-06-2034", "month": "Июнь 21, 2034", "value": 20600},
	{ "date": "25-12-2035", "month": "Декабрь 25, 2035", "value": 20700},
];

chart.data = data;
chart.dateFormatter.inputDateFormat = "dd/mm/yyyy";
chart.zoomOutButton.disabled = true;


// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());


// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "month";
series.strokeWidth = 14;
series.minBulletDistance = 20;
series.stroke = '#CE091D';

// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 10;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.background.fillOpacity = 1;
series.tooltip.pointerOrientation = "horizontal";
series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#154D80");
series.tooltip.label.minWidth = 157;
series.tooltip.label.minHeight = 80;
series.tooltip.label.textValign = "middle";
series.tooltipText = `[color:#ffffff; font-size:14px; font-family: "Montserrat Medium", sans-serif;]{month} \n[color:#ffffff;font-size:24px; font-family: "Montserrat Medium", sans-serif;]{valueY}[/]`;

var shadow = series.tooltip.background.filters.getIndex(0);
shadow.dx = 0;
shadow.dy = 0;
shadow.blur = 0;
shadow.color = am4core.color("transparent");

// Make bullets grow on hover
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 0;
bullet.circle.radius = 12;
bullet.circle.fill = am4core.color("#CE091D");

var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.5;

// Make a panning cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;

// Add range selector
var selector = new am4plugins_rangeSelector.DateAxisRangeSelector();
selector.container = document.getElementById("controls");
selector.axis = dateAxis;
selector.inputDateFormat = "dd/mm/yyyy";

// Add DatePicker
selector.events.on("drawn", function(ev) {

	var dateFormat = "dd/mm/yyyy",
	from = $(".amcharts-range-selector-from-input").datepicker({
		defaultDate: "+1w",
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
	}).on( "change", function() {
		to.datepicker( "option", "minDate", getDate( this ) );
	}),
	to = $(".amcharts-range-selector-to-input").datepicker({
		defaultDate: "+1w",
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
	}).on( "select", function() {
		from.datepicker( "option", "maxDate", getDate( this ) );
	});
});