// Bài tập tổng hợp ôn với mảng 

var arrSoN = [];

// Đầu tiên dom tới nút thêm só N và xử lý các hành động thêm dữ liệu vào mảng 

function themSoNVaoMang(){
        var soN = document.getElementById("txt-soN").value * 1;
        arrSoN.push(soN);
        console.log(arrSoN);
    document.querySelector(".render_arr").innerHTML = "👉" + arrSoN;
}

document.querySelector(".btn-success").onclick = themSoNVaoMang;


//Câu 1: Tổng số dương
function tinhTongSoDuong(){
    tong = 0;
    for (var i = 0; i < arrSoN.length; i++){
        if(arrSoN[i] > 0) {
            tong += arrSoN[i];
        }
    }
    console.log(tong);
    document.getElementById("kq1").innerHTML = "👉Tổng số dương: " + tong;
}

document.getElementById("btn1").onclick = tinhTongSoDuong;


//Câu 2: Đếm số dương
function demSoDuong(){
    var count = 0;
    for(var i=0; i<arrSoN.length; i++) {
        if(arrSoN[i] > 0) {
            count++;
        }
    }
    console.log(count);
    document.getElementById("kq2").innerHTML = "👉Số dương: " + count;
}

document.getElementById("btn2").onclick = demSoDuong;


// Câu 3: Tìm số nhỏ nhất
function timSoNhoNhat(){
    var min = arrSoN[0];
    for(var i=1; i<arrSoN.length; i++) {
        if(arrSoN[i] < min) {
            min = arrSoN[i];
        }
    }
    console.log(min);
    document.getElementById("kq3").innerHTML = "👉Số nhỏ nhất: " + min;
}
document.getElementById("btn3").onclick = timSoNhoNhat;

// Câu 4: Tìm số dương nhỏ nhất

function timSoDuongNhoNhat(){
    var soDuongNN = [];
    for(var i = 0; i <arrSoN.length; i++) {
        if(arrSoN[i] > 0) {
            soDuongNN[i] = arrSoN[i];
        }
    }
    console.log(soDuongNN);

    var soDuongNhoNhat = soDuongNN[0];
    for(var i = 1; i < soDuongNN.length; i++) {
        if( soDuongNN[i] < soDuongNhoNhat) {
            soDuongNhoNhat = soDuongNN[i];
        } 
    }
    console.log(soDuongNhoNhat);
    document.getElementById("kq4").innerHTML = "👉Số dương nhỏ nhất: " + soDuongNhoNhat;
}
document.getElementById("btn4").onclick = timSoDuongNhoNhat;



// Câu 5: Tìm số chẵn cuối cùng

function timSoChanCuoiCung(){
    var soChan = -1;
    for (var i = arrSoN.length -1; i>= 0 ; i--) {
        if(arrSoN[i]%2 ==0){
            soChan =arrSoN[i];
            break;
        }
    }
    console.log(soChan);
    document.getElementById("kq5").innerHTML = "👉Số chẵn cuối cùng: " + soChan;
}
document.getElementById("btn5").onclick = timSoChanCuoiCung;


// Câu 6: Đổi chỗ
function doiCho() {
    var soViTri1 = document.getElementById("soViTri1").value;
    var soViTri2 = document.getElementById("soViTri2").value;
    var arrSoNCopy = [];
    for (var i = 0; i < arrSoN.length; i++) {
        arrSoNCopy[i] = arrSoN[i];
    }
    var temp = 0;
    temp = arrSoNCopy[soViTri1];
    arrSoNCopy[soViTri1] = arrSoNCopy[soViTri2];
    arrSoNCopy[soViTri2] = temp;

    document.getElementById("kq6").innerHTML ="👉Mảng sau khi đổi: " + arrSoNCopy;
}
document.getElementById("btn6").onclick = doiCho;


// Câu 7: Sắp xếp tăng dần
function tangDan() {
    var arrSoNCopy = [];
    for (var i = 0; i < arrSoN.length; i++) {
        arrSoNCopy[i] = arrSoN[i];
    }
    var temp = 0;
    for (let i = 0; i < arrSoNCopy.length - 1; i++) {
        for (let j = 0; j < arrSoNCopy.length - 1 - i; j++) {
            if (arrSoNCopy[j] > arrSoNCopy[j + 1]) {
                temp = arrSoNCopy[j];
                arrSoNCopy[j] = arrSoNCopy[j + 1];
                arrSoNCopy[j + 1] = temp;
            }
        }
    }
    document.getElementById("kq7").innerHTML = "👉Mảng sau khi sắp xếp: " + arrSoNCopy;
}
document.getElementById("btn7").onclick = tangDan;

// Câu 8: Tìm số nguyên tố đầu tiên
function soNguyenTo() {
    var soNT = -1;
    for (var i = 0; i < arrSoN.length; i++) {
        if (kiemTra(arrSoN[i])) {
            soNT = arrSoN[i];
            break;
        }
    }
    if (soNT == -1) {
        document.getElementById("kq8").innerHTML = "Không có số nguyên tố nào tồn tại";
    } else {
        document.getElementById("kq8").innerHTML = "👉 Số nguyên tố đầu tiên: " + soNT;
    }
}
document.getElementById("btn8").onclick = soNguyenTo;

function kiemTra(n) {
    if(n === 1 || n <=0) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
// Câu 9: Đếm số nguyên
var numListB9 = [];
function themSoB9() {
    var num = document.getElementById("inputThemSo").value;
    if(num == '') {
        num = 0;
    } 
    numListB9.push(Number(num));

    document.getElementById("ketQuaThemSo").innerHTML = "👉 " + numListB9.toString();
}
document.getElementById("btnThemSo").onclick = themSoB9;

//B2: Đếm số nguyên trong dãy số thực
function demSoNguyen() {
    if (numListB9.length == '') {
        return document.getElementById("kq9").innerHTML = "Mảng rỗng";
    }

    // Đếm số nguyên
    var count = 0;
    for (let i = 0; i < numListB9.length; i++) {
        if (Number.isInteger(numListB9[i])) {
            count++;
        }
    }
    document.getElementById("kq9").innerHTML = "Số nguyên: " + count;
}
document.getElementById("btn9").onclick = demSoNguyen;


// Câu 10: So sánh số lượng số âm và dương
function soSanhAmDuong() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            soDuong++;
        } else if (arrSoN[i] < 0){
            soAm++;
        }
    }
    
    if (soAm == soDuong) {
        document.getElementById("kq10").innerHTML = "👉Số âm = Số dương";
    } else if (soAm > soDuong) {
        document.getElementById("kq10").innerHTML = "👉Số âm > Số dương";
    } else {
        document.getElementById("kq10").innerHTML = "👉Số dương > Số âm";
    }   
    
}
document.getElementById("btn10").onclick = soSanhAmDuong;