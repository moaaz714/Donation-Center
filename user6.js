// script.js
const filterButton = document.getElementById('filter-organizations');
const searchInput = document.getElementById('search-organizations');
const organizationList = document.getElementById('organization-list').getElementsByTagName('li');

filterButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase();
    for (let i = 0; i < organizationList.length; i++) {
        const organizationName = organizationList[i].textContent.toLowerCase();
        if (organizationName.includes(searchTerm)) {
            organizationList[i].style.display = 'block';
        } else {
            organizationList[i].style.display = 'none';
        }
    }
});
