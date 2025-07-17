import Header from "../components/Header";
import NotFoundImage from "../assets/404.jpg"
import { useNavigate } from "react-router-dom";
function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center h-[70vh] gap-y-5 lg:gap-y-10 px-10">
                <img src={NotFoundImage} alt="404 Page Not Found." className="h-50 lg:h-80 w-auto mb-5" />
                <h2 className="text-3xl lg:text-4xl text-center">Sorry, it looks like the page is not available</h2>
                <button onClick={() => navigate("/")} className="bg-[#2A586F] hover:bg-[#1c4457] rounded-md py-2 lg:py-3 px-5 lg:px-10 text-white text-sm lg:text-base transition-colors duration-300 cursor-pointer">Back to Home</button>
            </div>
        </div>
    );
}

export default NotFound;