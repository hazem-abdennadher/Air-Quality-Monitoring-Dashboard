import ReactApexChart from "react-apexcharts";

const WeekStatsAvg = ({data}) => {
    const series= [ {
        name: 'Humidity',
        data: data.map(item=>item.avgHum)
      }, {
        name: 'CO2',
        data: data.map(item=>item.avgCO2)
    }, {
        name: 'Gas',
        data: data.map(item=>item.avgGas)
    },{
        name: 'Temprature',
        data: data.map(item=>item.avgTemp)
      }]
    const options= {
        chart: {
          type: 'bar',
          height: 350,
          width: '100%',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: data.map(item=>item._id),
        },
        yaxis: {
            show: false
        },
        //add title
        title: {
            text: 'Weekly Statistics',
            align: 'Center'
        },
        //add legend
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetY: -10
        },
        //add tooltip
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "°C"
                }
            }
        }};

    return ( 
        <ReactApexChart className="stats-item" options={options} series={series} type="bar" height={350} />
    );
}
 
export default WeekStatsAvg;