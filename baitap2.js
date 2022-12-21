
//INPUT: 
//Nhập vào 5 số thực

//Quá trình xử lý:
//B1: Tạo 5 biến chưa 5 số thực "SoThuc1", "SoThuc2",.. 
//B2: Tạo biến "Sum" để chứa giá trị tổng, và biến "Average" để chưa giá trị trung bình
//B3: gán "Sum" bằng tổng của "SoThuc1" + "SoThuc2" +...
//B4: gán "Average" = "Sum"/5
//B5: In ra màng hình Console biến Average

//OUTPUT:
//Giá trị trung bình của 5 số thực đã nhập
function bai2() {


   

    let SoThuc1 = document.getElementById('SoThuc1').value
    let SoThuc2 = document.getElementById('SoThuc2').value
    let SoThuc3 = document.getElementById('SoThuc3').value
    let SoThuc4 = document.getElementById('SoThuc4').value
    let SoThuc5 = document.getElementById('SoThuc5').value
    let Sum = Number(SoThuc1)+Number(SoThuc2)+Number(SoThuc3)+Number(SoThuc4)+Number(SoThuc5)
    let Average;
    Average = Sum/5;

    let kq2 =document.getElementById('kq2')
    kq2.innerHTML = Average;
}