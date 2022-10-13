const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

//Hàm hiển thị form modal mua vé(thêm class open vào modal)
function showBuyTicket() {
    modal.classList.add('open')
}

//Hàm ẩn form modal mua vé(gỡ bỏ class open vào modal)
function hideBuyTicket() {
    modal.classList.remove('open')
}

//Lặp qa từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}

//Nghe hành vi click vào nút close
modalClose.addEventListener('click', hideBuyTicket)

modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight;

// Dong mo mobile menu
mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}

// Tu dong dong khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i]

    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null
        }
    }
}