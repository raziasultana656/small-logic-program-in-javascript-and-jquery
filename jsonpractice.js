function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	console.log('123')
     var obj = JSON.parse(this.responseText);
    
     txt="<tr><th>country</th><th>state</th></tr>";
      
     for(i=0;i<obj.data.length;i++)
     {
     	txt+="<tr>"
txt+="<td>"+obj.data[i].employee_name+"</td>";
txt+="<td>"+obj.data[i].employee_salary+"</td>";
txt+="</tr>"
     }
     txt+="</table>"
    document.getElementById("tabledata").innerHTML=txt;
    }
  };
  xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhttp.send();
}
 


