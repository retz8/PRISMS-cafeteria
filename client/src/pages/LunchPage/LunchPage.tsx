import MealGraph from "../../components/MealGraph/MealGraph";
import MealTable from "../../components/MealTable/MealTable";
import TodaySummary from "../../components/TodaySummary/TodaySummary";
import styles from "./LunchPage.module.css";

export default function LunchPage() {
  return (
    <div className={styles.container}>
      <div className={styles.graphContainer}>
        <TodaySummary mealType={"lunch"} isAll={false} />
        <MealGraph mealType="lunch" />
      </div>

      <div className={styles.tableContainer}>
        <MealTable mealType="lunch" />
      </div>
    </div>
  );
}
