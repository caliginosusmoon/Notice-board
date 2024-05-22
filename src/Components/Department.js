import React, { useState } from "react";
import Notice from "./Notice";

const Department = ({ notices, isAdmin }) => {
  const [dept, setDept] = useState("CS");
  return (
    <div>
      <button
        onClick={() => {
          setDept("CS");
        }}
      >
        Computer Science
      </button>
      <button
        onClick={() => {
          setDept("IT");
        }}
      >
        Information Technology
      </button>

      {notices?.map((notice) => (
        <>
          {console.log("notice is: ", notice)}
          {notice.department === dept && (
            <Notice
              title={notice?.title}
              notice={notice}
              description={notice?.description}
              date={notice?.date}
              key={notice?._id}
              isAdmin={isAdmin}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Department;
