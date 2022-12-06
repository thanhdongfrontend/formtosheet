var form = document.querySelector("form");
var receiverName = document.getElementById('name')
var phone = document.getElementById('phone')
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbyQdJzZTlRSiR5qLtLdh4VhgufPC6tMvWClX2Y1Po7ClRNkP7px5_hyMahStvoPemSViw/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {});
  resetForm();
});

function resetForm() {
    if ( $('#weight').is('[readonly]') ) { 
        weight.value = $('#weight').val();
    }
    else {
        weight.value = '';
    }

    if ( $('#cod').is('[readonly]') ) { 
        cod.value = $('#cod').val();
    }
    else {
        cod.value = '';
    }

    if ( $('#product').is('[readonly]') ) { 
        product.value = $('#product').val();
    }
    else {
        product.value = '';
    }

    if ( $('#barcode').is('[readonly]') ) { 
        barcode.value = $('#barcode').val();
    }
    else {
        barcode.value = '';
    }

    receiverName.value = ""
    phone.value = ""
    village.value = ""
    ward.value = ""
    address.value = ""
    receiverName.focus()
}


