import { useRouteError } from "react-router-dom";

const Error = () => {
  // useRouteError hook can be used to fetch the details of the route error: status & statusText are directly deconstructed below from useRouteError().
  const { status, statusText } = useRouteError();
  return (
    <div className="bg-orange-200 flex justify-center items-center">
      <h3>Oops! {status}</h3>
      <h5>Something went wrong - {statusText}</h5>
    </div>
  );
};
export default Error;
