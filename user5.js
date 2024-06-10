document.getElementById("change-password-form").addEventListener("submit", function(event) {
    var currentPassword = document.getElementById("current-password").value;
    var newPassword = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("New passwords do not match. Please try again.");
        event.preventDefault();
    } else {
        // Send an AJAX request to the server to change the password
        // This is just a placeholder, you would need to implement this logic
        alert("Password changed successfully!");
    }
});
