// console.log("       Bài tập 5");

    //INPUT:
    //Nhập vào một số thực có hai chữ số

    //Quá trình xử lý

        //*C1:
            //B1: tạo các biến "SoThuc", "HangChuc", "HangDonVi", "Tong"
            //B2: Nhập giá trị số thực có hai chữ số cho biến "SoThuc"
            //B3: 
                //Gán "HangDonVi" bằng số ở hàng đơn vị bằng cách lấy số "SoThuc" % 10
                //Sau đó đưa "SoThuc" về số có một chữ số ở hàng chục bằng cách "SoThuc"/10 và làm tròn xuống bằng hàm Math.floor
                //Gán "HangChuc" = "SoThuc" (sau khi đã làm tròn)
                //Gán "Tong" = "HangChuc" +"HangDonVi"

        //C2:
            //B1: tạo các biến  "Tong", "SoThuc"
            //B2: nhập gái trị số thực có hai chữ số cho biến "SoThuc"
            //B3: 
                //-Lấy giá trị hàng đơn vị: "Tong"="Sothuc"%10
                //-Lấy giá trị hàng chục: "Tong"+=FLoor ("SoThuc"/10)
            //B4; in ra màn hình console giá trị của biến tổng

    //OUTPUT:
    //Xuất ra giá trị tổng của hai chữ số trong số thực đó



    //C1:
// let HangChuc;
// let HangDonVi;
// let Tong;
// let SoThuc = 49;
// console.log("Số thực có hai chữ số là: ",SoThuc)
// HangDonVi=SoThuc%10;
// SoThuc=Math.floor(SoThuc/10)
// HangChuc=SoThuc;
// Tong = HangChuc+HangDonVi;
// console.log("Giá trị tổng hai chữ số của số thực trên là: ",Tong)



    
    //C2:
let Tong;
let SoThuc = 25;
console.log("Số thực có hai chữ số là: ",SoThuc)
Tong=SoThuc%10;
Tong+=Math.floor(SoThuc/10);
console.log("Giá trị tổng hai chữ số của số thực trên là: ",Tong)






console.log("");

