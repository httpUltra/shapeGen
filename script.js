const lengthElement = document.getElementById("length");   
const lengthTestElement = document.getElementById("lengthTest");   

 
  
lengthElement.addEventListener("input", function(event) {    
    lengthTestElement.style.width = event.target.value + 'px'
});
        
const heightElement = document.getElementById("height");
const heightTestElement = document.getElementById("heightTest")

heightElement.addEventListener("input", function(e) {
    heightTestElement.style.height = e.target.value + 'px'
});









const widthElement = document.getElementById("width");
const widthDiv = document.getElementById("widthDiv");

widthElement.addEventListener("input", () => {
    const value = parseInt(widthElement.value);
    if (!isNaN(value) && value > 0) {
        widthDiv.style.width = value + 'px';
    }
});