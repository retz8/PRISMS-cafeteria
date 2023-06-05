import React from "react";
import { MockData } from "../../model/data";
import styles from "./TodaySummary.module.css";
import { useSnapshot } from "valtio";
import state from "../../store";

type Props = {
  mealType: string;
  isAll: boolean;
};

export default function TodaySummary({ mealType, isAll }: Props) {
  const snap = useSnapshot(state);

  const { breakfast, lunch, dinner, brunch } = snap;

  const isToday = (date: string) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const currentDay = String(currentDate.getDate()).padStart(2, "0");
    const currentDateString = `${currentYear}-${currentMonth}-${currentDay}`;

    // Convert date strings to Date objects
    const targetDate = new Date(date);
    const currentDateObj = new Date(currentDateString);

    if (targetDate === currentDateObj) {
      return true;
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {`Today (${new Date().toDateString().slice(4)})`}
      </p>

      {isAll ? (
        <div>
          {isToday(breakfast[0]?.date) ? (
            <div className={styles.numberContainer}>
              <p className={styles.text}>{breakfast[0]?.total}</p>
              <p className={styles.baseText}>people ate Breakfast</p>
            </div>
          ) : (
            <p>No Data on Breakfast...</p>
          )}

          {isToday(lunch[0]?.date) ? (
            <div className={styles.numberContainer}>
              <p className={styles.text}>{lunch[0]?.total}</p>
              <p className={styles.baseText}>people ate Lunch</p>
            </div>
          ) : (
            <p>No Data on Lunch...</p>
          )}

          {isToday(dinner[0]?.date) ? (
            <div className={styles.numberContainer}>
              <p className={styles.text}>{dinner[0]?.total}</p>
              <p className={styles.baseText}>people atE Dinner</p>
            </div>
          ) : (
            <p>No Data on Dinner...</p>
          )}

          {isToday(brunch[0]?.date) ? (
            <div className={styles.numberContainer}>
              <p className={styles.text}>{brunch[0]?.total}</p>
              <p className={styles.baseText}>people atE Brunch</p>
            </div>
          ) : (
            <p>No Data on Brunch...</p>
          )}
        </div>
      ) : mealType === "breakfast" ? (
        isToday(breakfast[0]?.date) ? (
          <div className={styles.numberContainer}>
            <p className={styles.text}>{breakfast[0]?.total}</p>
            <p className={styles.baseText}>people ate Breakfast</p>
          </div>
        ) : (
          <p>No Data today...</p>
        )
      ) : mealType === "lunch" ? (
        isToday(lunch[0]?.date) ? (
          <div className={styles.numberContainer}>
            <p className={styles.text}>{lunch[0]?.total}</p>
            <p className={styles.baseText}>people ate Lunch</p>
          </div>
        ) : (
          <p>No Data today...</p>
        )
      ) : mealType === "dinner" ? (
        isToday(dinner[0]?.date) ? (
          <div className={styles.numberContainer}>
            <p className={styles.text}>{dinner[0]?.total}</p>
            <p className={styles.baseText}>people ate Dinner</p>
          </div>
        ) : (
          <p>No Data today...</p>
        )
      ) : isToday(brunch[0]?.date) ? (
        <div className={styles.numberContainer}>
          <p className={styles.text}>{brunch[0]?.total}</p>
          <p className={styles.baseText}>people ate BrUnch</p>
        </div>
      ) : (
        <p>No Data today...</p>
      )}
    </div>
  );
}
