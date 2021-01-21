
const links = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
    for (l = 0; l < links.length; l++) {
        if (color == links[l].getAttribute('title')) {
            links[l].removeAttribute('disabled');
        } else{
            links[l].setAttribute('disabled', 'true');
        }
    }
}


document.querySelector('.toggle-style-switcher').addEventListener('click', ()=>{
    document.querySelector('.style-switcher').classList.toggle('open');
})
