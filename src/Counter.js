import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
//task - create a dislike button
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* onClick -cameCase */}
      <IconButton
        aria-label="like-button"
        color="primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      {/* <button
        className="btn-like"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}{" "}
      </button> */}
      <IconButton
        aria-label="like-button"
        color="error"
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
