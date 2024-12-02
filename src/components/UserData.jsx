import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import UserList from "./UserList";

const URL = "https://jsonplaceholder.typicode.com/users";

function UserData() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUsersData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    apiHandler();
  }, []);

  const apiHandler = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      setLoading(false);
      setUsersData(data);
      setFilteredUsers(data); 
    } catch (e) {
      setLoading(false);
      console.error("Error -->", e);
    }
  };

  const onChangeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    const filteredItems = userData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <div className="main-wrapper">
        <h1>Biodata App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={onChangeHandler}
            placeholder="Search here by name"
            className="input-wrapper-searh"
          />
          <IoSearch />
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (

          <UserList userData={filteredUsers} />
        )}
      </div>
      <style jsx>
        {`
          .input-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .input-wrapper-searh {
            padding: 5px;
            outline: none;
          }
        `}
      </style>
    </>
  );
}

export default UserData;
