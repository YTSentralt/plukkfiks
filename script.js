let isContentVisible = false;

function toggleContent() {
    const contentSection = document.getElementById('content');
    contentSection.classList.toggle('show', !isContentVisible);

    const shopSection = document.getElementById('shop-section');
    const contactSection = document.getElementById('contact-section');

    shopSection.classList.toggle('show', isContentVisible);
    contactSection.classList.toggle('show', isContentVisible);

    const button = document.querySelector('.scroll-button button');
    button.classList.toggle('clicked', isContentVisible);
    isContentVisible = !isContentVisible;
}

// Resten av JavaScript-funksjonene for shop, contact info osv. som tidligere
