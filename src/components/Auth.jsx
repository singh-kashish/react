import { useFormik } from "formik";
import { useOutletContext } from "react-router-dom";

let Auth = () => {
  const [
    searchedRestaurants,
    setFilteredRestaurants,
    isLoggedIn,
    setIsLoggedIn,
  ] = useOutletContext();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div id="auth">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          formik.handleSubmit;
          setIsLoggedIn(true);
        }}
        id="auth"
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
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
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
          onClick={(e) => {
            e.preventDefault();
            setIsLoggedIn(true);
          }}
        >
          Authenticate
        </button>
      </form>
    </div>
  );
};
export default Auth;
