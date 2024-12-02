import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function UserList({ userData }) {
  const [activeModalId, setActiveModalId] = useState(null);

  const toggleHandler = (id) => {
    setActiveModalId(activeModalId === id ? null : id);
  };

  return (
    <>
      <div className="user-card-wrapper">
        {userData?.length > 0 &&
          userData.map((itm) => (
            <div className="user-cards" key={itm.id}>
              <p>{itm.name}</p>
              {!activeModalId || activeModalId !== itm.id ? (
                <button onClick={() => toggleHandler(itm.id)}>Show More</button>
              ) : null}

              {activeModalId === itm.id && (
                <div className="modal-container">
                  <MdOutlineClose
                    className="close-icon"
                    onClick={() => toggleHandler(itm.id)}
                  />
                  <p className="marginclass">{itm.email}</p>
                  <p className="marginclass">{itm.address.city}</p>
                  <p className="marginclass">{itm.phone}</p>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="pagination">
        <button>Prev</button>
        <span className="pageno">1</span>
        <button>Next</button>
      </div>

      <style jsx>
        {`
          .user-card-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            width: 100%;
            justify-content: center;
            padding: 10px;
          }
          .user-cards {
            border: 1px solid blue;
            padding: 10px;
            width: 25%;
            position: relative;
          }

          .pagination {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 2rem;
          }

          .pageno {
            border: 1px solid blue;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .modal-container {
            position: absolute;
            background: cornflowerblue;
            width: 80%;
            top: 0;
          }

          .close-icon {
            position: absolute;
            right: 5%;
            top: 5%;
            cursor: pointer;
          }
          .marginclass {
            margin: 0;
          }
        `}
      </style>
    </>
  );
}

export default UserList;
