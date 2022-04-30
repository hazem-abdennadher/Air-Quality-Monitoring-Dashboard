import ReactApexChart from "react-apexcharts";

const WeekStatsPercenatge = ({data}) => {
    const Low = data.map(item=>item.Low).reduce((a, b) => a + b, 0);
    const Normal = data.map(item=>item.Normal).reduce((a, b) => a + b, 0);
    const High = data.map(item=>item.High).reduce((a, b) => a + b, 0);

    
    const sum = Low + Normal + High;
    const series =[Low * 100 / sum, Normal * 100 / sum, High * 100 / sum];
    const options = {
        chart: {
            type: 'donut',
        },
        labels: ['Low', 'Normal', 'High'],
        responsive: [{
        breakpoint: 480,
        options: {
          chart: {
              width: "100%",
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            offsetY: -10
        },
        title: {
            text: 'Weekly Statistics',
            align: 'Center'
        },        
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '15px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            color: undefined,
                            offsetY: -10
                        },
                        value: {
                            show: true,
                            fontSize: '15px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            color: undefined,
                            offsetY: -10,
                            formatter: function (val) {
                                return val + " %"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            color: '#373d3f',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + " %"
                            }
                        }
                    }
                }
            }
        },
        

    };
    return ( 
        <ReactApexChart  className="stats-item" options={options} series={series} type="donut" width={480} />
     );
}
 
export default WeekStatsPercenatge;