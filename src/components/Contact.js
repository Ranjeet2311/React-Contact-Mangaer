import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Tooltip from "@mui/material/Tooltip";

function Contact({ person, id, removeContact }) {
  const [hover, setHover] = useState(false);
  const [iconColor, setIconColor] = useState(false);

  // console.log(person);
  function deleteHandler() {
    console.log("Delete Triggered");
    removeContact(id);
  }

  function onMouseEnter() {
    setHover(true);
  }

  function onMouseLeave() {
    setHover((prvState) => {
      return !prvState;
    });
  }

  function iconEnter() {
    setIconColor(true);
  }
  function iconLeave() {
    setIconColor(false);
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ boxShadow: hover ? "0 2px 2px black" : "1px 1px 1px black" }}
      className="contact-wrap"
    >
      <div className="contact">
        <h2 style={{ color: iconColor ? "tomato" : "#c31432" }}>
          <span>
            <PersonRoundedIcon style={{ color: iconColor ? "tomato" : null }} />
          </span>
          {person.name}
        </h2>

        <h3 style={{ color: iconColor ? "tomato" : null }}>{person.phone}</h3>

        <div className="button">
          <Tooltip title="Delete">
            <Fab
              onClick={deleteHandler}
              color="primary"
              size="small"
              aria-label="add"
            >
              <PersonRemoveIcon
                onMouseEnter={iconEnter}
                onMouseLeave={iconLeave}
              />
            </Fab>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Contact;
