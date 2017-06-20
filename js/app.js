Chart.defaults.global.defaultFontColor = 'white';

function MyChart(idCanvas, dataInfo) {
  var chartLabels = [];
  var chartData = [];
  var chartColors = [];
  for(var ii = 0; ii < dataInfo.chart.length; ii++) {
    var chartNode = dataInfo.chart[ii];
    chartLabels.push(chartNode.label);
    chartData.push(chartNode.data);
    chartColors.push(chartNode.color);
  }
  this.canvas = $("#"+ idCanvas);
  this.type = dataInfo.type;
  this.label = dataInfo.mainLabel || '';
  this.mainData = {
    labels: chartLabels,
    datasets: [
      {
        label: this.label,
        data: chartData,
        backgroundColor: chartColors
      }]
  };
  this.options = {
    legend: {
      display: dataInfo.hideLegend ? false : true
    }
  }
}

MyChart.prototype.createChart = function() {

  new Chart(this.canvas, {
    type: this.type,
    data: this.mainData,
    options: this.options
  });
};


var myCharts = {
  frontend: new MyChart('frontendChart', {
    type:'doughnut',
    chart: [
      { label: 'JavaScript', data: 90, color: '#9f0052' },
      { label: 'CSS3', data: 80, color: '#227dac' },
      { label: 'HTML5', data: 50, color: '#ffbe00' },
      { label: 'AngularJS', data: 85, color: '#ff3f20' },
      { label: 'jQuery', data: 60, color: '#443988' }
    ]
  }),
  backend: new MyChart('backendChart', {
    type:'doughnut',
    chart: [
      { label: 'Microsoft SQL Server', data: 20, color: '#1b5f5e' },
      { label: 'C#', data: 20, color: '#b2d0c6' },
      { label: 'Python', data: 20, color: '#feb15f' },
      { label: 'Node.js', data: 50, color: '#da4531' }
    ]
  }),
  extra: new MyChart('extraChart', {
    type:'horizontalBar',
    chart: [
      { label: 'Webpack', data: 80, color: 'red' },
      { label: 'Mercurial', data: 50, color: 'blue' },
      { label: 'Git', data: 70, color: 'pink' },
      { label: 'Problem Solving', data: 100, color: 'purple' },
      { label: 'Hard Work', data: 100, color: 'yellow' },
      { label: 'Laziness', data: 0, color: 'white' },
    ],
    hideLegend: true
  })
}



$(document).ready(function() {
  myCharts.frontend.createChart();
  myCharts.backend.createChart();
  myCharts.extra.createChart();
  $('#viewProjects').click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
  });

});
