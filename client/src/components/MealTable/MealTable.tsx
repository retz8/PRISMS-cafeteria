// MealGraph [MealPages (Breakfast, Lunch, Dinner, Brunch)]
// Display graph to show the change of the number of ppl eating in each meal
// Intro to Echarts: https://medium.com/@noffybarudwale/simple-way-to-use-echart-in-react-9c4267ab4a95
// Examples: https://echarts.apache.org/examples/en/index.html

import { useSnapshot } from "valtio";
import styles from "./MealTable.module.css";
import state from "../../store";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import DailyGraph from "../DailyGraph/DailyGraph";
import { useState } from "react";
import { MockData } from "../../model/data";

type Props = {
  mealType: "breakfast" | "lunch" | "dinner" | "brunch";
};

export default function MealTable({ mealType }: Props) {
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

  const [viewDate, setViewDate] = useState<string>(data[data.length - 1].date);
  const [viewData, setViewData] = useState<MockData>(data[data.length - 1]);

  function handleClick(date: string): void {
    setViewDate(date);
    setViewData(data.filter((item) => item.date === date)[0]);
  }

  const rows = data.map((item, index) => {
    return {
      id: index,
      date: item.date,
      total: item.total,
    };
  });

  const columns = [
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <button
              className={styles.viewButton}
              onClick={() => handleClick(params.row.date)}
            >
              View
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <DataGrid
          initialState={{
            sorting: { sortModel: [{ field: "date", sort: "desc" }] },
          }}
          rows={rows}
          columns={columns}
        />
      </div>

      <div className={styles.subContainer}>
        <DailyGraph mealType={mealType} data={viewData} />
      </div>
    </div>
  );
}
