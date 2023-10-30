window.addEventListener("scroll", function() {
    var header = document.querySelector(".navbar");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 250) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  function myFunction(){
    alert("I did not record for this website, sorry!");
  }