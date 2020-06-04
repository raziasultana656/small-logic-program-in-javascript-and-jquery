var myFormData = [];   //declare an array
var value1 = document.getElementById("txtfullname").value;  //get the value of an element by it's id
myFormData.push(value1);
var value2 = document.getElementById("txtdob").value;  //get the value of an element by it's id
myFormData.push(value2);
var value3 = document.getElementById("txtEmail").value;  //get the value of an element by it's id
myFormData.push(value3);
var value4 = document.getElementById("txtphone").value;  //get the value of an element by it's id
myFormData.push(value4);



var table = document.getElementById( "tablevalue" );
var tableArr = [];
for ( var i = 1; i < table.rows.length; i++ ) {
    tableArr.push({
        table.rows[i].cells[0].innerHTML,
        table.rows[i].cells[1].innerHTML,
        table.rows[i].cells[2].innerHTML,
        table.rows[i].cells[3].innerHTML,
       
    });
}