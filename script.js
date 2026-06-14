function insert_Row() {
    let table = document.getElementById("sampleTable");
    let newRow = document.createElement("tr");
    newRow.innerHTML = '<td>New Cell1</td><td>New Cell2</td>';
    
    if (table.rows.length > 0) {
        table.tBodies[0].insertBefore(newRow, table.rows[0]);
    } else {
        table.appendChild(newRow);
    }
}