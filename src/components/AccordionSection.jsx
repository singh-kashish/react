const AccordionSection = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-gray-800 m-2 p-2">
      <h3 className="text-xl font-medium">
        {title}
        {isVisible === title ? (
          <button
            className="bg-red-400 px-2 py-1 rounded-lg hover:bg-red-500 ml-4 text-xs hover:border hover:border-red-700"
            onClick={(e) => {
              setIsVisible(null);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            className="bg-gray-400 px-2 py-1 rounded-lg hover:bg-slate-500 ml-4 text-xs"
            onClick={(e) => setIsVisible(title)}
          >
            Show
          </button>
        )}
      </h3>
      {isVisible === title && <p>{description}</p>}
    </div>
  );
};
export default AccordionSection;