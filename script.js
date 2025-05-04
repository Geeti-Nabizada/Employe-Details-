document.getElementById('employeeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const position = document.getElementById('position').value;
  
  const table = document.getElementById('employeeTable');
  const row = table.insertRow();
  
  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${position}</td>
  `;
  
  this.reset();
});