import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "+91",
    phone: "",
    currentStatus: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const userformData = {
      name: formData.username,
      email: formData.email,
      mobile: formData.country + formData.phone,
      status: formData.currentStatus,
      password: formData.password,
    };

    const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];
    existingUsers.push(userformData);
    localStorage.setItem("Users", JSON.stringify(existingUsers));

    console.log("Form submitted:", userformData);

    setFormData({
      username: "",
      email: "",
      country: "+91",
      phone: "",
      currentStatus: "",
      password: "",
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <h2 className="text-4xl font-semibold text-[#2A586F] mb-5 relative inline-block">
          Register
          <span className="absolute left-0 top-[35px] w-full h-[6px] bg-[#fac167] -z-10"></span>
        </h2>

        <div className="my-3 shadow-lg rounded-md p-6 w-full max-w-md">
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="flex flex-col gap-y-1">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-sm text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-sm text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-semibold">Mobile Number</label>
              <div className="flex gap-x-2">
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  readOnly
                  className="border border-gray-200 p-2 rounded-sm w-1/5 text-sm bg-gray-100"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-200 p-2 rounded-sm w-4/5 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-semibold">Current Status</label>
              <div className="flex gap-x-3 mt-1">
                <label className="flex items-center gap-x-1">
                  <input
                    type="radio"
                    name="currentStatus"
                    value="Student"
                    checked={formData.currentStatus === "Student"}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  Student
                </label>
                <label className="flex items-center gap-x-1">
                  <input
                    type="radio"
                    name="currentStatus"
                    value="Employee"
                    checked={formData.currentStatus === "Employee"}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  Employee
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-sm text-sm"
                placeholder="Enter Password"
              />
            </div>

            <button
              type="submit"
              className="my-3 bg-[#2A586F] rounded-md text-white w-full p-2"
            >
              Save
            </button>

            <p className="text-[#1E232C] my-1 text-sm text-center">
              Already have an account?{" "}
              <Link className="text-[#006EEC]" to="/login">
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
