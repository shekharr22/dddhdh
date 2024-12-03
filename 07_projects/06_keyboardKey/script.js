const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td> ${e.key === ' ' ? 'Space' : e.key}</td>
    <td> ${e.keyCode}</td>
    <td> ${e.code}</td>
  </tr>
</table>
    `
})