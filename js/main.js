"use strict";

function toggleMenu(element) {
    element.classList.toggle('active');
}

function init() {
    const toggle = document.getElementsByClassName('toggle-menu')[0];
    const menu = document.getElementsByClassName('responsive-menu')[0];
    toggle.addEventListener('click', () => {
        toggleMenu(menu);
    });
}

document.addEventListener("DOMContentLoaded", init);
