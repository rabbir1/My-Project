let typed=()=>{
    var typed = new Typed('#element', {
        strings: ["Fullstack Developer.","Frontend Developer."],
        typeSpeed: 100,
        backSpeed:100,
        backDelay:100,
        loop:true
    });
};  typed();



// Project
function active(){
    let buttons = document.querySelectorAll('.btn_group button');
    buttons.forEach((event)=>{
        event.addEventListener('click',()=>{
            document.querySelector('.btn_group button.active').classList.remove('active');
            event.classList.add('active');
        })
    });
}; active();





// projectgallary
function projectgelary(){
  // Butons Group
  let projectBtn = document.querySelectorAll('.btn_group button');
  // Items
  let desktop = document.querySelectorAll('.desktop');
  let mobile = document.querySelectorAll('.mobile');
  let development = document.querySelectorAll('.development');
  let mini = document.querySelectorAll('.mini');
  // Hide Function
  function hidedesktop(){
    desktop.forEach((event)=>{
      event.classList.add('d-none')
    })
  };
  function hidemobile(){
    mobile.forEach((event)=>{
      event.classList.add('d-none')
    })
  };
  function hidedevelopment(){
    development.forEach((event)=>{
      event.classList.add('d-none')
    })
  };
  function hidemini(){
    mini.forEach((event)=>{
      event.classList.add('d-none')
    })
  };

  // Show Function
  function showdesktop(){
    desktop.forEach((event)=>{
      event.classList.remove('d-none')
    })
  };
  function showmobile(){
    mobile.forEach((event)=>{
      event.classList.remove('d-none')
    })
  };
  function showdevelopment(){
    development.forEach((event)=>{
      event.classList.remove('d-none')
    })
  };
  function showmini(){
    mini.forEach((event)=>{
      event.classList.remove('d-none')
    })
  };

  hidemobile();
  hidedevelopment();
  hidemini();


  projectBtn.forEach((event)=>{
    event.addEventListener('click',()=>{ 

      if(event.value == "desktop"){
        showdesktop();

        hidemobile();
        hidedevelopment();
        hidemini();
      }
      else if(event.value == "mobile"){
        showmobile();

        hidedesktop();
        hidedevelopment();
        hidemini();
      }
      else if(event.value == "development"){
        showdevelopment();

        hidedesktop();
        hidemobile();
        hidemini();
        
      }
      else if(event.value == "mini"){
        showmini();

        hidedesktop();
        hidemobile();
        hidedevelopment();
      }
      else{
        showdesktop();

        hideYoutube();
        hideShort();
        hideCreative();
      }
      
    })
  })
};projectgelary();







// Loder
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
});


