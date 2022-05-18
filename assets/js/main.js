function hienthidanhmucluachon(){
    $(".header__category").removeClass("undisplay");
    $(".header__category").addClass("display");
}
function khonghienthidanhmucluachon(){
    $(".header__category").removeClass("display");
    $(".header__category").addClass("undisplay");
}
// slide show

// go to top
var showGoToTop = 300;

$(window).scroll(function(){
    if($(this).scrollTop() >= showGoToTop){
        $('#go-to-top').fadeIn();
    } else {
        $('#go-to-top').fadeOut();
    }
});
$('#go-to-top').click(function(){
    $('html, body').animate({scrollTop: 0 }, 'slow');
});
// change img
function changeImg(id){
    let imgPath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imgPath);
}
function check(){
    
    var type = document.getElementsByName("mau");
    if(type[0].checked)
    {
        var val = type[0].value;
        console.log(val);
    }
    else if(type[1].checked)
    {
        var val = type[1].value;
        console.log(val);
    }
    else if(type[2].checked)
    {
        var val = type[2].value;
        console.log(val);
    }
    
}
$(document).ready(function(){
    $(window).resize(function() {
        if($(window).width() < 739) {
            $('.collapse').removeClass('show');
        }
        else
        {
            $('.collapse').addClass('show');
        }
    });
    // click mega menu
    $('.header_nav-list .header_nav-list-item a').click(function() {
        $('.header_nav-list-item a').removeClass('active');
        $(this).addClass('active');
    });
    $('.ng-has-child1 > a i').click(function(e){
        e.preventDefault();
        $('.ul-has-child1').toggle('slow');
        $('.cong').toggleClass('hidden');
        $('.tru').toggleClass('hidden');
    })
   
    $('.ng-has-child2 > a i').click(function(e){
        e.preventDefault();
    })
    $('#trigger-mobile').click(function(e){
        $('.mobile-main-menu').toggleClass('xyz');
        $('.overlay').toggleClass('hidden');
    })
    $('.overlay').click(function(e){
        $('.mobile-main-menu').toggleClass('xyz');
        $('.overlay').toggleClass('hidden');
    })
    // click thông tin đơn hàng trang pay
    $('.summary').click(function(){
        $('.summary-content').toggle('slow');
    })
})
function hienthi(id, name){
    $(`#${name}`).toggle('slow');
    $(`.cong${id}`).toggleClass('hidden');
    $(`.tru${id}`).toggleClass('hidden');
}

function cong(id) {
    var value = document.getElementById(`text_so_luong-${id}`).value
    document.getElementById(`text_so_luong-${id}`).value = parseInt(value) + 1;
}
function tru(id) {
    var value = document.getElementById(`text_so_luong-${id}`).value
    if(parseInt(value) > 1)
    {
        document.getElementById(`text_so_luong-${id}`).value = parseInt(value) - 1;
    }
    
}


    function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function xoa(id) {
    $(`.cart-body-row-${id}`).fadeOut();
}

const removeItem = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.item-manager')
const panes = $$('.item-detail')
console.log(tabs)
tabs.forEach(function(tab, index) {
    const pane = panes[index]
    tab.onclick = function() {
        removeItem('.item-manager.active').classList.remove('active')
        removeItem('.item-detail.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')
    }
})


const url = "http://localhost:3001/contact";
const getForm = document.querySelector(".form-horizontal");


async function postOnServer() {
    const formContact = new FormData(getForm);
    const formDataSerialized = Object.fromEntries(formContact);
    console.log(formDataSerialized);
    const jsonObject = {
      "info" : [
        formDataSerialized,
      ]
    };
    
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(jsonObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      alert("Cảm ơn bạn đã gửi thông tin!")
    } catch (e) {
      console.error(e);
      alert("Có lỗi gì đó rùi :(");
    }
    
}



