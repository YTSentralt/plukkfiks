function showMore() {
    const contentSection = document.getElementById('content');
    contentSection.classList.add('show');

    const shopSection = document.getElementById('shop-section');
    const contactSection = document.getElementById('contact-section');

    shopSection.classList.add('show');
    contactSection.classList.add('show');
}

function redirectToShop() {
    // Implement your redirection to the shop here
    console.log('Redirecting to the shop...');
}

function showContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.style.display = 'block';
}

function contactViaEmail() {
    // Implement your email contact functionality here
    console.log('Contacting via email...');
}

function contactViaSMS() {
    // Implement your SMS contact functionality here
    console.log('Contacting via SMS...');
}
