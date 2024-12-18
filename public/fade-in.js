document.addEventListener("DOMContentLoaded", function () {
    const checkInView = setInterval(() => {
        if (typeof inView !== "undefined") {
            clearInterval(checkInView);
            console.log("inView loaded successfully");

            inView('.fade-in').on('enter', el => {
                console.log("Element entered viewport:", el);
                el.classList.add('in-view');
            });
        } else {
            console.warn("Waiting for inView to load...");
        }
    }, 100);
});