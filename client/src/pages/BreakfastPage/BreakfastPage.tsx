import styles from "./BreakfastPage.module.css";
import MealGraph from "../../components/MealGraph/MealGraph";
import MealTable from "../../components/MealTable/MealTable";
import TodaySummary from "../../components/TodaySummary/TodaySummary";

export default function BreakfastPage() {
  return (
    <div className={styles.container}>
      <div className={styles.graphContainer}>
        <TodaySummary mealType={"breakfast"} isAll={false} />
        <MealGraph mealType="breakfast" />
      </div>

      <div className={styles.tableContainer}>
        <MealTable mealType="breakfast" />
      </div>
    </div>
  );
}
