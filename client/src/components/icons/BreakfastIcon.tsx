import { MdBreakfastDining } from "react-icons/md";
import { GlobalIcon, getGlobalIconStyle } from "../../helpers/getIconStyle";

export default function BreakfastIcon({ size = "medium" }: GlobalIcon) {
  const customStyle = getGlobalIconStyle({ size });
  return <MdBreakfastDining style={customStyle} />;
}
