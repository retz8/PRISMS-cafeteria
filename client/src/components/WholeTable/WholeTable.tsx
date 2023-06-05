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
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

export default function WholeTable() {
  const snap = useSnapshot(state);
  const { data } = snap;

  const rows = data.map((item, index) => {
    return {
      id: index,
      date: item.date,
      meal: item.type,
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
      field: "meal",
      headerName: "Meal",
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 1,
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   flex: 1,
    //   renderCell: (params: GridRenderCellParams) => {
    //     return (
    //       <>
    //         <button
    //           className={styles.viewButton}
    //           onClick={() => handleClick(params.row.date)}
    //         >
    //           View
    //         </button>
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className={styles.container}>
      <DataGrid
        initialState={{
          sorting: { sortModel: [{ field: "date", sort: "desc" }] },
        }}
        rows={rows}
        columns={columns}
      />
    </div>
  );
}
