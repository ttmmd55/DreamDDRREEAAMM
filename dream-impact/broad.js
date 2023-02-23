//set broad
var txt = document.querySelector("textarea");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");

//button's click
btn.onclick = function(){
  if(txt.value == ""){
    alert("NoType")
  }else{
    //create element li to youyanqu
    var li = document.createElement("li");

    li.innerHTML = txt.value + "<a href = 'javascript:;'>Delete</a>"
    txt.value = "";

    ul.insertBefore(li, ul.children[0]);

    var as = document.querySelectorAll("a");

    for(var i = 0; i < as.length; i++){
      as[i].onclick = function(){
        ul.removeChild(this.parentNode);
      }
    }
  }
}