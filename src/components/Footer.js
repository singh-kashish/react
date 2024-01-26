import UserContext from "../hooks/context/UserContext";
import { useContext } from "react";
let Footer = () => {
  let { user } = useContext(UserContext);
  return (
    <div className="bg-black text-slate-200 h-40 flex flex-col justify-center items-center bottom-0 relative left-0 w-full">
      <h1 className="font-bold leading-4 font-sans">Zumbato</h1>
      <h2 className="font-normal">Made to explore</h2>
      <h3 className="font-medium text-lg">
        Hey {user.isLoggedIn ? user.email : ", please log in!"}
      </h3>
    </div>
  );
};

export default Footer;
