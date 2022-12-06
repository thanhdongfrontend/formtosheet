var typingTimer;
var doneTypingInterval = 500;
var $input = $("#ward");
var list = document.getElementById('list')
$input.on("keyup", function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

$input.on("keydown", function () {
  clearTimeout(typingTimer);
});

function doneTyping() {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  let inputBoDau = loc_xoa_dau(input.value);
  let splitInput = inputBoDau.toLowerCase().split(" ");
  let check2 = array_is_unique(splitInput,splitInput.length);
  removeElements();
  if(inputBoDau!=""){
    list.classList.add('show')
  }
  else {
    list.classList.remove('show')
  }
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string
    let count = 0;
    iBoDau = loc_xoa_dau(i).toLowerCase();
    splitData = iBoDau.split(" ");
    let check1 = array_is_unique(splitData,splitData.length);
    let isSubArr = splitInput.every((e) => splitData.includes(e));
    // console.log("check2",check2);
    // console.log(splitInput);
    
    if(isSubArr && input.value != ""&&check2==1&&check1==1) {
      console.log('trung roi');
      // console.log("chua trung");
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      listItem.addEventListener('click',function(){
        list.classList.remove('show')
        address.value = village.value +" "+ input.value
      })
      let word = i.substr(0, input.value.length);
      word = word + i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
    else if (isSubArr && input.value != ""&&check2==0) {
      // console.log("chua trung");
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      listItem.addEventListener('click',function(){
        list.classList.remove('show')
        address.value = village.value +" "+ input.value 
      })
      let word = i.substr(0, input.value.length);
      word = word + i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
    var subarray1 = [];
    var subarray2 = [];
    var subarray3 = [];
    /*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
    let arrayWithNoDuplicates1 = splitData.reduce(function (accumulator, element) {
      if (accumulator.indexOf(element) === -1) {
        accumulator.push(element);
      }
      return accumulator;
    }, []);

    let arrayWithNoDuplicates2 = splitInput.reduce(function (accumulator, element) {
      if (accumulator.indexOf(element) === -1) {
        accumulator.push(element);
      }
      return accumulator;
    }, []);

    

    /*đếm số lần xuất hiện của các phần tử duy nhất*/
    for (let i = 0; i < arrayWithNoDuplicates1.length; i++)
      count_element_in_array(splitData, arrayWithNoDuplicates1[i], subarray1);
    // console.log(subarray1);

    for (let i = 0; i < arrayWithNoDuplicates2.length; i++)
      count_element_in_array(splitInput, arrayWithNoDuplicates2[i], subarray2);
    for (let i = 0; i < arrayWithNoDuplicates2.length; i++)
      count_element_in_array2(splitInput, arrayWithNoDuplicates2[i], subarray3);
    
  }
}

//Sort names in ascending order
let sortedNames = names.sort();

//reference
var input = document.getElementById("ward");

function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

function loc_xoa_dau(str) {
  // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
  str = str.trim();
  // bắt đầu xóa dấu tiếng việt  trong chuỗi
  str = str.replace(
    /phuong|phường|Phường|Thị trấn|Xã|xa|xã|quan|huyen|tinh|thanh pho|thành phố|thi tran|thị trấn|thị xã|thi xa|Quận|Huyện|Tỉnh|Thành phố|Thị xã/g,
    ""
  );
  // Gộp nhiều dấu space thành 1 space
  str = str.replace(/\s+/g, " ");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function count_element_in_array(array, x, subarray) {
  let count = 0;
  let variWithCout = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x)
      //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
      count++;
    variWithCout = x +count;
  }
  subarray.push(variWithCout);
  // console.log("Phan tu " + x + " xuat hien " + count + " lan");
}

function count_element_in_array2(array, x, subarray) {
  let count = 0;
  let variWithCout = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x)
      //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
      count++;
    variWithCout = x +count;
  }
  subarray.push(count);
  // console.log("Phan tu " + x + " xuat hien " + count + " lan");
}


/*Tạo hàm kiểm tra phần tử trùng trong mảng JavaScript*/
function array_is_unique( array, size){
    //flag =  1 =>  tồn tại phần tử trùng nhau
    //flag =  0 =>  không tồn tại phần tử trùng nhau
    let flag = 0;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = i + 1; j < size; ++j) {
            if (array[i] == array[j]) {
                /*Tìm thấy 1 phần tử trùng là đủ và dừng vòng lặp*/
                flag = 1;
                break;
            }
        }
    }
  
    return flag;
  }