import React from "react";
import ReactApexChart from "react-apexcharts";

// class ChartPieComponents extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [44, 55, 13, 43, 22],
//       options: {
//         chart: {
//           width: 380,
//           type: "pie",
//         },
//         labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 position: "bottom",
//               },
//             },
//           },
//         ],
//       },
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div id="chart">
//           <ReactApexChart
//             options={this.state.options}
//             series={this.state.series}
//             type="pie"
//             width={380}
//           />
//         </div>
//         <div id="html-dist"></div>
//       </div>
//     );
//   }
// }

// export default ChartPieComponents;



interface ChartPieProps {}

const ChartPieComponents: React.FC<ChartPieProps> = () => {
  const series: number[] = [58, 25, 17];

  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Cintara Surya Paloh', 'Surya Surya', 'Cintara'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={550}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ChartPieComponents;

