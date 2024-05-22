import React from "react";
import "../css/notice.css";
import axios from "axios";

const Notice = ({
  notice,
  title,
  author,
  description,
  date,
  department,
  isAdmin,
  id,
  setRefresh,
}) => {
  console.log("title: ", title);
  const handleDelete = async (id) => {
    try {
      const res = await axios
        .delete(`http://localhost:5000/notices/${id}`)
        .then(setRefresh((prev) => !prev));

      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  //   const day = new Date();
  return (
    <div className="notice-outer-container">
      <div className="notice-author">{notice?.author}</div>
      <div className="notice-title">{notice?.title}</div>
      <div className="notice-date">{notice.date.substr(0, 10)}</div>
      <div className="notice-department">{notice?.department}</div>
      {isAdmin && (
        <div>
          <button>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Notice;
