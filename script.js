let nav = document.querySelector(".nav");
let bar = document.querySelector(".bar-2");
let closs_menu = document.querySelector(".close");

bar.addEventListener("click", function(){
    console.log("serch open click");   
    nav.classList.add("block");     // for input block
    bar.classList.add("none");       // for search none
    closs_menu.classList.add("block")      // for close icon block
  })
  
  closs_menu.addEventListener("click", function(){
    nav.classList.remove("block");   // for remove input block
    bar.classList.remove("none");      // for remove search none
    closs_menu.classList.remove("block")    // for remove close icon block
  })

  $('.section-1').slick({
    dots:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.section-7').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $('.inner-wrap').slick({
    dots:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });