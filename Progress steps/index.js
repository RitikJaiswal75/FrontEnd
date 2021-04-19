let count=1;
document.getElementById("p1").classList.add("blueborder");
function colouradd(count){
if(count==2){document.getElementById("p2").classList.add("blueborder");document.getElementById("11").classList.add("blueline");}
if(count==3){document.getElementById("p3").classList.add("blueborder");document.getElementById("12").classList.add("blueline");}
if(count==4){document.getElementById("p4").classList.add("blueborder");document.getElementById("13").classList.add("blueline");}
}

function colourrem(count){
if(count==1){document.getElementById("11").classList.remove("blueline");}
if(count==2){document.getElementById("p3").classList.remove("blueborder");document.getElementById("12").classList.remove("blueline");}
if(count==3){document.getElementById("p4").classList.remove("blueborder");document.getElementById("13").classList.remove("blueline");}
if(count==1){document.getElementById("p2").classList.remove("blueborder");}
}

document.getElementById("btn2").addEventListener("click",event =>{
    count=count+1;
    if(count>4){
        count=4;
    }
    if(count>1){
        document.getElementById("btn1").classList.add("bluebtn");
    }
    colouradd(count);
    if(count==4){
        document.getElementById("btn2").innerHTML="Submit"; 
    }
    else{
        document.getElementById("btn2").innerHTML="Next"; 
    }
} )
document.getElementById("btn1").addEventListener("click",event =>{
    count=count-1;
    if(count<1){
        count=1;
    }
    if (count==1){
        document.getElementById("btn1").classList.remove("bluebtn");
    }
    if(count==4){
        document.getElementById("btn2").innerHTML="Submit"; 
    }
    else{
        document.getElementById("btn2").innerHTML="Next"; 
    }
    colourrem(count);
} )
