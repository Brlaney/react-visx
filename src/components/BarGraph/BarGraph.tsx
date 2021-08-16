// import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
// import { scaleLinear, scaleBand } from '@visx/scale';
import { data } from '../../lib/data';


// Define the graph dimensions and margins
const width = 500;
const height = 200;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const x = data[0];
const y = data[1];

// We'll make some helpers to get at the data we want
// const x = d => d.letter;
// const y = d => +d.frequency * 100;

// And then scale the graph by our data
// const xScale = scaleBand({
//   range: [0, xMax],
//   round: true,
//   domain: data.map(x),
//   padding: 0.4,
// });
// const yScale = scaleLinear({
//   range: [yMax, 0],
//   round: true,
//   domain: [0, Math.max(...data.map(y))],
// });

// // Compose together the scale and accessor functions to get point functions
// const compose = (scale, accessor) => data => scale(accessor(data));
// const xPoint = compose(xScale, x);
// const yPoint = compose(yScale, y);


// Finally we'll embed it all in an SVG
const BarGraph = ({data}) => {
  return (
    <svg width={width} height={height}>
      {data.map((d: any, i: number) => {
        const barHeight = yMax - 70;
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={x}
              y={y}
              height={barHeight}
              width={400}
              fill='#943E46'
            />
          </Group>
        );
      })}
    </svg>
  );
}

export default BarGraph;

// const BarGraph = ({data}) => {
//   return (
//     <svg width={width} height={height}>
//       {data.map((d: any, i: number) => {
//         const barHeight = yMax - yPoint(d);
//         return (
//           <Group key={`bar-${i}`}>
//             <Bar
//               x={xPoint(d)}
//               y={yMax - barHeight}
//               height={barHeight}
//               width={xScale.bandwidth()}
//               fill="#943E46"
//             />
//           </Group>
//         );
//       })}
//     </svg>
//   );
// }