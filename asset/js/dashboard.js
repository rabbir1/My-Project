
function dashboard(){

    let sideBar = document.querySelector('.sideBar');
    let menuIcon = document.querySelector('.menuIcon');

    menuIcon.addEventListener('click',()=>{

        sideBar.classList.toggle('barClose')

    });

}; dashboard();





// Project
function active(){
    let buttons = document.querySelectorAll('.btn_group_admin button');
    buttons.forEach((event)=>{
        event.addEventListener('click',()=>{
            document.querySelector('.btn_group_admin button.active').classList.remove('active');
            event.classList.add('active');
        })
    });
}; active();







 
// Butons Group
let projectBtn = document.querySelectorAll('.btn_group_admin button');
// Items
let desktop = document.querySelectorAll('.desktop_admin');
let mobile = document.querySelectorAll('.mobile_admin');
let development = document.querySelectorAll('.development_admin');
let mini = document.querySelectorAll('.mini_admin');
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

