// Function to create a single advertisement card
function createAdvertisementCard(advertisement) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    
    card.innerHTML = `
        <div class="card h-100">
            <img src="${advertisement.image}" 
                 class="card-img-top" 
                 alt="${advertisement.title}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${advertisement.title}</h5>
                <p class="card-text">${advertisement.description}</p>
                <p class="card-text price-tag">${advertisement.price}</p>
                <div class="mt-auto">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="contact-info">Contact: <span class="contact-value">***</span></span>
                        <div class="btn-group">
                            <button class="btn btn-outline-primary btn-sm toggle-contact">
                                Show Contact
                            </button>
                            <button class="btn btn-primary btn-sm details-btn">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add event listeners
    attachCardEventListeners(card, advertisement);

    return card;
}

// Function to render all advertisements
function renderAdvertisements(advertisements) {
    const container = document.getElementById('advertisementsContainer');
    container.innerHTML = '';

    if (advertisements.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="no-results">
                    <p>No advertisements found matching your search.</p>
                </div>
            </div>
        `;
        return;
    }

    advertisements.forEach(ad => {
        container.appendChild(createAdvertisementCard(ad));
    });
}