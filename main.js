var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        direction: 'vertical',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('navpanel').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineEntries = document.querySelectorAll('.timeline-entry');
    
    const isInViewport = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const revealEntries = () => {
        timelineEntries.forEach(entry => {
            if (isInViewport(entry)) {
                entry.classList.add('in-view');
            } else {
                entry.classList.remove('in-view');
            }
        });
    };

    window.addEventListener('scroll', revealEntries);
    window.addEventListener('resize', revealEntries);

    revealEntries(); // Initial check on load
});
