document.getElementsByTagName('html')[0].oncontextmenu=function(){console.log("context"); return false;}

var inputPlace  = document.getElementsByName("my_form")[0];
////////////////////////////////////////////////////////////////////////

function addThis(some_This){
    inputPlace.style.backgroundColor='white';
    inputPlace.value +=some_This+"";
}
////////////////////////////////////////////////////////

function back(){
    inputPlace.style.backgroundColor='#E1BF15';
    /*if(inputPlace.value!=Infinity){
    inputPlace.value = inputPlace.value.substring(0,inputPlace.value.length-1);
    }else{
        inputPlace.value ="";
    }*/
    ////
   // const regepr = "";
    if (inputPlace.value.endsWith('y')){ //inputPlace.value.endsWith('y');
         inputPlace.value = inputPlace.value.substring(0,inputPlace.value.length-('Infinity').length);   //inputPlace.value.serch(regepr)==-1
    }else if(inputPlace.value.endsWith('N')){
        inputPlace.value = inputPlace.value.substring(0,inputPlace.value.length-('NaN').length);
    }
    else{
        inputPlace.value = inputPlace.value.substring(0,inputPlace.value.length-1);
    }
}

var backButtom = document.getElementsByClassName("back")[0];
backButtom.onclick=function(){back();}
///////////////////////////////////////////////////////////////////////////////////////
function equal(){
    
        inputPlace.style.backgroundColor='#C65AE1';//pink
        ////////////
       // ms = new Date().getTime();
       // while(new Date().getTime()<ms+200){
       // }
        //////////
       // inputPlace.style.backgroundColor='white';
    
    
    if(inputPlace.value==undefined||inputPlace.value==""){
        inputPlace.value=0+"";
    }else{
        inputPlace.value = eval(inputPlace.value);
    }
}
var equalButtom = document.getElementsByClassName("equal")[0];
equalButtom.onclick=function(){equal();};

///////////////////////////////////////////////////////////////////////////////////////

function clean(){
    inputPlace.value = "";
    }

var cleanButtom = document.getElementById("cb");
cleanButtom.onclick=function(){clean();};



