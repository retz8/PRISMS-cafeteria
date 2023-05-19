import { MdDinnerDining } from "react-icons/md";
import { GlobalIcon, getGlobalIconStyle } from "../../helpers/getIconStyle";

export default function DinnerIcon({ size = "medium" }: GlobalIcon) {
  const customStyle = getGlobalIconStyle({ size });
  return <MdDinnerDining style={customStyle} />;
}
