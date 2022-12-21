//INPUT:
//Nhập vào chiều dài và chiều rộng của một hình chữ nhật

//Quy trình xử lý:
//B1: tạo các biến "ChieuDai", "ChieuRong", "ChuVi", "DienTich"
//B2: nhập giá trị chu hai biến "ChieuDai" và "ChieuRong"
//B3: gán giá trị theo công thức toán học
//ChuVi = (ChieuDai + ChieuRong)*2
//DienTich = ChieuDai*ChieuRong
//B4: in ra màn hình console kết quả của ChuVi và DienTich

//OUTPUT:
//Xuât ra độ lớn diện tích và chu vi của hình chữ nhật đó



function bai4() {
    let ChieuDai = document.getElementById('ChieuDai').value
    let ChieuRong = document.getElementById('ChieuRong').value

    let ChuVi;
    ChuVi = (Number(ChieuDai) + Number(ChieuRong)) * 2;
    let kq41 = document.getElementById('kq41')
    kq41.innerHTML = ChuVi;

    let DienTich;
    DienTich = Number(ChieuDai) * Number(ChieuRong);
    let kq42 = document.getElementById('kq42')
    kq42.innerHTML = DienTich;

}
