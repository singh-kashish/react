import Stars from "./Stars";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import { mediaUrl } from "../config";
let ItemCard = ({ item }) => {
  return (
    <div id="item-card">
      <div>
        <h3
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "10px" }}>{item?.name}</span>
          {item?.itemAttribute?.vegClassifier === "NONVEG" ? (
            <NonVeg />
          ) : (
            <Veg />
          )}
        </h3>
        <h5>{"Rs" + item?.price / 100}</h5>
        <p>
          <span style={{ fill: "green" }}>
            <Stars />
            {item?.ratings?.aggregatedRating?.rating}
          </span>
          <span>({item?.ratings?.aggregatedRating?.ratingCountV2})</span>
        </p>
        <p>{item?.description}</p>
      </div>
      <div>
        <img
          style={{ height: "78%", marginTop: "20px" }}
          src={`${mediaUrl}${item.imageId}`}
        />
      </div>
    </div>
  );
};
export default ItemCard;
