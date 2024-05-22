import React, { useEffect, useState } from "react";
import axios from "axios";
import Notice from "./Notice";
import "../css/notice.css";

const AllNotices = ({ isAdmin, notices, setRefresh }) => {
  return (
    <div className="all-notice-container ">
      <div className="notices-container">
        {console.log("Notice: ", notices)}
        {notices?.map((notice) => (
          <>
            {console.log("notice is: ", notice)}
            <Notice
              title={notice?.title}
              notice={notice}
              description={notice?.description}
              department={notice?.department}
              date={notice?.date}
              key={notice?._id}
              isAdmin={isAdmin}
              id={notice?._id}
              setRefresh={setRefresh}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllNotices;
