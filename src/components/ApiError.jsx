function ApiError(err) {
  return (
    <div>
      <h3>Oops!</h3>
      <h5>Something went wrong with the Api call : Try opening dev tools in Responsive mode & then access, reload(close dev tools when api works) or toggle Allow CORS extension to ON state.</h5>
      <h6>{err?.msg}</h6>
    </div>
  );
}
export default ApiError;
