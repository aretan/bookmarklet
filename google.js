(function(){
  var xhr = new XMLHttpRequest();
  var ifr = document.createElement("iframe");

  var req = document.querySelectorAll(".srg .g .r h3");
  for(var i in req){
    if(req[i].innerText){
      console.log(req[i].parentNode.getAttribute('href'));
      ifr.src = req[i].parentNode.getAttribute('href');
      req[i].parentNode.appendChild(ifr);
    }
  }
})();
