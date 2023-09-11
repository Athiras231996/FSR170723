console.log("Events")
//Anything happening on the web browser-event
//ex
//click====
//mouse over
//keyup
//keydown
//scroll
console.clear()
var btn=document.getElementById("btn")
//console.log(btn)
//2 ways
//way-1
//element.event_name=function name

function onBtnClick(){
  alert("Btn clicked")
}
// function onButtonClicked(){
//   alert("2nd function called")
// }
// btn.onclick=onBtnClick
// btn.onclick=onButtonClicked

//2nd way
//elementname.addEventListener(event,function name)
// btn.addEventListener("click",onBtnClick)
// btn.addEventListener("click",onButtonClicked)

//Example 1
function onBtnToggle(){
  //alert("clicked")
  //alert("")
  
  if(document.body.style.backgroundColor=='black'){
    document.body.style.backgroundColor="white";
    document.body.style.color="black"
  }else{
    document.body.style.backgroundColor="black";
    document.body.style.color="white"
  }
}

btn.addEventListener('click',onBtnToggle)

//Example 2-Zoom in and Zoom out
var zoomIn=document.getElementById('zoomin')
var zoomOut=document.getElementById('zoomout')
var para=document.getElementById('paragraph')

var font_Size=14;

function onZoomIn(){
//fontSize=fontSize+2;
font_Size+=4;// 14px+4=>14 px
para.style.fontSize=font_Size+"px"
//14
}
function onZoomOut(){
  font_Size-=2;
  para.style.fontSize=font_Size+ "px"  
}
zoomIn.addEventListener('click',onZoomIn)
zoomOut.addEventListener('click',onZoomOut)

//Example 3-Form validation

var email=document.getElementById("email")
var pwd=document.getElementById('pwd')
var confirmPwd=document.getElementById("confirmPwd")
var myForm=document.getElementById('myForm')




function onEmailKeyUp(e){
emailVal=e.target.value
console.log(emailVal)
}
function onPwdKeyUp(e){
    PwdVal=e.target.value
    console.log(PwdVal)
    }
    function onConfirmPwdKeyUp(e){
        ConfirmVal=e.target.value
        }

        function onFormSubmit(e){
            e.preventDefault() ;
            if(!emailVal.endsWith('@gmail.com')){
             alert("Only Gmail allowed")
            }else if(PwdVal!==ConfirmVal){
             alert("password should match")
            }else{
             alert("Form submitted successfully")
            }
         }

email.addEventListener('keyup',onEmailKeyUp)
pwd.addEventListener('keyup',onPwdKeyUp)
confirmPwd.addEventListener('keyup',onConfirmPwdKeyUp)
myForm.addEventListener('submit',onFormSubmit)

