import styles from "./BrunchPage.module.css";
import MealGraph from "../../components/MealGraph/MealGraph";
import MealTable from "../../components/MealTable/MealTable";
import TodaySummary from "../../components/TodaySummary/TodaySummary";

export default function BrunchPage() {
  return (
    <div className={styles.container}>
      <div className={styles.graphContainer}>
        <TodaySummary mealType={"brunch"} isAll={false} />
        <MealGraph mealType="brunch" />
      </div>

      <div className={styles.tableContainer}>
        <MealTable mealType="brunch" />
      </div>
    </div>
  );
}
