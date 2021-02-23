
function check_3() {

  var vopros_1=document.form_3.vopros_1.value;
  var vopros_2=document.form_3.vopros_2.value;
  var vopros_3=document.form_3.vopros_3.value;
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
  if(count == 3) {
    document.getElementById('lol_3').value='3 из 3';
  }
  else{
    if(count == 2) {
      document.getElementById('lol_3').value='2 из 3';
    }
    else {
      if(count == 1) {
        document.getElementById('lol_3').value='1 из 3';
      }
      else {
        if(count == 0) {
          document.getElementById('lol_3').value='0 из 3';
        }
      }
    }
  }
}
function check_2() {

  var vopros_1=document.form_2.vopros_1.value;
  var vopros_2=document.form_2.vopros_2.value;
  var vopros_3=document.form_2.vopros_3.value;
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
  if(count == 3) {
    document.getElementById('lol_2').value='3 из 3';
  }
  else{
    if(count == 2) {
      document.getElementById('lol_2').value='2 из 3';
    }
    else {
      if(count == 1) {
        document.getElementById('lol_2').value='1 из 3';
      }
      else {
        if(count == 0) {
          document.getElementById('lol_2').value='0 из 3';
        }
      }
    }
  }
}
function check() {

  var vopros_1=document.form.vopros_1.value;
  var vopros_2=document.form.vopros_2.value;
  var vopros_3=document.form.vopros_3.value;
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
  if(count == 3) {
    document.getElementById('lol').value='3 из 3';
  }
  else{
    if(count == 2) {
      document.getElementById('lol').value='2 из 3';
    }
    else {
      if(count == 1) {
        document.getElementById('lol').value='1 из 3';
      }
      else {
        if(count == 0) {
          document.getElementById('lol').value='0 из 3';
        }
      }
    }
  }
}