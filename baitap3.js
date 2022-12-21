
//INPUT:
//Số tiền mệnh giá USD

//Quá trình xử lý:
//B1: tạo biến "SoTienUSD", "SoTienVND"; tạo hằng số quy đổi "TyGia" = 23000
//B2: Nhập giá trị cho biến "SoTienUSD"
//B3: Gán biến "SoTienVND" = "SoTienUSD" * "TyGia"
//B4: In ra màn hình console "SoTienVND"

//OUTPUT:
//Số tiền mệnh giá VND

const TyGia = 23500;



function bai3() {
    let SoTienUSD = document.getElementById('SoTienUSD').value;
    let SoTienVND = 0;
    SoTienVND = TyGia * SoTienUSD;
  document.getElementById('kq3').value =SoTienVND;

}





