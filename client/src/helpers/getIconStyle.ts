export type GlobalIcon = {
  size?: "medium" | "small";
};

export function getGlobalIconStyle({ size = "medium" }: GlobalIcon) {
  switch (size) {
    case "medium":
      return { color: "white", fontSize: "30px" };
    case "small":
      return { color: "white", fontSize: "15px" };
    default:
      throw new Error("Wrong Icon Size");
  }
}
