$('.riview_box').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  autoplay:true,
  autoplaySpeed:1000,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]



});