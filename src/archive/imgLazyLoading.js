
window.onload = lazyLoad;
window.onscroll = lazyLoad

function lazyLoad1() {
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        observer.observe(img);
    })
}


const observer = new IntersectionObserver(changes => {
    changes.forEach(change => {
        if (change.isIntersecting) {
            const img = change.target
            img.src = img.dataset.src
            observer.unobserve(img)
        }
    })
})

function lazyLoad() {
    const viewHeight = document.documentElement.clientHeight; // height of view height except padding
    const allImages = document.querySelectorAll('img');


    allImages.forEach((img, index) => {
        const toViewTop = img.getBoundingClientRect().top // height to the top of current view
        if (toViewTop < viewHeight) {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            console.log('load', index)
        }
    })
}






