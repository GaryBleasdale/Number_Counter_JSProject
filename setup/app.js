var value = 0;
var button=document.body.querySelectorAll('.btn')
var inputArea=document.body.querySelector('#value')
inputArea.innerText=`${value}`



button[2].addEventListener("click",function(){
  value=value+1
  inputArea.innerText=`${value}`
  if(value<0){
    inputArea.style.color="red"
  } else if(value>0){
    inputArea.style.color="green"
  } else {
    inputArea.style.color="black"
  }
} )

button[0].addEventListener("click",function(){
  value=value-1
  inputArea.innerText=`${value}`
  if(value<0){
    inputArea.style.color="red"
  } else if(value>0){
    inputArea.style.color="green"
  } else {
    inputArea.style.color="black"
  }

} )

button[1].addEventListener("click",function(){
  value=0
  inputArea.innerText=`${value}`
  inputArea.style.color="black"
} )







