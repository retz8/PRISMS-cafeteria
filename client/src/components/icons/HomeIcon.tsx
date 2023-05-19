import { AiFillHome } from "react-icons/ai";
import { GlobalIcon, getGlobalIconStyle } from "../../helpers/getIconStyle";

export default function HomeIcon({ size = "medium" }: GlobalIcon) {
  const customStyle = getGlobalIconStyle({ size });
  return <AiFillHome style={customStyle} />;
}
