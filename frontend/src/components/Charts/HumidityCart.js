import ReactApexChart from "react-apexcharts";

const HumidityChart = ({data}) => {
    const series= [{
        name: "Humidity : ",
        data: data.map(item=>item.humidity)
    }]
    const options = {
        chart: {
            height: 350,
            width: '100%',
            type: 'area',
            color: 'red',
            zoom: {
            enabled: false
            },
            toolbar: {
                show: false
            },
            animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: { 
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: false,
                speed: 350
            }},
        },
        
        colors: ['#008ffb', '#5B7DB1'],
        annotations: {
            yaxis: [{
              y: 80,
              borderColor: '#EF4B4B',
              label: {
                show: true,
                text: 'Danger',
                style: {
                  color: "#fff",
                  background: '#EF4B4B'
                }
              }
            }]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Humidity (%RH)',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], 
            opacity: 0.5
          },
        },
        yaxis: {
            min: 0,
            max:100,
        },
        xaxis: {
        categories: data.map(item=>item.Date.split('T')[1].slice(0,8)),
        reversed: true
        }   
    };

    return ( 
      <div className="chart-item">
        <ReactApexChart options={options} series={series}  type="area" height={350} />
      </div>
     );
}
 
export default HumidityChart;