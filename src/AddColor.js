import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("skyblue");
  // const colorList = ["orange", "pink", "plum"];
  const [colorList, setColorList] = useState([
    "orange",
    "pink",
    "plum",
    "green",
  ]);
  const styles = {
    backgroundColor: color,
    fontSize: "24px",
  };

  return (
    <div>
      <div className="add-color">
        <input
          value={color}
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
        />
        <button
          //copy the colorList and add new color
          onClick={() => setColorList([...colorList, color])}
        >
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
