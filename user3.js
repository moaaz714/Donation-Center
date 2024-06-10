function renderSubmissions() {
    let submissionsContainer = document.getElementById('submissions');
    submissionsContainer.innerHTML = '';

    submissions.forEach((submission, index) => {
        let submissionDiv = document.createElement('div');
        submissionDiv.classList.add('submission');

        submissionDiv.innerHTML = `
            <h2>${submission.type} Submission</h2>
            <p><strong>${submission.type} Name:</strong> ${submission.name}</p>
            <p><strong>Contact Person:</strong> ${submission.contactPerson}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Phone:</strong> ${submission.phone}</p>
            <p><strong>Documents:</strong> ${submission.documents.map(doc => `<a href="#">${doc}</a>`).join(', ')}</p>
            <p><strong>Status:</strong> ${submission.status}</p>
            <button onclick="acceptSubmission(${index})">Accept</button>
            <button onclick="rejectSubmission(${index})">Reject</button>
        `;

        submissionsContainer.appendChild(submissionDiv);
    });
}

function acceptSubmission(index) {
    submissions[index].status = 'Accepted';
    renderSubmissions();
    alert('Submission accepted!');
}

function rejectSubmission(index) {
    submissions[index].status = 'Rejected';
    renderSubmissions();
    alert('Submission rejected!');
}

// Initial rendering
renderSubmissions();