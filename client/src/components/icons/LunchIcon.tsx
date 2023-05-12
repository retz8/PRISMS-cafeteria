import { MdLunchDining } from "react-icons/md";
import { GlobalIcon, getGlobalIconStyle } from "../../helpers/getIconStyle";

export default function LunchIcon({ size = "medium" }: GlobalIcon) {
  const customStyle = getGlobalIconStyle({ size });
  return <MdLunchDining style={customStyle} />;
}
