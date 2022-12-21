//INPUT:
//Nhập vào một số thực có hai chữ số

//Quá trình xử lý

//B1: tạo các biến  "Tong", "SoThuc"
//B2: nhập gái trị số thực có hai chữ số cho biến "SoThuc"
//B3: 
//-Lấy giá trị hàng đơn vị: "Tong"="Sothuc"%10
//-Lấy giá trị hàng chục: "Tong"+=FLoor ("SoThuc"/10)
//B4; in ra màn hình console giá trị của biến tổng

//OUTPUT:
//Xuất ra giá trị tổng của hai chữ số trong số thực đó



function bai5(){
    let SoHang = document.getElementById('SoHang').value;
    let Tong = SoHang%10;
    Tong += Math.floor(SoHang/10);

    let kq5 = document.getElementById('kq5');
    kq5.innerHTML = Tong;


}

let Tong;
let SoThuc = 25;
console.log("Số thực có hai chữ số là: ", SoThuc)
Tong = SoThuc % 10;
Tong += Math.floor(SoThuc / 10);
console.log("Giá trị tổng hai chữ số của số thực trên là: ", Tong)







