const requests = [
    { id: 1, type: 'Type 1', details: 'Details 1' },
    { id: 2, type: 'Type 2', details: 'Details 2' },
];

// Function to display requests
function displayRequests() {
    const requestsContainer = document.querySelector('.requests-container');
    requestsContainer.innerHTML = ''; // Clear previous content

    requests.forEach(request => {
        const requestElement = document.createElement('div');
        requestElement.classList.add('request');
        requestElement.innerHTML = `
            <p><strong>Request ID:</strong> ${request.id}</p>
            <p><strong>Request Type:</strong> ${request.type}</p>
            <p><strong>Request Details:</strong> ${request.details}</p>
            <button class="accept-btn" onclick="acceptRequest(${request.id})">Accept</button>
            <button class="reject-btn" onclick="rejectRequest(${request.id})">Reject</button>
        `;
        requestsContainer.appendChild(requestElement);
    });
}

// Function to accept a request
function acceptRequest(id) {
    // Implement your logic to accept the request
    console.log(`Request ${id} accepted.`);
}

// Function to reject a request
function rejectRequest(id) {
    // Implement your logic to reject the request
    console.log(`Request ${id} rejected.`);
}

// Display requests when the page loads
window.onload = displayRequests;
