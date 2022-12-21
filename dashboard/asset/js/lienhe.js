
/* <--------------- JS for MODAL ---------------> */
const modalBox = document.querySelector('.modal');
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

toggleModal(subMenuItem, 'hidden');
toggleModal(iconCloseModal, 'auto');
toggleModal(btnCloseModal, 'auto');

