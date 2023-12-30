const root = document.getElementById("rootJS");
const elementToInsert = document.createElement("h2");
elementToInsert.setAttribute("id","headingJS")
elementToInsert.innerHTML = "Heading via vanilla JS";
root.appendChild(elementToInsert);