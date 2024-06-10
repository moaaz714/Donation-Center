function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}
