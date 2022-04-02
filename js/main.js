
const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

documents.querySelector(".menu-oppener > a").onclick = () => {
    documents.querySelector(".menu-oppener > ul").classlist.remove("hidden");
}
