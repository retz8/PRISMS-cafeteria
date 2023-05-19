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

  // please open dev console on web browser and check the format of data first
  console.log(data);

  return <div className={styles.container}>{mealType}</div>;
}
