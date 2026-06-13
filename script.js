function insert_Row() {
    //Write your code here
   let tb=document.getElementById("sampleTable");
	tb.innerHTML=`<tr><td>new cell1</td> 
		<td>new cell2</td></tr>`+tb.innerHTML;
  
}
