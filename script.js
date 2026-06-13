function insert_Row() {
    let tb = document.getElementById("sampleTable");
    tb.insertAdjacentHTML('afterbegin', `<tr>
        <td>New Cell1</td>
        <td>New Cell2</td>
    </tr>`);
}