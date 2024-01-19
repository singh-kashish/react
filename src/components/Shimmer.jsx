const Shimmer = () => {
    return (
      <>
        {Array(12).fill(" ").map((element,index)=> {
        return (<div className="shimmer-item" key={index}>
        <img/>
        <h3></h3>
        <h5></h5>
        <h6></h6>
        </div>);
        }
)}
      </>
    );
};
export default Shimmer;