
const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

const otpInputs = document.querySelectorAll("#otp input");

otpInputs.forEach((e,i) => {e.onkeyup = (er) => {
        if (er.code == "Backspace" && i < otpInputs.length - 1) {
            otpInputs[i+1].focus()
            otpInputs[i+1].select()
        }
        else if (i >= 1 && er.code != "Backspace") {
            otpInputs[i-1].focus()
            otpInputs[i-1].select()
        }
    }

})