(function(){
  var ele = document.createElement('div'); 
  ele.style.backgroundColor = 'red';
  
  var xhr = new XMLHttpRequest();
  var req = document.querySelectorAll(".srg .g .r h3");
  for(var i in req){
    if(req[i].innerText){
      xhr.open("GET", req[i].parentNode.getAttribute('href'), true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          ele.innerHTML = xhr.status;
          e.parentNode.appendChild(ele);
        }
      }
      xhr.onerror = function (e) {
        ele.innerHTML = xhr.statusText;
        e.parentNode.appendChild(ele);
      };
      xhr.send(null);
    }
  }
})();
