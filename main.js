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
    var txt2 = $("<tr><td></td><td></td><td></td></tr>")
    data.forEach(elem =>{
      $("insert").siblings().append(txt2);
      $("insert").children()[0].children[0].val() = elem.id;
      $("insert").children()[0].children[1].val() = elem.name;
      $("insert").children()[0].children[2].val() = elem.email;      
    })
  }
  )

});
