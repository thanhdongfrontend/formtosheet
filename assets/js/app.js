var village = document.getElementById("village")
var address = document.getElementById("address")
const lockWeight = document.getElementById("lock-weight")
var weight = document.getElementById("weight")
const lockcod = document.getElementById("lock-cod")
var cod = document.getElementById("cod")
const lockproduct = document.getElementById("lock-product")
var product = document.getElementById("product")
const lockbarcode = document.getElementById("lock-barcode")
var barcode = document.getElementById("barcode")
var qrcodeScan = document.getElementById("qrcode-scaner")
const barcodeWrapper = document.getElementById("barcode-wrap")
lockWeight.addEventListener("click", function () {
  if (lockWeight.textContent == "Khóa khối lượng") {
    weight.setAttribute("readonly", true)
    weight.style.display = 'none'
    lockWeight.textContent = "Mở khóa khối lượng : " + weight.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +"(g)"
    lockWeight.classList.add("lock")
    weight.tabIndex = -1
  } else {
    weight.removeAttribute("readonly")
    weight.style.display = 'block'
    lockWeight.textContent = "Khóa khối lượng"
    weight.removeAttribute("tabIndex")
    lockWeight.classList.remove("lock")
  }
})

lockcod.addEventListener("click", function () {
  if (lockcod.textContent == "Khóa số tiền COD") {
    cod.setAttribute("readonly", true)
    cod.style.display = 'none'
    lockcod.textContent = "Mở khóa số tiền COD: " + cod.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "(VNĐ)"
    lockcod.classList.add("lock")
    cod.tabIndex = -1
  } else {
    cod.removeAttribute("readonly")
    cod.style.display = 'block'
    lockcod.textContent = "Khóa số tiền COD"
    cod.removeAttribute("tabIndex")
    lockcod.classList.remove("lock")
  }
})

lockproduct.addEventListener("click", function () {
  if (lockproduct.textContent == "Khóa nội dung hàng") {
    product.setAttribute("readonly", true)
    product.style.display = 'none'
    lockproduct.textContent = "Mở khóa nội dung hàng: " + product.value
    lockproduct.classList.add("lock")
    product.tabIndex = -1
  } else {
    product.removeAttribute("readonly")
    product.style.display = 'block'
    lockproduct.textContent = "Khóa nội dung hàng"
    product.removeAttribute("tabIndex")
    lockproduct.classList.remove("lock")
  }
})

lockbarcode.addEventListener("click", function () {
  if (lockbarcode.textContent == "Khóa số hiệu bưu gửi") {
    barcode.setAttribute("readonly", true)
    barcodeWrapper.style.display = 'none'
    lockbarcode.textContent = "Mở khóa số hiệu bưu gửi"
    lockbarcode.classList.add("lock")
    barcode.tabIndex = -1
  } else {
    barcode.removeAttribute("readonly")
    barcodeWrapper.style.display = 'flex'
    lockbarcode.textContent = "Khóa số hiệu bưu gửi"
    barcode.removeAttribute("tabIndex")
    barcode.setAttribute("required", true)
    lockbarcode.classList.remove("lock")
  }
})

function onScanSuccess(qrCodeMessage) {
  barcode.value = qrCodeMessage
  document.getElementById("stop-scan").click()
  qrcodeScan.classList.add("hide")
}

function onScanError(errorMessage) {
  //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 60,
  qrbox: 250,
})
html5QrcodeScanner.render(onScanSuccess, onScanError)
document.getElementById("permissions").click()
var btnScan = document.getElementById("btn-scan")
btnScan.addEventListener("click", function () {
  qrcodeScan.classList.add("show")
  qrcodeScan.classList.remove("hide")
  var interval = setInterval(function () {
    document.getElementById("start-scan").click()
    clearInterval(interval)
  }, 1000)
})

