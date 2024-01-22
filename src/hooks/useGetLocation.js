import { useEffect, useState } from "react";
const useGetLocation = () => {
  const [location, setLocation] = useState({});
  const [locationError, setLocationError] = useState();
  const onChange = ({ coords }) => {
    setLocation(coords);
  };
  const onError = (error) => {
    setLocationError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setLocationError("Location isn't supported by this browser");
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    setLocationError("No location error");
    return () => geo.clearWatch(watcher);
  }, []);
  return [location, locationError];
};
export default useGetLocation;
