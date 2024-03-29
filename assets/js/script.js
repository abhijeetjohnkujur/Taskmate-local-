const deleteButton = document.getElementById('deleteButton');
const checkboxes = document.querySelectorAll('.checktask');


deleteButton.addEventListener('click', () => {
    const selectedIds = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedIds.push(checkbox.value);
        }
    });
    if (selectedIds.length > 0) {
        const idString = selectedIds.join(',');
        window.location.href = `/delete-todo/${idString}`;
    } else {
        // Alerting user to select the check box
        alert("No checkboxes are selected");
    }
});

// Disabling the delete button initially if there are no checkboxes
// Adding styles for main taask container if there are no checkboxes
if (checkboxes.length === 0) {
    deleteButton.style.display = 'none';
    main_task_container.style.display = 'none';
}
