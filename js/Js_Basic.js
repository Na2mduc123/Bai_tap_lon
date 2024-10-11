
var nhap_vao = function()
{
    var so_thu_nhat = document.getElementById("input").value;
    var so_thu_hai = document.getElementById("input2").value;
    if(so_thu_nhat === so_thu_hai)
    {
        alert("Hai số bằng nhau! ")
    }
    else if(so_thu_nhat > so_thu_hai)
    {
        alert("Số thứ nhất lớn hơn số thứ 2! ")
    }
    else if(so_thu_nhat < so_thu_hai)
    {
        alert("Số thứ nhất nhỏ hơn số thứ 2! ")
    }
}
var thong_bao = function()
{
    document.getElementById("loi_nhac").innerHTML = "Vui lòng nhập số! ";
    document.getElementById("loi_nhac").innerHTML += "Nhanh lên! ";
}
setTimeout(thong_bao, 3000)

/*
// Toán tử
var a = 8;
var b = 3;
var c = a+b;
var d = a-b;
var e = a*b;
var f = a/b;
var g = a**b //Lũy thừa
var h = a%b //Chia lấy số dư
a++; //Tăng lên 1 đơn vị
b--; //Giảm đi 1 đơn vị
console.log(a);
console.log(b);
console.log(g)
console.log(h)
*/


// Tiền tố 
// Việc 1: +1 cho a, a = a+1 = 6
// Việc 2: Trả về a sau khi được +1
var a = 5;
console.log(--a)

// Hậu tố
// Việc 1: b copy, b copy = 8
// Việc 2: +1 cho b, b = b+1 suy ra b = 8
// Việc 3: trả về b copy
var b = 5
var output = b++;
console.log("output: ", output)

// Toán tử gán
var x = 1, x1 = 1, x2 = 1, x3 = 1, x4 = 1, x5 = 3;
x1 += 2; // x = x+2
x2 -= 2; // x = x-2
x3 *= 2; // x = x*2
x4 /= 2; // x = x/2
x5 **= 2; // x = x**2
console.log("Toán tử gán: ",x5);

// Toán tử chuỗi
var ten = "Tú";
ten += " Nam"
console.log("Toán tử chuỗi: ", ten)

// Toán tử so sánh
var c = 2;
var d = 2;
if(c >= d)
{
    console.log("Điều kiện đúng! ")
}
else
{
    console.log("Điều kiện sai! ")
}

var c1 = "Vũ Tú Nam";
var d1 = "Vũ Tú nam";
if(c1 == d1)
{
    console.log(" Chuỗi này có Điều kiện đúng! ")
}
else
{
    console.log(" Chuỗi này có Điều kiện sai! ")
}

// Kiểu dữ liệu Bolean
var thanh_cong = c > d;
console.log(thanh_cong);

// Kiểu dữ liệu Number
var v1 = 1;
var v2 = 1.6;

// Kiểu dữ liệu String
var fullName = "Vũ Tú Nam";

// Kiểu dữ liệu Boolean
var isSuccess = true;

// Kiểu dữ liệu Undefine
var tuoi; // Không gán giá trị cho biến

// Kiểu dữ liệu Null
var isNull = null // Không có gì

// Kiểu Symbol
var id = Symbol("id"); // Có tính duy nhất
var id2 = Symbol("id") // Có tính duy nhất
console.log(id == id2) // Không khả thi vì là duy nhất

// Kiểu dữ liệu phức tạp 
// Kiểu function
var MyFunction = function()
{
    alert("Hello World! ");
}


// Kiểu Object
var MyObject = {
    ten: "Tú Nam",
    tuoi: 21,
    dia_chi: "Hà Nam",
    MyFunction: function(){
    }

};
console.log("MyObject", MyObject);

var myArray = 
[
    "Javascript",
    "PHP",
    "Python",
    "C++"
];
console.log(myArray)

// Cách iểm tra kiểu dữ liệu của biến: 
// Sử dụng keyword: typeof + tên biến
// console.log(typeof + tên biến)
console.log("Kiểu dữ liệu là: ", typeof isSuccess)