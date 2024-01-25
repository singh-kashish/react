let Coupon = (text) => {
  console.log(text);
  let {meta} = text.text;
  return <div id="coupon" className="z-10 bg-orange-100 shadow-md h-10 p-1 m-2 rounded-md font-semibold">{meta}</div>;
};
export default Coupon;
