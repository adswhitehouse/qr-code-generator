// Variables
let input = document.querySelector(".jsInput");
let qrCode = document.querySelector(".jsQrCode");
let generate = document.querySelector(".jsGenerate");
let qrCodeImg = document.querySelector(".jsQrCodeImg");

// API URL
let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

// Generates and displays QR code with input data
function generateCode() {
  if (input.value.length > 0) {
    qrCodeImg.src = `${apiUrl}${input.value}`;
    qrCode.classList.add("qr-code-show");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}

// Runs generateCode on click
generate.addEventListener("click", () => {
  generateCode();
});
