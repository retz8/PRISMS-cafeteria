// WholeGraph [HomePage]
// Display a graph to show the change of the number of ppl eating through every meal
// Intro to Echarts: https://medium.com/@noffybarudwale/simple-way-to-use-echart-in-react-9c4267ab4a95
// Examples: https://echarts.apache.org/examples/en/index.html

import { useSnapshot } from "valtio";
import state from "../../store";
import ReactEcharts from "echarts-for-react";
import styles from "./WholeGraph.module.css";

export default function WholeGraph() {
  const snap = useSnapshot(state);
  const { data, breakfast, lunch, dinner, brunch } = snap;

  const option = {
    title: {
      text: "All Meals",
    },
    tooltip: {
      trigger: "axis",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      data: ["Breakfast", "Lunch", "Dinner", "Brunch"],
    },
    xAxis: {
      // meal types
      type: "category",
      boundaryGap: false,
      data: breakfast.map((item) => item.date),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Breakfast",
        type: "line",
        label: {
          show: false,
        },
        data: breakfast.map((item) => item.total),
      },
      {
        name: "Lunch",
        type: "line",
        label: {
          show: false,
        },
        data: lunch.map((item) => item.total),
      },
      {
        name: "Dinner",
        type: "line",
        label: {
          show: false,
        },
        data: dinner.map((item) => item.total),
      },
      {
        name: "Brunch",
        type: "line",
        label: {
          show: false,
        },
        data: brunch.map((item) => item.total),
      },
    ],
  };

  return (
    <div className={styles.container}>
      <ReactEcharts option={option} />
    </div>
  );
}
