import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Homepage.css";
import home from "../assets/icons/home.png";
import AllNotices from "../Components/AllNotices";
import ImpNotices from "../Components/ImpNotices";
import Department from "../Components/Department";
import AddNotice from "../Components/AddNotice";
import searchIcon from "../assets/icons/ic_baseline-search.svg";

const Homepage = () => {
  const [active, setActive] = useState("all");
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
  }, []);
  return (
    <div>
      <div className="app-outer-container">
        <div className="left-container">
          <div className="nav-menu-container">
            <div
              className={`all-notice-container-menu row-container ${
                active === "all" ? "active" : ""
              }`}
              onClick={() => setActive("all")}
            >
              <div className="icon-container">
                <img src={home} alt=""></img>
              </div>
              <div className="menu-container">All Notices</div>
            </div>
            <div
              className={`all-notice-container-menu row-container ${
                active === "imp" ? "active" : ""
              }`}
              onClick={() => setActive("imp")}
            >
              <div className="icon-container">
                <img src={home} alt=""></img>
              </div>
              <div className="menu-container">Important Notices</div>
            </div>
            <div
              className={`all-notice-container-menu row-container ${
                active === "dept" ? "active" : ""
              }`}
              onClick={() => setActive("dept")}
            >
              <div className="icon-container">
                <img src={home} alt=""></img>
              </div>
              <div className="menu-container">Department</div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div class="user-container">
            <div className="username">Moonmoon</div>
            <div className="more-icon"></div>
            {/* <AllNotices/> */}

            <div className="notice-box">
              <div className="date-search-filter">
                <div className="date-filter">Date</div>
                <div className="search-filter">
                  <img src={searchIcon} alt="search" />
                  <input type="text" placeholder="Search by Date" />
                </div>
              </div>
              {active === "all" && <AllNotices notices={notices} />}{" "}
            </div>
            {active === "imp" && <ImpNotices />}
            {active === "dept" && <Department notices={notices} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
