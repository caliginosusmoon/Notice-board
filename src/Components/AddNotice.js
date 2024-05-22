import axios from "axios";
import React, { useState } from "react";

const AddNotice = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    author: "",
    department: "",
    tags: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      console.log("formdata: ", formData);
      formDataToSend.append("title", formData?.title);
      formDataToSend.append("description", formData?.description);
      formDataToSend.append("date", formData?.date);
      formDataToSend.append("author", formData?.author);
      formDataToSend.append("department", formData?.department);
      formDataToSend.append("tags", formData?.tags);
      formDataToSend.append("file", null);
      console.log("sending 2:", formDataToSend);
      const response = await axios.post(
        "http://localhost:5000/notices/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <h2>Post a Notice</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Tags:
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Post Notice</button>
      </form>
    </div>
  );
};

export default AddNotice;
