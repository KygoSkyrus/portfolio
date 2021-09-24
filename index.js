
//for the year in copyright
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

//toggle
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("swap1");
});


const nav = document.querySelector(".header");
const navheight = nav.getBoundingClientRect().height;

//scroll(used position-fixed instead)
window.addEventListener("scroll", function () {
    const up = document.querySelector('.up');
    const scrollheight = window.pageYOffset;

    if (scrollheight > navheight) {
        nav.classList.add("fixed-nav");
        nav.style.backgroundColor = "white";
        //to chnage color of links on scroll from white to black
        nav.style.boxShadow = "0 0 6px";//to add box shadow on scroll..
        for (let i = 0; i < 3; i++) {
            document.getElementsByTagName("a")[i].style.color = "black";
        }
    } else {
        nav.classList.remove("fixed-nav");
        nav.style.boxShadow = "none";
    }

    //for presenting navigation icon for home
    if (scrollheight > 500) {
        up.classList.add("fixed-nav");
    } else {
        up.classList.remove("fixed-nav");
    }

    //to make the color of links and header background chnage on scrolling
    if (scrollheight == 0) {
        nav.classList.remove("fixed-nav");
        document.getElementById("header").style.backgroundColor = "";
        for (let i = 0; i < 4; i++) {
            document.getElementsByTagName("a")[i].style.color = "white";
        }
    }
});
//to make links disapper on clicking on of them
const a = document.querySelector(".linkscont");
a.addEventListener("click", function () {
    document.querySelector(".header").classList.remove("swap1");
});



//Get the button
var mybutton = document.getElementById("myBtn");

/*
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
//removed this feature, instead of used all in one toTop and scroll percentage button
*/

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//scroll percentage indicatoe
let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    const bar = document.querySelector(".bar");
    let progressValue = document.getElementById("progress-value");
    let pos = window.pageYOffset;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);

    // console.log(pos, calcHeight, scrollValue);
    scrollProgress.style.background = `conic-gradient(#000000 ${scrollValue}%, #c0c0dd ${scrollValue}%)`;
    bar.style.background = `linear-gradient(to right, blueviolet ${scrollValue}%, rgb(0, 0, 0) ${scrollValue}%)`;
}

window.onscroll = scrollPercentage;
window.onload = scrollPercentage;





//active links on scroll

$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    if (window.innerWidth > 600) {//making it apply to wider screen only
        $('.page-section').each(function (i) {
            if ($(this).position().top - navheight <= scrollDistance) {
                $('#links a.active').removeClass('active');
                $('#links a').eq(i).addClass('active');
            }
        });
    }

}).scroll();



//controls on  projects holder
function controll(direction, hlder) {

    const content = document.getElementById(hlder);
    const content_scroll_width = content.scrollWidth;
    let content_scoll_left = content.scrollLeft;

    if (direction == 'l') {
        content_scoll_left -= 230;
        if (content_scoll_left <= 0) {
            content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
    } else {
        content_scoll_left += 230;
        if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width; }
        content.scrollLeft = content_scoll_left;
    }
}