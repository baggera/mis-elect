'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options_reports = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false
        }
      },
      colors: ['#1DE9B6', '#A389D4', '#0398F2'],
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          stops: [0, 100],
          shadeIntensity: 0.5,
          gradientToColors: ['#1DC4E9', '#899ED4', '#38B9E7']
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Tomorow',
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },
        {
          name: 'Today',
          data: [50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        },
        {
          name: 'Yesterday',
          data: [60, 50, 65, 30, 60, 40, 70, 50, 55, 45, 50, 90]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart_reports = new ApexCharts(document.querySelector('#reports-chart'), options_reports);
    chart_reports.render();
    document.querySelector('#chart-line').addEventListener('click', function (e) {
      chart_reports.updateOptions({
        chart: {
          type: 'line'
        },
        fill: {
          type: 'solid'
        }
      });
    });
    document.querySelector('#chart-area').addEventListener('click', function (e) {
      chart_reports.updateOptions({
        chart: {
          type: 'area'
        },
        fill: {
          type: 'gradient'
        }
      });
    });
    document.querySelector('#chart-bar').addEventListener('click', function (e) {
      chart_reports.updateOptions({
        chart: {
          type: 'bar'
        },
        fill: {
          type: 'solid'
        }
      });
    });
  }, 500);
});