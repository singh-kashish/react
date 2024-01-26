import { useFormik } from "formik";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import UserContext from "../hooks/context/UserContext";
import { useContext } from "react";
let Auth = () => {
  const [searchedRestaurants, setFilteredRestaurants] = useOutletContext();
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(UserContext);
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setUser({ ...values, isLoggedIn: true });
      setIsLoggedIn(true);
      console.log(values);
      console.log(user);
    },
  });
  const [passwordType, setPasswordType] = useState("password");
  return (
    <div
      id="auth"
      className="flex flex-col justify-center items-center  bg-zinc-100 h-svh"
    >
      {isLoggedIn ? (
        <h1>Hi, {user.email}</h1>
      ) : (
        <>
          <h1 className="font-semibold">Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            id="auth"
            className="flex flex-col justify-center align-center shadow-xl border-dashed border-blue-950 border-2 p-4 rounded-lg"
          >
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type={passwordType}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <span
              className="bg-red-100 text-center"
              onClick={(e) => {
                e.preventDefault();
                setPasswordType("text");
                setTimeout(() => {
                  setPasswordType("password");
                }, 1000);
              }}
            >
              check pass
            </span>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <button
              type="submit"
              className="hover:bg-green-300 bg-green-200 rounded-lg mt-2"
            >
              Authenticate
            </button>
          </form>
        </>
      )}
    </div>
  );
};
export default Auth;
