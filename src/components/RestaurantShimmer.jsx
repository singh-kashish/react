const RestaurantShimmer = () => {
  return (
    <div className="flex justify-start w-full h-lvh"
    >
      <div
        className="shimmer-item"
        style={{ width: "50%", height: "100em" }}
      ></div>
      <div>
        {Array(12)
          .fill(" ")
          .map((element, index) => {
            return (
              <div
                className="shimmer-item"
                key={index}
                style={{ width: "3000%" }}
              >
                <img />
                <h3></h3>
                <h5></h5>
                <h6></h6>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default RestaurantShimmer;
