 var loaderEl = document.getElementById("loader")
console.log(loaderEl);

 window.addEventListener("load", vanish);


 function vanish(){
     loaderEl.classList.add("disappear");
 }