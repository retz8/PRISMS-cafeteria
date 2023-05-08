import { MdBrunchDining } from "react-icons/md";
import { GlobalIcon, getGlobalIconStyle } from "../../helpers/getIconStyle";

export default function BrunchIcon({ size = "medium" }: GlobalIcon) {
  const customStyle = getGlobalIconStyle({ size });
  return <MdBrunchDining style={customStyle} />;
}
