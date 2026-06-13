function insert_Row() {
    //Write your code here
   let tb=document.getElementById("sampleTable");
	tb.innerHTML=`<tr><td>New Cell1</td> 
		<td>New Cell2</td></tr>`+tb.innerHTML;
  
}
