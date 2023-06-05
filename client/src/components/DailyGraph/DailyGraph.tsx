// MealGraph [MealPages (Breakfast, Lunch, Dinner, Brunch)]

import ReactEcharts from "echarts-for-react";
import { MockData } from "../../model/data";
import { getMealSchedule } from "../../helpers/getMealSchedule";
import styles from "./DailyGraph.module.css";

type Props = {
  mealType: "breakfast" | "lunch" | "dinner" | "brunch";
  data: MockData; // change to Data
};

export default function DailyGraph({ mealType, data }: Props) {
  const dataNumber = data?.number.replace(/\s/g, "").split(",").map(Number);

  const mealScheduleArr = getMealSchedule(mealType);

  const option = {
    title: {
      text: `${data?.date} ${mealType[0].toLocaleUpperCase()}${mealType.slice(
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
