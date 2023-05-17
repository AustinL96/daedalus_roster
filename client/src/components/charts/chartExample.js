import { VictoryBar } from "victory";

const data = [
  { x: 1, y: 2, label: "Submit" },
  { x: 2, y: 3, label: "Approve" },
  { x: 3, y: 8, label: "Interviews" },
];

const MyChart = ({ data }) => {
  return <VictoryBar>{data}</VictoryBar>;
};

export default MyChart;
