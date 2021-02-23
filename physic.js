document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openmodal_45"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
    });
    document.querySelector('[href="#"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
    });

});

  function check_3() {

  var vopros_1=document.form_3.vopros_1.value;
  var vopros_2=document.form_3.vopros_2.value;
  var vopros_3=document.form_3.vopros_3.value;
  var vopros_4=document.form_3.vopros_4.value;
  var vopros_5=document.form_3.vopros_5.value;
  var result=document.form_3.result;
  var count=0;
  
  if(vopros_1 == "yes") {

    count++;
  }
  if(vopros_2 == "yes") {

    count++;
  }
  if(vopros_3 == "yes") {

    count++;
  }
  if(vopros_4 == "yes") {

    count++;
  }
  if(vopros_5 == "yes") {

    count++;
  }
  if(count == 5) {
    document.getElementById('lol_3').value='5 из 5';
  }
  else{
    if(count == 4) {
      document.getElementById('lol_3').value='4 из 5';
    }
    else {
      if(count == 3) {
        document.getElementById('lol_3').value='3 из 5';
      }
      else {
        if(count == 2) {
          document.getElementById('lol_3').value='2 из 5';
        }
        else {
          if(count == 1) {
            document.getElementById('lol_3').value='1 из 5';
          }
          else {
            document.getElementById('lol_3').value='0 из 5';
          }
        }
      }
    }
  }
}

  function check_2() {

    var vopros_1=document.form_2.vopros_1.value;
    var vopros_2=document.form_2.vopros_2.value;
    var vopros_3=document.form_2.vopros_3.value;
    var vopros_4=document.form_2.vopros_4.value;
    var vopros_5=document.form_2.vopros_5.value;
    var result=document.form.result;
    var count=0;
    
    if(vopros_1 == "yes") {
  
      count++;
    }
    if(vopros_2 == "yes") {
  
      count++;
    }
    if(vopros_3 == "yes") {
  
      count++;
    }
    if(vopros_4 == "yes") {
  
      count++;
    }
    if(vopros_5 == "yes") {
  
      count++;
    }
    if(count == 5) {
      document.getElementById('lol_2').value='5 из 5';
    }
    else{
      if(count == 4) {
        document.getElementById('lol_2').value='4 из 5';
      }
      else {
        if(count == 3) {
          document.getElementById('lol_2').value='3 из 5';
        }
        else {
          if(count == 2) {
            document.getElementById('lol_2').value='2 из 5';
          }
          else {
            if(count == 1) {
              document.getElementById('lol_2').value='1 из 5';
            }
            else {
              document.getElementById('lol_2').value='0 из 5';
            }
          }
        }
      }
    }
  }
    function check() {

      var vopros_1=document.form.vopros_1.value;
      var vopros_2=document.form.vopros_2.value;
      var vopros_3=document.form.vopros_3.value;
      var vopros_4=document.form.vopros_4.value;
      var result=document.form.result;
      var count=0;
      
      if(vopros_1 == "yes") {
    
        count++;
      }
      if(vopros_2 == "yes") {
    
        count++;
      }
      if(vopros_3 == "yes") {
    
        count++;
      }
      if(vopros_4 == "yes") {
    
        count++;
      }
      if(count == 4) {
        document.getElementById('lol').value='4 из 4';
      }
      else{
        if(count == 3) {
          document.getElementById('lol').value='3 из 4';
        }
        else {
          if(count == 2) {
            document.getElementById('lol').value='2 из 4';
          }
          else {
            if(count == 1) {
              document.getElementById('lol').value='1 из 4';
            }
            else {
              if(count == 0) {
                document.getElementById('lol').value='0 из 4';
              }

            }
          }
        }
      }
    }
  
