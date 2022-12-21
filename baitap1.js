

    //INPUT:
    //Số ngày làm của nhận nhận viên

    //Quá trình xử lý:
        //B1: Tạo biến số ngày nhận "SoNgayLamViec" và biến "TongLuong" , tạo hằng số lương 1 ngày "LuongMotNgay" = 100000
        //B2: Nhập số ngày làm việc của nhận viên, gán vào biếng "SoNgayLamViec"
        //B3: Gán giá trị "TongLuong" = "SoNgayLamViec" * "LuongMotNgay"
        //B4: In kết quả console biến "TongLuong"
        
    //OUTPUT:
    //Số tiền lương của nhân viên

function bai1(){
    let LuongMotNgay = document.getElementById('LuongMotNgay');
    let SoNgayLamViec = document.getElementById('SoNgayLamViec')

    let TongLuong;
    TongLuong = LuongMotNgay.value*SoNgayLamViec.value

    let kq1 = document.getElementById('kq1')
    kq1.innerHTML=TongLuong +" (ngàn đồng)";
}


