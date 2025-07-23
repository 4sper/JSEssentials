let length;
let width;
let result;
function calculateArea(){
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);
    result = length * width;
}
document.getElementById('result').innerText = `The area of the rectangle is: ${result}`;