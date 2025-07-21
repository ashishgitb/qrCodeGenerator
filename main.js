let img = document.getElementById("imgBox");
let qr = document.getElementById("qrImage");
let bt = document.getElementById("button");
let input = document.getElementById("inputField"); // This line is important

function generate() {
    if (input.value.trim().length > 0) {
        const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input.value);
        qr.src = url;
        img.classList.add("show-img"); // Show your QR image if you have this CSS class
    } else {
        qr.src = "";    // Clear QR if input is empty
        img.classList.remove("show-img");
    }
}

bt.addEventListener("click", generate);
