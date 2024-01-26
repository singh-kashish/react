import { useState } from "react";
import { AccordionList } from "../utils/constants";
import AccordionSection from "./AccordionSection";
const Accordion = () => {
    const [isVisible,setIsVisible] = useState(null);
    return (
        <div className="flex flex-col justify-start items-start ml-2 w-full h-lvh">
        <h1 className="text-lg font-bold">Custom Accordion</h1>
        {
            AccordionList?.map((accordionElement) => (
            <AccordionSection 
            isVisible={isVisible} 
            setIsVisible={setIsVisible}
            key={accordionElement.key} 
            title={accordionElement.title} 
            description={accordionElement.description}/>
        ))
        }
        </div>
    );
};
export default Accordion;
