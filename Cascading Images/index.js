document.getElementById("img1").classList.add("active");
let img1 = document.getElementById("img1").addEventListener('click',event => {
    document.getElementById("img1").classList.add("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
});
let img2 = document.getElementById("img2").addEventListener('click',event => {
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
    document.getElementById("img2").classList.add("active");
});
let img3 = document.getElementById("img3").addEventListener('click',event => {
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img3").classList.add("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
});
let img4 = document.getElementById("img4").addEventListener('click',event => {
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img4").classList.add("active");
    document.getElementById("img5").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
});
let img5 = document.getElementById("img5").addEventListener('click',event => {
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img5").classList.add("active");
    document.getElementById("img2").classList.remove("active");
});