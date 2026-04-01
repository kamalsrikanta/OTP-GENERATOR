function generateOTP() {
    let otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otp").innerText = otp;
}

function copyOTP() {
    let otpText = document.getElementById("otp").innerText;
    navigator.clipboard.writeText(otpText);
    alert("OTP copied: " + otpText);
}