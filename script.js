
function calc(){
  const n1 = document.getElementById('n1');
  const n2 = document.getElementById('n2');
  const r = document.getElementById('r');

  console.log(n1.value);
  console.log(n2.value);
  r.value = Number(n2.value) + Number(n1.value);
}
