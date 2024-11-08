// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initial render of advertisements
    renderAdvertisements(advertisementsData);

    // Set up search filter
    const filterInput = document.getElementById('filterInput');
    filterInput.addEventListener('input', (e) => {
        filterAdvertisements(e.target.value);
    });
});