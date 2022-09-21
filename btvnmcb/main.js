

function bang1() {
  var x = document.getElementById("box1").value;
  if(x<20){
    col1.style.backgroundColor = 'violet';
  }else if(x<35){
    col1.style.backgroundColor = 'brown';
  }else{
    col1.style.backgroundColor = 'orange';
    alert('Nhap lai so nho hon')
  }
  
}


function bang2() {
    var x = document.getElementById("box2").value;
    if(x<20){
      col2.style.backgroundColor = 'violet';
    }else if(x<35){
      col2.style.backgroundColor = 'brown';
    }else{
      col2.style.backgroundColor = 'orange';
      alert('Nhap lai so nho hon')
    }
    
  }
  

function bang3() {
    var x = document.getElementById("box3").value;
    if(x<20){
      col3.style.backgroundColor = 'violet';
    }else if(x<35){
      col3.style.backgroundColor = 'brown';
    }else{
      col3.style.backgroundColor = 'orange';
      alert('Nhap lai so nho hon')
    }
  }
    
 function congtacdoimau1(){
  document.getElementById("nut1").style.background = 'red'
 
}
function congtacdoimau2(){
  document.getElementById("nut1").style.background ='green'
}
function congtacdoimau3(){
  document.getElementById("nut1").style.background = 'pink'
 
}
function congtacdoimau4(){
  document.getElementById("nut1").style.background ='yellow'
}
