let StartFunc = ({ inResponse }) => {
    let alertBox = document.getElementById('responseAlert');

    if (alertBox) {
        alertBox.querySelector('.alert-message').textContent = inResponse;
        alertBox.classList.remove('d-none');
        alertBox.classList.remove('alert-info');
        alertBox.classList.add('alert-danger');
    } else {
        const newAlert = document.createElement('div');
        newAlert.className = 'alert alert-danger alert-dismissible fade show';
        newAlert.role = 'alert';
        newAlert.innerHTML = `
            <span class="alert-message">${inResponse}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        document.body.prepend(newAlert);
    }
};
export { StartFunc };