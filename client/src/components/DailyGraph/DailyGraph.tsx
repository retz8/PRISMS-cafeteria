// MealGraph [MealPages (Breakfast, Lunch, Dinner, Brunch)]
// Display graph to show the change of the number of ppl eating in each meal
// Intro to Echarts: https://medium.com/@noffybarudwale/simple-way-to-use-echart-in-react-9c4267ab4a95
// Examples: https://echarts.apache.org/examples/en/index.html

import { useSnapshot } from "valtio";
import styles from "./DailyGraph.module.css";
import ReactEcharts from "echarts-for-react";
import state from "../../store";
import { Data, MockData } from "../../model/data";
import { getMealSchedule } from "../../helpers/getMealSchedule";

type Props = {
  mealType: "breakfast" | "lunch" | "dinner" | "brunch";
  data: MockData; // change to Data
};

export default function DailyGraph({ mealType, data }: Props) {
  const dataNumber = data.number.replace(/\s/g, "").split(",").map(Number);

  const mealScheduleArr = getMealSchedule(mealType);

  const option = {
    title: {
      text: `${data.date} ${mealType[0].toLocaleUpperCase()}${mealType.slice(
        1
      )}`,
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
      boundaryGap: false,
      data: mealScheduleArr,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Number of People",
        type: "line",
        data: dataNumber,
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
    </div>
  );
}
