$(document).ready(function(){
  $("#form1").click(function(){

  $.post("http://localhost:8080/api/add",
    {
      "name": $("#fname1").val(),
      "email": $("fname2").val()
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
      console.log("merhaba");
    });
  }); 

  $.get("http://localhost:8080/api/all",
  function(data,status){
    var txt2 = $("<tr><td class='first'></td><td></td><td></td></tr>")
    data.forEach(elem =>{
      $("insert").append(txt2);
      $("insert").children("tr").children("td.first").val() = elem.id;
      $("insert").children("tr").children("td.first").next().val() = elem.name;
      $("insert").children()["tr"].children("td.first").next().next().val() = elem.email;      
    });
  });

});
