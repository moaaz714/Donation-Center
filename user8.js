function deleteAccount() {
    var accountType = document.getElementById("accountType").value;
    var accountId = document.getElementById("accountId").value;

    // You can replace this with your server endpoint
    var url = "/delete-account";

    // AJAX request to delete the account
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Account deleted successfully!");
            // You can add further actions here, such as refreshing the page
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            alert("Failed to delete account. Please try again.");
        }
    };
    xhr.send(JSON.stringify({ accountType: accountType, accountId: accountId }));
}
