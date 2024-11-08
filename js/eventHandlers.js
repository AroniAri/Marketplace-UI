// Function to attach event listeners to card buttons
function attachCardEventListeners(card, advertisement) {
    const toggleContactBtn = card.querySelector('.toggle-contact');
    const contactValue = card.querySelector('.contact-value');
    const detailsBtn = card.querySelector('.details-btn');

    toggleContactBtn.addEventListener('click', () => {
        toggleContactInfo(contactValue, toggleContactBtn, advertisement.contact);
    });

    detailsBtn.addEventListener('click', () => {
        showDetailsAlert(advertisement);
    });
}

// Function to toggle contact information
function toggleContactInfo(contactElement, buttonElement, contactInfo) {
    if (contactElement.textContent === '***') {
        contactElement.textContent = contactInfo;
        buttonElement.textContent = 'Hide Contact';
    } else {
        contactElement.textContent = '***';
        buttonElement.textContent = 'Show Contact';
    }
}

// Function to show details alert
function showDetailsAlert(advertisement) {
    const detailsMessage = `
        Advertisement Details:
        
        Title: ${advertisement.title}
        Contact: ${advertisement.contact}
        Price: ${advertisement.price}
    `;
    alert(detailsMessage);
}

// Function to filter advertisements
function filterAdvertisements(searchText) {
    const filteredAds = advertisementsData.filter(ad => 
        ad.title.toLowerCase().includes(searchText.toLowerCase()) ||
        ad.description.toLowerCase().includes(searchText.toLowerCase())
    );
    renderAdvertisements(filteredAds);
}