window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.transition = "opacity 1s ease"; 
    preloader.style.opacity = "0"; 

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000); 
  }, 1800); 
});