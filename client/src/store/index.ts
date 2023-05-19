import { proxy } from "valtio";
import { Data, MockData } from "../model/data";

// like useContext
// change Data to MockData in publication
const state = proxy({
  data: <MockData[]>[],
  breakfast: <MockData[]>[],
  lunch: <MockData[]>[],
  dinner: <MockData[]>[],
  brunch: <MockData[]>[],
});

export default state;
