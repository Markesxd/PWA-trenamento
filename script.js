if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

function calc(){
  const n1 = document.getElementById('n1');
  const n2 = document.getElementById('n2');
  const r = document.getElementById('r');

  console.log(n1.value);
  console.log(n2.value);
  r.value = Number(n2.value) + Number(n1.value);
}
