function openOrderForm(bundleName) {
    document.getElementById('bundleInput').value = bundleName;
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderForm() {
    document.getElementById('orderModal').style.display = 'none';
}

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    let modal = document.getElementById('orderModal');
    if (event.target == modal) {
        closeOrderForm();
    }
}
