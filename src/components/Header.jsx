import { useEffect, useState, useRef } from "react";
import brandLogo from "../assets/brandLogo.png";
import avatarImage from "../assets/avatarImage.jpg";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const avatarRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const checkLogIn = localStorage.getItem("userAuth");
    setIsLoggedIn(!!checkLogIn);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setShowLogout(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userAuth");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setShowLogout(false);
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 relative">
      <img src={brandLogo} alt="Brand Logo" className="h-20 w-auto" />

      {isLoggedIn && (
        <div className="relative" ref={avatarRef}>
          <img
            loading="lazy"
            src={avatarImage}
            alt="Avatar"
            className="h-12 w-12 rounded-full cursor-pointer"
            onClick={() => setShowLogout(!showLogout)}
          />
          {showLogout && (
            <div className="absolute right-0 mt-2 w-28 shadow-xs z-10">
              <button
                onClick={handleLogout}
                className="flex items-center gap-x-2 rounded-sm text-[#E40000] bg-[#FFEAEA] w-full px-4 py-2 text-sm text-left hover:bg-red-100 cursor-pointer transition-all duration-300"
              >
                <MdLogout size={20} />
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
