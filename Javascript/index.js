document.addEventListener('DOMContentLoaded', (event) => {

document.querySelectorAll('.items').forEach(item => {
    item.addEventListener('mouseover', event => {
        const video = event.currentTarget.querySelector('video');
        video.play();
    });

    item.addEventListener('mouseout', event => {
        const video = event.currentTarget.querySelector('video');
        video.pause();
    });
});
});