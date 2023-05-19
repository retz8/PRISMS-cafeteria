// WholeTable [HomePage]
// Display a table of all the data in the database
// x axis: breakfast, lunch, brunch, dinner
// y axis: date

// Add Search function (If you can't do this, it's fine)
// by date, mealType(breakfast, lunch, brunch dinner)

// MUI Data Grid
// example: https://blog.openreplay.com/display-data-with-material-ui-s-data-grid/
// official doc: https://mui.com/x/react-data-grid/

import { useSnapshot } from "valtio";
import styles from "./WholeTable.module.css";
import state from "../../store";

export default function WholeTable() {
  const snap = useSnapshot(state);
  const { data } = snap;

  // please open dev console on web browser and check the format of data first
  console.log(data);

  return <div className={styles.container}>WholeTable</div>;
}
