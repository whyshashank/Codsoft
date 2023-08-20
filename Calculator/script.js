const input= document.getElementById("number-input")
const positive=document.getElementById("answer-sheet")

function OnclickEvent(e){
  
 const exp= `${input.value}${e.innerText}`
    input.value=exp;

    if(["-", "+", "*","/"].includes(e.innerText)) return 
    positive.value=eval(exp)

}

function reset(){
    input.value="";
    positive.value="";
}