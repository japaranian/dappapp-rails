var ws = new WebSocket('ws://localhost:4000');

window.onload = function(){
  ws.addEventListener('open', function(evt){

    var button = document.querySelector('button');
    var inputbox = document.querySelector('input');

    

    // button.addEventListener('click', function(){
    //   var object = {
    //     name : name,
    //     text : inputbox.value
    //   }
    //   var userMessage = JSON.stringify(object);
    //   ws.send(userMessage);
    //   inputbox.value = " ";
    // });

    input.addEventListener("keypress", function(evt){
      if (evt.keyCode === 13){

        var url = "http://localhost:3000/users/3.json";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener('load', function(e) {
          var data = xhr.responseText;
          console.log(data);
          var parsed = JSON.parse(data);
          var username = document.createElement("h1")
          var userParse = parsed["username"];
          username.innerHTML = userParse; 
          console.log(userParse)


          var object = {
          name : userParse,
          text : inputbox.value
          }
          var userMessage = JSON.stringify(object);
          console.log(userMessage);
          ws.send(userMessage);
          inputbox.value = " ";

        });
        xhr.send();

        
      }
    });

    ws.addEventListener('message', function(msg){
      var parsed = JSON.parse(msg.data);
      var chatlist = document.createElement('li');
      chatlist.innerHTML = parsed.name + ": " + "<br>" + parsed.text;
      
      // var usermsg = parsed.name;    

      var linkmsg = parsed.text;

      var httpParse = parsed.text.substring(0, 5).trim();
      if (httpParse === "http" || httpParse === "http:"){
        var length = parsed.text.length;
        var picurl = parsed.text.substring(length-3, length);
        if (picurl === "png" || picurl === "jpg" || picurl === "bmp" || picurl === "gif"){
          linkmsg = "<img src='" + parsed.text +"'>";
        }
        else {
          linkmsg = "<a target=_blank href='" + parsed.text + "'>" + parsed.text + "</a>";
        }
      };

      chatlist.innerHTML = parsed.name + ": " + "<br>" + linkmsg;

      var messages = document.getElementById('messages');
      messages.appendChild(chatlist);
    });

  });
}