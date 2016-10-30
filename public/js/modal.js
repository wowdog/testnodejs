var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var modalclose = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
modalclose.onclick = function () {
    modal.style.display = "none";
}

//모달 밖 클릭
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
