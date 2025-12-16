
function password(){
    let password = document.querySelector('.inputPass');
    let openIcon = document.querySelector('.openIcon');
    let closeIcon = document.querySelector('.closeIcon');
    closeIcon.classList.add('d-none');
    openIcon.addEventListener('click', ()=>{
        closeIcon.classList.remove('d-none');
        password.setAttribute("type", "text")
        openIcon.classList.add('d-none')
    });
    closeIcon.addEventListener('click', ()=>{
        openIcon.classList.remove('d-none');
        password.setAttribute("type", "password")
        closeIcon.classList.add('d-none')
    });
}; password();


