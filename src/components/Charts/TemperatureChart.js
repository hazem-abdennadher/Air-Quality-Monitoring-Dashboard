
import ReactApexChart from "react-apexcharts";
const TemperatureChart = ({data}) => {
        
   
 
    const series= [{
        name: "temperature : ",
        data: data.map(item=>item.temperature)
    }]
    const options = {
        chart: {
        height: 350,
        width: '100%',
        type: 'area',
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
        }}},
        colors: ['#FD5D5D', '#FF8080'],
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
          text: 'Temperature (°C)',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], 
            opacity: 0.5
          },
        },
        yaxis: {
            min: -40,
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
 
export default TemperatureChart;
