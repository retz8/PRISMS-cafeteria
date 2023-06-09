// MealGraph [MealPages (Breakfast, Lunch, Dinner, Brunch)]
// Display graph to show the change of the number of ppl eating in each meal
// Intro to Echarts: https://medium.com/@noffybarudwale/simple-way-to-use-echart-in-react-9c4267ab4a95
// Examples: https://echarts.apache.org/examples/en/index.html

import { useSnapshot } from "valtio";
import styles from "./MealGraph.module.css";
import ReactEcharts from "echarts-for-react";
import state from "../../store";

type Props = {
  mealType: "breakfast" | "lunch" | "dinner" | "brunch";
};

export default function MealGraph({ mealType }: Props) {
  const snap = useSnapshot(state);

  // define data by mealType
  const data =
    mealType === "breakfast"
      ? snap.breakfast
      : mealType === "lunch"
      ? snap.lunch
      : mealType === "dinner"
      ? snap.dinner
      : snap.brunch;

  const option = {
    title: {
      text: `${mealType[0].toLocaleUpperCase()}${mealType.slice(1)}`,
    },
    tooltip: {
      trigger: "axis",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.date),
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 150,
      alignTicks: true,
    },
    series: [
      {
        name: "# of ppl",
        type: "line",
        color: "darkred",
        data: data.map((item) => item.total),
        alignTicks: true,
        // tooltip: {
        //   valueFormatter: (value: string) => value,
        // },
        label: {
          show: true,
          position: "top",
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <ReactEcharts option={option} />
      {/* <div>
        <p>{`${mealType}'s meal data`}</p>
        {data.map((item, index) => (
          <p key={index}>{`${item.date}: ${item.total}`}</p>
        ))}
      </div> */}
    </div>
  );
}
