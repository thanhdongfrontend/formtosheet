var village = document.getElementById("village");
var address = document.getElementById("address");
const lockWeight = document.getElementById("lock-weight");
var weight = document.getElementById("weight");
const lockcod = document.getElementById("lock-cod");
var cod = document.getElementById("cod");
const lockproduct = document.getElementById("lock-product");
var product = document.getElementById("product");
const lockbarcode = document.getElementById("lock-barcode");
var barcode = document.getElementById("barcode");
lockWeight.addEventListener("click", function () {
  if (lockWeight.textContent == "Khóa khối lượng") {
    weight.setAttribute("readonly", true);
    lockWeight.textContent = "Mở khóa khối lượng";
    lockWeight.classList.add("lock");
    weight.tabIndex = -1;
  } else {
    weight.removeAttribute("readonly");
    lockWeight.textContent = "Khóa khối lượng";
    weight.removeAttribute("tabIndex");
    lockWeight.classList.remove("lock");
  }
});

lockcod.addEventListener("click", function () {
  if (lockcod.textContent == "Khóa số tiền COD") {
    cod.setAttribute("readonly", true);
    lockcod.textContent = "Mở khóa số tiền COD";
    lockcod.classList.add("lock");
    cod.tabIndex = -1;
  } else {
    cod.removeAttribute("readonly");
    lockcod.textContent = "Khóa số tiền COD";
    cod.removeAttribute("tabIndex");
    lockcod.classList.remove("lock");
  }
});

lockproduct.addEventListener("click", function () {
  if (lockproduct.textContent == "Khóa nội dung hàng") {
    product.setAttribute("readonly", true);
    lockproduct.textContent = "Mở khóa nội dung hàng";
    lockproduct.classList.add("lock");
    product.tabIndex = -1;
  } else {
    product.removeAttribute("readonly");
    lockproduct.textContent = "Khóa nội dung hàng";
    product.removeAttribute("tabIndex");
    lockproduct.classList.remove("lock");
  }
});

lockbarcode.addEventListener("click", function () {
  if (lockbarcode.textContent == "Khóa số hiệu bưu gửi") {
    barcode.setAttribute("readonly", true);
    lockbarcode.textContent = "Mở khóa số hiệu bưu gửi";
    lockbarcode.classList.add("lock");
    barcode.tabIndex = -1;
  } else {
    barcode.removeAttribute("readonly");
    lockbarcode.textContent = "Khóa số hiệu bưu gửi";
    barcode.removeAttribute("tabIndex");
    barcode.setAttribute('required',true)
    lockbarcode.classList.remove("lock");
  }
});
