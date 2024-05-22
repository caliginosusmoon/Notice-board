import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userid === "admin" && password === "admin") {
      navigate("/admin/home");
    } else {
      window.alert("invalid credentials!");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userid"
          value={userid}
          onChange={(e) => {
            setUserid(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="Submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
