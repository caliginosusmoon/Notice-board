import React, { useEffect, useState } from "react";
import AllNotices from "./AllNotices";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDash = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notices/all");
        setNotices(() => response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchNotices();
    // console.log(notices)
  }, [refresh]);
  return (
    <div>
      <button
        onClick={() => {
          navigate("/admin/add");
        }}
      >
        Add Notice
      </button>
      <AllNotices isAdmin={true} notices={notices} setRefresh={setRefresh} />
    </div>
  );
};

export default AdminDash;
