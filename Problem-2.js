function validOtp(otp) {
    if (typeof otp !== 'string') {
        return "Invalid";
    } else if (otp.length !== 8) {
        return false;
    } else if (!otp.startsWith("ph-")) {
        return false;
    } else {
        return true;
    }
}

let otp1 = validOtp("ph-12345");
let otp2 = validOtp("1234");
let otp3 = validOtp(1234);
console.log(otp1); // true
console.log(otp2); // false
console.log(otp3); // false