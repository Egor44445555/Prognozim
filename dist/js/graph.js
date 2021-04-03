am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "date": "2012-07-27",
      "value": 0
    }, {
      "date": "2012-07-28",
      "value": 50.000
    }, {
      "date": "2012-07-29",
      "value": 200.000
    }, {
      "date": "2012-07-30",
      "value": 50.000
    }, {
      "date": "2012-07-31",
      "value": 100.000
    }, {
      "date": "2012-08-01",
      "value": 350.000
    }, {
      "date": "2012-08-02",
      "value": 400.000
    }];
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"
    series.stroke = am4core.color("#CE091D");
    series.strokeWidth = 14;
    series.minBulletDistance = 14;
    series.tooltipText = `value: {valueY}`;
    
    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";
    
    // Make bullets grow on hover
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 0;
    bullet.circle.radius = 12;
    bullet.circle.fill = am4core.color("#CE091D");
    
    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;
    
    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;
    
    // Create vertical scrollbar and place it before the value axis
    // chart.scrollbarY = new am4core.Scrollbar();
    // chart.scrollbarY.parent = chart.leftAxesContainer;
    // chart.scrollbarY.toBack();
    
    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;
    
    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;
});



/***/

// $(document).ready( function () {
//   $.noConflict(true);
// var chartData = [
// {"date": "2021-01-26 10:13", "value": 1000 },
// {"date": "2021-01-26 10:17", "value": 2718 },
// {"date": "2021-01-28 14:35", "value": 5047 },
// {"date": "2021-01-28 14:41", "value": 7236 },
// {"date": "2021-01-30 10:56", "value": 10143 },
// {"date": "2021-01-30 10:59", "value": 8593 },
// {"date": "2021-01-30 11:02", "value": 7193 },
// {"date": "2021-01-30 11:07", "value": 11225 },
// {"date": "2021-01-31 10:45", "value": 9105 },
// {"date": "2021-01-31 10:48", "value": 9678 },
// {"date": "2021-02-01 11:26", "value": 10781 },
// {"date": "2021-02-02 14:04", "value": 11967 },
// {"date": "2021-02-03 11:42", "value": 9767 },
// {"date": "2021-02-05 13:20", "value": 11509 },
// {"date": "2021-02-07 11:30", "value": 12584 },
// {"date": "2021-02-08 17:35", "value": 12584 },
// {"date": "2021-02-09 17:07", "value": 10324 },
// {"date": "2021-02-10 08:17", "value": 10324 },
// {"date": "2021-02-12 07:54", "value": 10612 },
// {"date": "2021-02-15 16:07", "value": 11889 },
// {"date": "2021-02-17 08:10", "value": 13356 },
// {"date": "2021-02-18 08:12", "value": 13356 },
// {"date": "2021-02-19 08:02", "value": 11016 },
// {"date": "2021-02-27 10:43", "value": 11016 },
// {"date": "2021-03-06 10:21", "value": 12507 },
// {"date": "2021-03-06 10:21", "value": 13452 },
// {"date": "2021-03-07 12:09", "value": 15144 },
// {"date": "2021-03-17 16:02", "value": 12634 },
// {"date": "2021-03-17 16:02", "value": 14193 },
// {"date": "2021-03-20 09:47", "value": 16081 },
// {"date": "2021-03-20 09:48", "value": 17890 },
// {"date": "2021-03-21 10:46", "value": 19480 },
// {"date": "2021-03-21 10:47", "value": 19480 },
// {"date": "2021-03-21 10:48", "value": 19480 },
// {"date": "2021-03-22 15:45", "value": 19480 },
// {"date": "2021-03-23 11:24", "value": 16530 },
// {"date": "2021-03-25 13:42", "value": 18385 },

// ];


// var chart = amcharts.makeChart('statchart',{
// "type": "stock",
// "language": "ru",
// "theme": "light",
// "dataDateFormat": "YYYY-MM-DD JJ:NN",
// "minPeriod": "mm",
// "dataSets": [ {
// "color": "#aa4243",
// "fieldMappings": [ {
// "fromField": "value",
// "toField": "value"
// }, {
// "fromField": "volume",
// "toField": "volume"
// } ],
// "dataProvider": chartData,
// "categoryField": "date",

// } ],
// "listeners": [ {
// "event": "zoomed",
// "method": handleZoom
// }],

// "panels": [ {

// "stockGraphs": [ {
// "id": "g1",
// "valueField": "value",
// "lineThickness": 1.5,
// "bullet": "circle",

// "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"


// } ],
// "stockLegend": false
// } ],

// "chartScrollbarSettings": {
// "graph": "g1",
// "position":"bottom",
// "graphType":"ohlc",
// "backgroundColor":"#1b212b",
// "selectedBackgroundColor":"#aa4243",
// "selectedBackgroundAlpha": 1


// },

// "chartCursorSettings": {
// "valueBalloonsEnabled": true,
// "graphBulletSize": 2,
// "valueLineBalloonEnabled": true,
// "valueLineEnabled": true,
// "valueLineAlpha":1,
// "dataDateFormat": "YYYY-MM-DD JJ:NN",
// },


// "panelsSettings": {
// "usePrefixes": false,
// "marginRight": 20,
// "marginLeft": 20,

// },
// "export": {
// "enabled": false
// },
// "chartCursorSettings": {
// "valueBalloonsEnabled": true
// },


// } );

// //chart.addListener("zoomed", handleZoom);
// //$.noConflict(true);
// function handleZoom(event) {
// //alert(event);

// var startDate =  AmCharts.formatDate(new Date(event.startDate), "YYYY-MM-DD");
// var endDate = AmCharts.formatDate(new Date(event.endDate), "YYYY-MM-DD");
// // console.log(startDate);
// //     console.log(endDate);
// var table = $('#graphtable').DataTable({

// processing: true,

// paging: true,
// serverSide: true,
// ajax: "https://prognozim.com/expertsgraph/vladislav-zhuravlev?"+'startDate='+startDate+'&endDate='+endDate,

// searching: false,
// lengthChange: false,
// retrieve: true,
// destroy: true,
// ordering: false,
// bInfo : false,
// "language": {
// "paginate": {
// "previous": "<",
// "next": ">"
// },
// "zeroRecords": "Нет данных",
// "infoEmpty": "Нет данных",
// "processing": "Загрузка..."

// },
// columns: [

// { data: 'date_at', name: 'date_at' ,className: "match text-center"},
// { data: 'sports', name: 'sports' ,className: "match ratingsubh"},
// { data: 'type', name: 'type' ,className: "match ratingsubh"},
// { data: 'factor', name: 'factor',className: "match ratingsubh" },
// { data: 'sum', name: 'sum',className: "match ratingsubh" },
// { data: 'result', name: 'result',className: "match ratingsubh" },

// ],
// createdRow: function( row, data, dataIndex ) {

// $( row ).attr('data-url', '/prognozes/prognoz'+data.id )

// },

// columnDefs: [ {

// targets: [2],
// "render": function (data, type, row, meta, type) {

// if(row.type == 0 ){
// return '<span class="infomatch">Прогноз</span>';
// }
// else if(row.type == 1 ){
// return '<span class="infomatch">Экспресс</span>';
// }
// }
// },
// {
// targets: [4],
// "render": function (data, type, row, meta, sum) {

// return row.sum+' p.';
// }
// },
// {
// targets: [5],
// "render": function (data, type, row, meta, result) {

// if(row.result == 1){
// return "<span class='badge badge-success'>Выйграл</span>";
// }
// else if(row.result == 0 ){
// return "<span class='badge badge-danger'>Проиграл</span>";
// }
// else if(row.result == 2){
// return "<span class='badge badge-warning'>Возврат</span>";
// }
// }
// },


// ],


// });

// table.ajax.url("https://prognozim.com/expertsgraph/vladislav-zhuravlev?"+'startDate='+startDate+'&endDate='+endDate).load();

// //table.destroy();
// // $('#graphtable').empty();
// }
//   $('#graphtable tbody').on('click', 'tr', function () {
//       var url = $( this ).data('url');
//       window.open(url, '_blank').focus();

//   } );
// });