document.addEventListener("DOMContentLoaded", function () {
    const organizationLinks = document.querySelectorAll("ul li a");

    organizationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const orgId = this.getAttribute("data-org-id");
            showDetails(orgId);
        });
    });

    function showDetails(orgId) {
        const details = document.getElementsByClassName('organization-details');
        for (let i = 0; i < details.length; i++) {
            details[i].style.display = 'none';
        }

        const orgDetails = document.getElementById(orgId + '-details');
        if (orgDetails) {
            orgDetails.style.display = 'block';
        }
    }
});
