const h=document.getElementById('loading')
var i = 0;
function myLoop() {
  setTimeout(function() { 
    h.innerHTML=i.toString()+"%";  
    i++;                   
    if (i < 100) {          
      myLoop();
    }
    if(i>=100){
        document.getElementById('loader').classList.add('hide')
        h.classList.add('hide')
    }                       
  }, 10)
}
myLoop(); 

