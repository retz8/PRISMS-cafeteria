// firebase testing page
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { onValue, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Data, MockData } from "../../model/data";
import { useSnapshot } from "valtio";
import state from "../../store";
import Loading from "../../components/Loading/Loading";
import WholeGraph from "../../components/WholeGraph/WholeGraph";
import WholeTable from "../../components/WholeTable/WholeTable";
import mockData from "../../assets/mock/data.json";
import TodaySummary from "../../components/TodaySummary/TodaySummary";

export default function HomePage() {
  //const snap = useSnapshot(state);
  const [dataUploaded, setDataUploaded] = useState<boolean>(false);

  // Set all of the data using valtio
  // Data is only renewed when user is on the homepage
  // (To reduce the unnecessary server request from other pages)
  // please change MockData to Data in final code
  const initializeData = (wholeData: MockData[]) => {
    state.data = wholeData;
    state.breakfast = wholeData.filter((item) => item.type === "breakfast");
    state.lunch = wholeData.filter((item) => item.type === "lunch");
    state.dinner = wholeData.filter((item) => item.type === "dinner");
    state.brunch = wholeData.filter((item) => item.type === "brunch");

    setDataUploaded(true);
  };

  // Read data from DB
  // If data changes in DB, this will automatically read data
  useEffect(() => {
    // onValue(ref(db), (snapshot) => {
    //   const data = snapshot.val();
    //   if (data !== null) {
    //     //console.log(data);
    //     initializeData(data);
    //   }
    // });

    // use mockData
    initializeData(mockData);
  }, []);

  if (!dataUploaded) {
    return <Loading />;
  }

  return (
    dataUploaded && (
      <div className={styles.container}>
        <div className={styles.graphContainer}>
          <TodaySummary mealType={"breakfast"} isAll={true} />
          <WholeGraph />
        </div>

        <div className={styles.tableContainer}>
          <WholeTable />
        </div>
      </div>
    )
  );
}
