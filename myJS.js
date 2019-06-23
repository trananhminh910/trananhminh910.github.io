// đồng hồ điện tử
var time = document.getElementById('time');
setInterval(function() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    time.innerHTML = t;
},1000);

// tạo hiệu ứng xuất hiện lần lượt span trên logo
var i;
var item = document.getElementsByClassName('span-logo');
for(i=0; i< item.length; i++) {
    item[i].style.display = "none";
}
function showSpan() {
    setTimeout(function() {
        item[0].style.display = "block";
    },200);
    setTimeout(function() {
        item[1].style.display = "block";
    },600);
    setTimeout(function() {
        item[2].style.display = "block";
    },1000);
    setTimeout(function() {
        item[3].style.display = "block";
    },1400);
}
showSpan();
setInterval(function() {
    for(i=0; i< item.length; i++) {
        item[i].style.display = "none";
    }
    showSpan();
},6000);

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
var nextClick = document.getElementsByClassName('next');
setInterval(function() {
    nextClick[0].click();
},5000);

//mở rộng nội dung phần hot contents
var content = document.getElementsByClassName('content');
var more = document.getElementsByClassName('more-content');
more[0].addEventListener("click", function() {
    for(i=0; i<content.length; i++) {
        content[i].style.display = "block";
    }
    more[0].style.display="none";
})
//chọn nội dung cho sẵn ở phần content bottom
var clickItem = document.getElementsByClassName('link-bottom');
var itemBottom = document.getElementsByClassName('item-bottom');
clickItem[0].addEventListener('click',function(){
    for(i=0; i< itemBottom.length; i++) {
        itemBottom[i].style.display = "block";
    }
    for(i = 0; i < clickItem.length; i++) {
        clickItem[i].classList.remove("active");
    }
    this.classList.add("active");
});
for(i = 1; i < clickItem.length; i++) {
    clickItem[i].addEventListener('click',function() {
        var x = this.getAttribute("select");
        for(i = 0; i < clickItem.length; i++) {
            clickItem[i].classList.remove("active");
        }
        this.classList.add("active");
        for(i=0; i< itemBottom.length; i++) {
            itemBottom[i].style.display = "none";
            
        }
        for(i=0; i< itemBottom.length; i++){
            if(itemBottom[i].getAttribute("select") == x){
                itemBottom[i].style.display = "block";
            }
        }
    });
};
//quay lên đầu trang
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementsByClassName("backtop")[0].style.display = "block";
  } else {
    document.getElementsByClassName("backtop")[0].style.display = "none";
  }
}
// đóng mở hộp đăng nhập
var submitLink = document.getElementsByClassName("a-sub");
var close = document.getElementsByClassName('close');
var cancel = document.getElementsByClassName('cancelbtn');
submitLink[0].addEventListener("click", function() {
    document.getElementById('id01').style.display = "block";
});
close[0].addEventListener("click", function() {
    document.getElementById('id01').style.display = "none";
});
cancel[0].addEventListener("click", function() {
    document.getElementById('id01').style.display = "none";
})

    

