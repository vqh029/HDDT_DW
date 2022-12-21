var btnCloseModalHD = document.querySelector('.btn-close-modalHD');
var btnOpenModalHD = document.querySelector('.btn-open-iframe');
const modalHD = document.querySelector('.modal-iframe-hd');

btnOpenModalHD.addEventListener('click', function(){
    modalHD.classList.toggle('open');
})

btnCloseModalHD.addEventListener('click', function(){
    modalHD.classList.toggle('open');
})


