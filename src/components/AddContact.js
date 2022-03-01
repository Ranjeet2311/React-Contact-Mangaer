import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

function AddContact({ addContact }) {
  const [contact, setContact] = useState({ name: "", phone: "" });

  function inputChangeHandler(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;

    setContact((preVal) => {
      return { ...preVal, [name]: value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    // console.log("Submit");
    if (contact.name.length <= 2 || contact.phone.length <= 6) {
      alert("Add your contact");
      return false;
    } else {
      addContact(contact);
    }

    setContact({ name: "", phone: "" });
  }

  return (
    <form className="addContact-wrap">
      <input
        onChange={inputChangeHandler}
        name="name"
        type="text"
        placeholder="Name"
        value={contact.name}
      />
      <input
        onChange={inputChangeHandler}
        name="phone"
        type="number"
        placeholder="+1 000 000 000"
        value={contact.phone}
      />
      <Fab
        onClick={submitHandler}
        type="submit"
        color="primary"
        aria-label="add"
      >
        <PersonAddAltRoundedIcon />
      </Fab>
    </form>
  );
}

export default AddContact;
