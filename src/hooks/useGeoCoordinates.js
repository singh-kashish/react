export async function useGeoCoordinates() {
   const pos = await new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        console.error("Error fetching user's location: ", error);
        let errorMsg = new Error(error.message);
        reject(errorMsg);
      }
    );
  });
  return pos;
}
