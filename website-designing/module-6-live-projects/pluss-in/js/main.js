// this is a header caursels slider code 
const slider = document.getElementById("slider");
const slides = slider.children;
let current = 0;

function updateSlider() {
slider.style.transform = `translateX(-${current * 100}%)`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
current = (current + 1) % slides.length;
updateSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
current = (current - 1 + slides.length) % slides.length;
updateSlider();
});

// Auto Slider
setInterval(() => {
current = (current + 1) % slides.length;
updateSlider();
}, 3000);

// account after 3 second pupup
$(document).ready(function(){

    setTimeout(function(){
        $("#accountModal").fadeIn();
    }, 3000);

    $("#closeModal").click(function(){
        $("#accountModal").fadeOut();
    });

    $("#accountModal").click(function(e){
        if(e.target === this){
            $(this).fadeOut();
        }
    });

});


