$(document).ready(function(){
    $('.down-side').slick({
        dots:true,
        arrows:true,
        autoplay:true,
        autoplayspeed:20,
        speed:2000
    })

    $('.my-slick').slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplayspeed:20,
        speed:1000
    })

    let menu = document.querySelector('.menu');
    let menuLogo1 = document.getElementById('menuLogo1');
    let menuLogo2 = document.getElementById('menuLogo2');
    let menuLists = document.querySelectorAll('nav-list-menu');
    let imgButtons = document.querySelectorAll('.right-side .slick-dots li');
    // let newDesc;

    menuLogo2.addEventListener('click', e => {
        menu.style.display = 'block';
    });
    menuLogo1.addEventListener('click', e => {
        menu.style.display = 'none';
    });

    // const descImgButton = ['Camera House', 'Rocket Launcher', 'Person with The Dog', 'Medical Checkup'];
    // console.log(imgButtons);
    // for(let i=0; i < descImgButton.length; i++){
    //     newDesc = document.createElement('p');
    //     newDesc.innerText = descImgButton[i];
    //     imgButtons[i].appendChild(newDesc);
    // }

    // imgButtons.forEach(imgbutton => {
    //     imgbutton.addEventListener('')
    // })


})