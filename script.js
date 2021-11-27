window.addEventListener("DOMContentLoaded" , function() {
    document.querySelector("#menu").addEventListener("click", function() {

        document.querySelector("#menu2").classList.toggle("active")
    })


    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      // пагинация
      pagination: {
      el: '.swiper-pagination',
      },
      // навигация
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
      });  

      document.querySelectorAll(".work__link").forEach(function(tabslink){
        tabslink.addEventListener("click", function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll(".work__tab").forEach(function(tabcontent){
                tabcontent.classList.remove("active-tab")
            })
            document.querySelector(`[data-target="${path}"]`).classList.add("active-tab")
        })
      })
    
}) 

