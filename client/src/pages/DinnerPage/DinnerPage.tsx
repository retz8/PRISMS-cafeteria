import styles from "./DinnerPage.module.css";
import MealGraph from "../../components/MealGraph/MealGraph";
import MealTable from "../../components/MealTable/MealTable";
import TodaySummary from "../../components/TodaySummary/TodaySummary";

export default function DinnerPage() {
  return (
    <div className={styles.container}>
      <div className={styles.graphContainer}>
        <TodaySummary mealType={"dinner"} isAll={false} />
        <MealGraph mealType="dinner" />
      </div>

      <div className={styles.tableContainer}>
        <MealTable mealType="dinner" />
      </div>
    </div>
  );
}
