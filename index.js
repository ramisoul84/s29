const svgns = "http://www.w3.org/2000/svg";
const svg = document.querySelector("svg");
const g = document.querySelector("g");
const rect = document.createElementNS(svgns, "rect");
rect.setAttribute("x", 100);
rect.setAttribute("y", 100);
rect.setAttribute("width", 100);
rect.setAttribute("height", 100);
g.appendChild(rect);
