var data = [
    { property: "Added Sugar", per: 78 },
    { property: "carbohydrate", per: 40 },
    { property: "sodium", per: 20 },
]
a = ""
data.forEach((val) => {
    a = a + `<div class="bar"><p>${val.property}</p><div class="bgper"><div id="${val.property}" class="per"><div class="val"><div class="tip"></div>${val.per}%</div></div></div></div>`
})
document.querySelector("#prop").innerHTML = a


document.addEventListener('DOMContentLoaded', () => {
    window.onload = () => {
        window.requestAnimationFrame(() => {
            var tl = gsap.timeline()
            tl
                .from("#left", {
                    width: 0,
                    ease: "Expo.easeIn",
                    duration: "2",
                })
                .from("#right", {
                    scale: 0,
                    ease: "Expo.easeInOut",
                    duration: "2",
                }, "-=0.5")
                .from("nav", {
                    bottom: "100%",
                    ease: "Expo.easeInOut",
                    duration: "2",
                }, "-=1")
                .from("#nlft a, #nrgt a", {
                    y: "-10px",
                    opacity: 0,
                    stagger: 0.5,
                    ease: "Expo.easeInOut",
                    duration: "2",
                }, '-=0.5')
                .from("#lftcan", {
                    scale: 0,
                    stagger: 0.2,
                    ease: "Expo.easeInOut",
                    duration: "2",
                }, '-=1')
                .from(".g_f_l", {
                    x: "100px",
                    opacity: 0,
                    stagger: 0.4,
                    ease: "Expo.easeInOut",
                    duration: "2",
                }, "-=1")
                .from("#rc", {
                    x: "-100%",
                    opacity: 0,
                    ease: "Expo.easeInOut",
                    duration: "2",
                }, "-=3")
                .from(".bar", {
                    y: "-50px",
                    opacity: 0,
                    stagger: 0.4,
                    ease: "Expo.easeInOut",
                    duration: "2",
                }, "-=1")
                .from(".per", {
                    width: 0,
                    stagger: 0.4,
                    ease: "Expo.easeInOut",
                    duration: "2",
                })
        });
    };
});