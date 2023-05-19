import { proxy } from "valtio";
import { Data } from "../model/data";

// 이거 마치 useContext
const state = proxy({
  data: <Data[]>[],
  breakfast: <Data[]>[],
  lunch: <Data[]>[],
  dinner: <Data[]>[],
  brunch: <Data[]>[],
});

export default state;
