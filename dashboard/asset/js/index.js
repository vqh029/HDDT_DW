

// Thay doi icon Hien mat khau
const togglePassword = document.querySelector('#toggle-password');
const password = document.querySelector('#Password');
const iDCustomer = document.querySelector('#IDCustomer');

togglePassword.addEventListener('click', function(e){
    const type = password.getAttribute('type') === 'password' ?'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

/* <--------------- JS for MODAL ---------------> */
const modalBox = document.querySelector('.modal');
const forgetPassword = document.getElementsByClassName('link-forget-password');
var subMenuItem = document.getElementsByClassName('sub-menu-item');
var iconCloseModal = document.getElementsByClassName('icon-close-modal');
var btnCloseModal = document.getElementsByClassName('btn-close-modal');

function toggleModal(item, flowy){
  for(var i = 0; i < item.length; i++){
    var thisItem = item[i];
    thisItem.addEventListener('click', function(){
      var modal = document.getElementById(this.dataset.modal);
      document.body.style.overflowY = flowy;
      modal.classList.toggle('open');
    }, false);
  }
};

toggleModal(forgetPassword, 'hidden');
toggleModal(subMenuItem, 'hidden');
toggleModal(iconCloseModal, 'auto');
toggleModal(btnCloseModal, 'auto');

const onLogin = () => {
  window.location.href = './dashboard/dashboard.html';
}