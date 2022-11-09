function nav() {
    let bars = document.getElementById('mob-nav');
    if (bars.className == "") {
        bars.className = "drop-nav";
    } else {
        bars.className = "";
    }
}

window.onscroll = function () { navigationSticky(); }

let navigation = document.getElementById("navigation");
let sticky = navigation.offsetTop;
function navigationSticky() {
    if (window.pageYOffset >= sticky + 100) {
        navigation.classList.add("nav-sticky");
    } else {
        navigation.classList.remove("nav-sticky");
    }
}

function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
