import React, { useEffect, useState } from "react";
import data from "./Data/data";

const App = () => {
  const [input, setInput] = useState("");
  const [contactList, setContactList] = useState([]);

  
   const newContacts = contactList.filter((list) => 
      list.name.toLowerCase().includes(input.toLowerCase()))

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setContactList(newContacts)
  };

  const handleList = () => {
    setContactList(data.list);
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <div className="container">
      <div className="heading">
        <h1>My Contacts</h1>
      </div>
      <div className="searchContainer">
        <input
          type="search"
          onChange={handleChange}
          name="input"
          value={input}
        />
        <button className="btn">Search</button>
      </div>
      <div className="list">
        <div className="contacts">
          <div className="namelist">
            <h3 className="titles">Names</h3>
          </div>
          <div className="emaillist">
            <h3 className="titles">Email</h3>
          </div>
          <div className="phonelist">
            <h3 className="titles">Phone</h3>
          </div>
        </div>
        {contactList.map((contact) => (
          <div key={contact.id} className="contacts">
            <div className="namelist">
              <p className="name">{contact.name}</p>
            </div>
            <div className="emaillist">
              <p className="email">{contact.email}</p>
            </div>
            <div className="phonelist">
              <p className="phone">{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
