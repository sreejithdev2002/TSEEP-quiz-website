import { useEffect, useState } from "react";
import brandLogo from "../assets/brandLogo.png";
import avatarImage from "../assets/avatarImage.jpg";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogIn = localStorage.getItem("userAuth");
    setIsLoggedIn(!!checkLogIn);
  }, []);
  return (
    <div className="flex justify-between items-center px-5">
      <img src={brandLogo} alt="" className="h-25 w-auto" />
      {isLoggedIn && (
        <img loading="lazy" src={avatarImage} className="h-12 w-12 rounded-full" />

      )}
    </div>
  );
}

export default Header;
