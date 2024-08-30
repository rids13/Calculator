var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn){
  item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
    if(btntext=='x'){
      btntext='*';
    }
    if(btntext=="&divide;"){
      btntext='/';
    }
    screen.value+=btntext;
  });
}