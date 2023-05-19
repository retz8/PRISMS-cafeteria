// WholeGraph [HomePage]
// Display a graph to show the change of the number of ppl eating through every meal
// Intro to Echarts: https://medium.com/@noffybarudwale/simple-way-to-use-echart-in-react-9c4267ab4a95
// Examples: https://echarts.apache.org/examples/en/index.html

import { useSnapshot } from "valtio";
import state from "../../store";
import styles from "./WholeGraph.module.css";

export default function WholeGraph() {
  const snap = useSnapshot(state);
  const { data } = snap;

  // please open dev console on web browser and check the format of data first
  console.log(data);

  return <div className={styles.container}>WhooleGrpah</div>;
}
