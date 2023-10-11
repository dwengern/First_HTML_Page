
function openPage(pageName, elmnt) {
    var i, content;
    content = document.getElementsByClassName("Content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
  }

function OnClick(){
  document.getElementById("button1_p").innerHTML = "Clicked button!";
  document.getElementById("button1_p").style.color = "red";
}

function MouseOver(){
  document.getElementById("mouseover_p").innerHTML = "Hovering (MouseOver)!";
  document.getElementById("mouseover_p").style.color = "red";
}

function MouseOut(){
  document.getElementById("mouseover_p").innerHTML = "No hover (MouseOut)!";
  document.getElementById("mouseover_p").style.color = "black";
}

function OnSelect(){
  alert("OnSelect event triggered!");
}

function OnBlur(){
  let x = document.getElementById("name");
  x.value = "OnBlur event triggered!";
}

$("#m1").on("click", function () {
  // HTTP POST request
  $.post("http://35.188.215.226:8000/my_program", { "name": "Nick", "program": "cs" },
      function (data, status) {
          console.log("Post Status:");
          console.log(status);
          console.log("Post Data:");
          console.log(data);
          // Display response data on the page
          $("#name").html(data["Name"]);
          $("#tag").html(data["Program"]);
      }, "json");
});
