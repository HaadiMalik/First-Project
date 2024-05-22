
document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', event => {
        const accordionItem = event.target.parentNode;
        accordionItem.classList.toggle('active');
    });
});
