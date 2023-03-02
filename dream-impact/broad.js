//set broad
var txt = document.querySelector("textarea");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");

//button's click
btn.onclick = function(){
  if(txt.value == ""){
    alert("NoType")
  }else{
    //create element li to broad
    var li = document.createElement("li");
    //Put the content of the text box into li, the content in the href in a tag means that nothing is executed
    li.innerHTML = txt.value + "<a href = 'javascript:;'>Delete</a>"
    txt.value = "";//Message board emptied after adding text
    //Add the message to the ul and at the top
    ul.insertBefore(li, ul.children[0]);
    //Delete the li in ul when clicking delete
    var as = document.querySelectorAll("a");
    //Loop to bind events to each deletion
    for(var i = 0; i < as.length; i++){
      as[i].onclick = function(){
        ul.removeChild(this.parentNode);
      }
    }
    //Feedback on the transfer of messages
    alert("your message has been received by ***")
  }
}