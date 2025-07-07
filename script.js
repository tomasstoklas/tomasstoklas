let titleText = "Tomáš Stoklas - Moja osobná webstránka  ---  ";
let position = 0;

function scrollTitle() {
    let rotated = titleText.substring(position) + titleText.substring(0, position);
    document.title = rotated;
    position = (position + 1) % titleText.length;
    setTimeout(scrollTitle, 300);
}

scrollTitle();

const img = document.getElementById("aboutmeImg");
if (img) {
    img.addEventListener("click", function() {
        img.src = "website-photo-me.jpg";
    });
}

const img2 = document.getElementById("kockaciImg");
if (img2) {
    img2.addEventListener("click", function() {
        img2.src = "kockaci.jpg";
        img2.style.height = "396px";
    });
}
