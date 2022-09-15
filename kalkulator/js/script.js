// global variabel
let tangkap, nilai;



function input(input) {
  nilai = document.getElementById('display').innerHTML;
  if (input == '+' || input == '-' || input == '*' || input == '/' || input == '%') {
    nilai += input;
    tangkap = nilai;
    // let history = document.getElementById('history');
    document.getElementById('history').innerHTML = nilai;
    document.getElementById('display').innerHTML = '';
  } else {
    nilai += input;
    document.getElementById('display').innerHTML = nilai;
  }
}


function negatif() {
  let nilai = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = nilai -= nilai * 2;
}


function hasil() {
  document.getElementById('history').innerHTML = "";
  // history.classList.toggle('d-none');
  let nilai = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = eval(tangkap + nilai);

}


function clearElement() {
  document.getElementById('display').innerHTML = '';
}



function allClear() {
  nilai = "";
  tangkap = "";
  document.getElementById('history').innerHTML = "";
  document.getElementById('display').innerHTML = "";
  // history.classList.toggle('d-none');
}




// ubah warna
document.body.addEventListener('mousemove', function () {
  const sumbuX = Math.round((event.clientX / window.innerWidth) * 255);
  const sumbuY = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb(' + sumbuX + ',' + sumbuY + ',50)';
});
