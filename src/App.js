import React, { useState } from "react";
import AddContact from "./components/AddContact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  const [data, setData] = useState([]);

  function addContact(contacts) {
    console.log(contacts);
    setData((prvDate) => {
      return [...prvDate, contacts];
    });
  }

  function removeContact(id) {
    setData((prvData) => {
      return prvData.filter((fData, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app">
      <div className="app-wrap">
        <Header />
        <div className="main-content">
          <AddContact addContact={addContact} />
          {data.map((person, i) => {
            return (
              <Contact
                key={i}
                person={person}
                id={i}
                removeContact={removeContact}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
