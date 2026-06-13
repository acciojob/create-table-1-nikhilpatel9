function insert_Row() {
    let table = document.getElementById("sampleTable");
    table.insertAdjacentHTML('afterbegin', `
        <tr>
            <td>New Cell1</td>
            <td>New Cell2</td>
        </tr>
    `);
}