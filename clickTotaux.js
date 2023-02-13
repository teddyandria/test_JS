var countClick = 0;
var button = document.getElementById("btn");
var totalClick = document.getElementById("totalClick");

button.onclick = function () {
    countClick++;
    totalClick.innerText = countClick;
}