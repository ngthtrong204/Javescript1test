console.log("       Bài tập 2");

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

    let SoThuc1 = 19;
    console.log("Số thực 1:", SoThuc1);
    let SoThuc2 = 29;
    console.log("Số thực 2:", SoThuc2);
    let SoThuc3 = 190;
    console.log("Số thực 3:", SoThuc3);
    let SoThuc4 = -129;
    console.log("Số thực 4:", SoThuc4);
    let SoThuc5 = .5;
    console.log("Số thực 5:", SoThuc5);

    let Sum;
    let Average;

    Sum = SoThuc1+SoThuc2+SoThuc3+SoThuc4+SoThuc5;
    Average = Sum/5;
    console.log("Giá trị trung bình của 5 số thực là: ", Average);

console.log("");
