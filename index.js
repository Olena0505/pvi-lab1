$(document).ready(function(){
    $('#studentsTable').paging({limit: 6});
})

const notifyBtn = document.getElementById('notificationBtn');
const bellIcon = document.getElementById('bellIcon');

notifyBtn.addEventListener('mouseover', event => {
    bellIcon.style.animation = 'none';
})

document.getElementById('selectAll').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('#studentsTable tbody input[type="checkbox"]');
   
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = this.checked;
    }, this);
});

document.getElementById('addBtn').onclick = function(){
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <th><input type="checkbox"></th>
        <td>KN-21</td>
        <td>John Smith</td>
        <td>M</td>
        <td>11.05.2004</td>
        <td><span class="inactive-dot"></span></td>
        <td>
            <button class="editRowBtn">
                <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="deleteRowBtn">
                <i class="fa-solid fa-xmark fa-lg"></i>
            </button>
        </td>
    `;

    newRow.classList.add('tableRow');
    document.getElementById('tableBody').appendChild(newRow);

    const newDeleteButton = newRow.querySelector('.deleteRowBtn');
    addDeleteListener(newDeleteButton);
    $('#studentsTable').paging('refresh');

}

let deleteButtons = document.querySelectorAll('.deleteRowBtn');
deleteButtons.forEach(button => addDeleteListener(button));

function addDeleteListener(button) {
    button.addEventListener('click', function() {
        const row = button.closest('tr');
        row.remove();
        $('#studentsTable').paging('refresh');
    });
}