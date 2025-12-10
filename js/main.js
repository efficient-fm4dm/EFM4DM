"use strict";

/* ======= Header animation ======= */
const header = document.getElementById('header');

function headerAnimation() {
    let scrollTop = window.scrollY;
    if (scrollTop > 100) {
        header.classList.add('header-shrink');
    } else {
        header.classList.remove('header-shrink');
    }
}

window.onload = headerAnimation;
window.onresize = headerAnimation;
window.onscroll = headerAnimation;


/* ===== Smooth scrolling ====== */
let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');

scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault();
        let element = document.querySelector(scrollLink.getAttribute("href"));
        const yOffset = 69;
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

        //Collapse mobile menu after clicking
        if (pageNavWrapper.classList.contains('show')) {
            pageNavWrapper.classList.remove('show');
        }
    });
});


/* ===== Gumshoe ScrollSpy ===== */
var spy = new Gumshoe('#navigation a', {
    offset: 69
});


/* ======= Countdown Timer ========= */

// workshop date — 9 June 2026 at 09:00 AM (Hong Kong)
var target_date = new Date('2026-06-09T09:00:00+08:00').getTime();

// countdown container
var countdown = document.getElementById("countdown-box");

// only run countdown if countdown element exists
if (countdown) {

    // create spans once (better performance)
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);

    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);

    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);

    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);

    setInterval(function () {
        var now = new Date().getTime();
        var diff = (target_date - now) / 1000;

        // if workshop already started
        if (diff <= 0) {
            countdown.innerHTML = "<span style='color:red;font-weight:bold;'>We are LIVE!</span>";
            return;
        }

        // calculate time
        var days = parseInt(diff / 86400);
        diff = diff % 86400;

        var hours = parseInt(diff / 3600);
        diff = diff % 3600;

        var minutes = parseInt(diff / 60);
        var seconds = parseInt(diff % 60);

        // update display
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Secs</span>';

    }, 1000);
}
