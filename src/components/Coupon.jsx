let Coupon = (text) => {
  console.log(text);
  let {meta} = text.text;
  return <div id="coupon">{meta}</div>;
};
export default Coupon;
