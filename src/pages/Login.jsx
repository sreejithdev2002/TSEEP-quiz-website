import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("Users")) || [];

    const user = users.find(
      (u) => u.mobile === "+91" + phone && u.password === password
    );

    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("userAuth", true);
      navigate("/quiz");
    } else {
      alert("Invalid credentials. Please try again.");
      localStorage.setItem("userAuth", false);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <h2 className="text-4xl font-semibold text-[#2A586F] mb-5 relative inline-block">
          Login
          <span className="absolute left-0 top-[35px] w-full h-[6px] bg-[#fac167] -z-10"></span>
        </h2>

        <div className="my-3 shadow-lg rounded-md p-6 w-full max-w-md">
          <form onSubmit={handleLogin} className="space-y-3 lg:space-y-5">
            <div className="flex flex-col gap-y-1">
              <label className="font-semibold">Mobile Number</label>
              <div className="flex gap-x-2">
                <input
                  type="text"
                  value="+91"
                  readOnly
                  className="border border-gray-200 p-2 rounded-sm w-1/5 text-sm bg-gray-100"
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-200 p-2 rounded-sm w-4/5 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-200 p-2 rounded-sm text-sm"
                placeholder="Enter Password"
              />
            </div>

            <button
              type="submit"
              className="my-3 bg-[#2A586F] rounded-md text-white w-full p-2"
            >
              Login
            </button>

            <p className="text-[#1E232C] my-1 text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link className="text-[#006EEC]" to="/register">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
