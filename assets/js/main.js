


const tabs = document.querySelectorAll(" [data-target]"),
    tabContents = document.querySelectorAll(' [data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const
            target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tc => { /*tc = tabcontent*/
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')
        tabs.forEach(t => { /* t = tab*/
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add("filter-tab-active")

    })
})


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px', 
    duration: 2500,
    delay: 400,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name' ,{delay: 500})
sr.reveal('.profile__profession',{delay: 600})
sr.reveal('.profile_social',{delay: 700})
sr.reveal('.profile_social',{delay: 7091})
sr.reveal('.profile_social',{delay: 7091})
sr.reveal('.profile_social',{delay: 7091})

// =========================== Preloader ================================//

document.addEventListener("DOMContentLoaded", function() {
    // Set the timer to hide the preloader after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        // Add the 'loaded' class to the body to trigger the CSS transition
        document.body.classList.add('loaded');
    }, 3000); // 3000 milliseconds equals 3 seconds
});



// Show or hide the WhatsApp icon based on scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const whatsappIcon = document.querySelector(".whatsapp-icon");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        whatsappIcon.style.display = "flex";
    } else {
        whatsappIcon.style.display = "none";
    }
}

// Optional: Add event listener for click analytics tracking
document.querySelector(".whatsapp-icon").addEventListener("click", function() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'WhatsApp',
            'event_label': 'WhatsApp Icon Click'
        });
    }
});
