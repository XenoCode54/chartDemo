                           var options = {
          series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render(); 

        var options = {
          series: [44, 55, 13, 33],
          chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
        };

        var chart = new ApexCharts(document.querySelector("#donutChart"), options);
        chart.render();
      
      
        function appendData() {
        var arr = chart.w.globals.series.slice()
        arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
        return arr;
      }
      
      function removeData() {
        var arr = chart.w.globals.series.slice()
        arr.pop()
        return arr;
      }
      
      function randomize() {
        return chart.w.globals.series.map(function() {
            return Math.floor(Math.random() * (100 - 1 + 1)) + 1
        })
      }
      
      function reset() {
        return options.series
      }
      
      document.querySelector("#randomize").addEventListener("click", function() {
        chart.updateSeries(randomize())
      })
      
      document.querySelector("#add").addEventListener("click", function() {
        chart.updateSeries(appendData())
      })
      
      document.querySelector("#remove").addEventListener("click", function() {
        chart.updateSeries(removeData())
      })
      
      document.querySelector("#reset").addEventListener("click", function() {
        chart.updateSeries(reset())
      })
