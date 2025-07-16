import { useEffect, useState } from "react";
import brandLogo from "../assets/brandLogo.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogIn = localStorage.getItem("userAuth");
    setIsLoggedIn(!!checkLogIn);
  }, []);
  return (
    <div className="flex justify-between items-center px-5">
      <img src={brandLogo} alt="" className="h-30 w-auto" />
      {isLoggedIn && (
        <span className="bg-orange-400 p-2 h-10 w-10 rounded-full" />
      )}
    </div>
  );
}

export default Header;
