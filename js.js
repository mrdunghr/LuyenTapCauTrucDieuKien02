function CtoF(){
    let doC = document.getElementById('doC').value;
    let changed = doC*9/5+32;
    // document.write(changed);
    document.getElementById('resual').innerHTML = 'Độ F: ' + changed;
}

function MetToFeet(){
    let met = document.getElementById('Met').value;
    let changed = met * 3.2808
    document.getElementById('resuaMetl').innerHTML = 'Feet: ' + changed;
}

function TinhDienTichHV(){
    let CanhA = document.getElementById('canhA').value;
    let changed = Math.pow(CanhA, 2)
    // document.write(changed)
    document.getElementById('resuaS').innerHTML = 'Dện tích: ' + changed;
}

function TinhDienTichCN(){
    let CanhA = document.getElementById('canhAA').value;
    let CanhB = document.getElementById('canhBB').value;
    let changed = CanhA * CanhB;
    document.getElementById('resuaScn').innerHTML = 'Dện tích: ' + changed;
}

function TinhDienTich3giac(){
    let CanhA = document.getElementById('canhAAA').value;
    let CanhB = document.getElementById('canhBBB').value;
    if (CanhA > 0 || CanhB >0){
        changed = CanhA * CanhB / 2;
        document.getElementById('resuaS3giac').innerHTML = 'Dện tích: ' + changed;
    } else {
        document.getElementById('resuaS3giac').innerHTML = '2 Cạnh Bạn nhâp không cấu tạo lên hình 3 giác';
    }
}

function tinhPhuongTrinhBacNhat(){
    let a = document.getElementById('soA').value;
    let b = document.getElementById('soB').value;
    if (a == 0 && b == 0){
        document.getElementById('resuaPT').innerHTML = 'Phương trình vô số Nghiệm';
    } else if (a == 0 && b != 0){
        document.getElementById('resuaPT').innerHTML = 'Phương trình vô Nghiệm';
    } else if (a != 0 && b == 0){
        document.getElementById('resuaPT').innerHTML = 'Phương trình có nghiệm X = 0';
    } else {
        giai = document.getElementById('resuaPT').innerHTML = 'Phương trình có duy nhất một nghiệm là: '+ (-b/a);
    }
}

function tinhPhuongTrinhBacHai(){
    let a = parseInt(document.getElementById('soAA').value);
    let b = parseInt(document.getElementById('soBB').value);
    let c = parseInt(document.getElementById('soCC').value);
    let x1, x2;
    let delta = (b*b-4*a*c);
    if (delta == 0){
        document.getElementById('resuaPT2').innerHTML = 'Phương trình có nghiệm kép'
        x1 = -b/(2*a);
        x2 = -b/(2*a);
        document.getElementById('x1').innerHTML = 'x1: ' + x1;
        document.getElementById('x1').innerHTML = 'x2: ' + x2;
    } else if (delta < 0){
        document.getElementById('resuaPT2').innerHTML = 'Phương trình vô nghiệm'
        document.getElementById('x1').innerHTML = 'x1: ';
        document.getElementById('x2').innerHTML = 'x2: ';
    }else {
        document.getElementById('resuaPT2').innerHTML = 'Phương trình có Hai Nghiệm'
        x1=(-b-Math.sqrt(delta))/(2*a);
        x2=(-b+Math.sqrt(delta))/(2*a);
        document.getElementById('x1').innerHTML = 'x1: ' + x1;
        document.getElementById('x2').innerHTML = 'x2: ' + x2;
    }
}

function tinhtuoi(){
    let a = parseInt(document.getElementById('Tuoi').value);
    if (a < 120 && a > 0){
        document.getElementById('age').innerHTML = 'Tuổi của tôi là: ' + a;
    } else {
        document.getElementById('age').innerHTML = 'Già mà có tuổi này, không sống lâu thế à';
    }
}
function kiemtra3canhtamgiac(){
    let a = parseInt(document.getElementById('canh1').value);
    let b = parseInt(document.getElementById('canh2').value);
    let c = parseInt(document.getElementById('canh3').value);
    if (a && b && c > 0){
        if (a + b > c){
            if (b + c > a){
                if (a + c > b){
                    document.getElementById('ketqua3giac').innerHTML = '3 cạnh là hình tam giác';
                } else {
                    document.getElementById('ketqua3giac').innerHTML = '3 cạnh không phải tam giác';
                }
            }else {
                document.getElementById('ketqua3giac').innerHTML = '3 cạnh không phải tam giác';
            }
        } else {
            document.getElementById('ketqua3giac').innerHTML = '3 cạnh không phải tam giác';
        }
    }else {
        document.getElementById('ketqua3giac').innerHTML = '3 cạnh không phải tam giác';
    }
}

function tinhTienDien(){
    let soDien = parseInt(document.getElementById('soDien').value);
    let tiendien;
    let bac1 = 1678;
    let bac2 = 1734;
    let bac3 = 2014;
    let bac4 = 2536;
    let bac5 = 2834;
    let bac6 = 2927;
    if (soDien <= 0){
        document.getElementById('hienthi').innerHTML = 'Nhập lại số điện';
    } else if (soDien <= 50){
        tiendien = soDien*bac1
        document.getElementById('hienthi').innerHTML = 'mức điện bạn dùng 0-50 kWh số tiền là: ' + tiendien;
    } else if (soDien <= 100){
        tiendien = 50*bac1+((soDien-50)*bac2)
        document.getElementById('hienthi').innerHTML = 'mức điện bạn dùng 51-100 kWh số tiền là: ' + tiendien;
    } else if (soDien <= 200){
        tiendien = 50*bac1+(50*bac2)+((soDien-100)*bac3);
        document.getElementById('hienthi').innerHTML = 'mức điện bạn dùng 101-200 kWh số tiền là: ' + tiendien;
    } else if (soDien <= 300){
        tiendien = 50*bac1+(50*bac2)+(100*bac3)+((soDien-200)*bac4);
        document.getElementById('hienthi').innerHTML = 'mức điện bạn dùng 201-300 kWh số tiền là: ' + tiendien;
    } else if (soDien <= 400){
        tiendien = 50*bac1+(50*bac2)+(100*bac3)+(100*bac4)+((soDien-300)*bac5);
        document.getElementById('hienthi').innerHTML = 'mức điện bạn dùng 301-400 kWh số tiền là: ' + tiendien;
    } else if (soDien > 400){
        tiendien = 50*bac1+(50*bac2)+(100*bac3)+(100*bac4)+(100*bac5)+((soDien-400)*bac6);
        document.getElementById('hienthi').innerHTML = 'mức điện bạn dùng trên 400 kWh số tiền là: ' + tiendien;
    }
}

function thuetncn(){
    let a = parseInt(document.getElementById('thuetncn').value)
    let thue;
    let bac1 = 5000000; //5%
    let bac2 = 10000000; //10%
    let bac3 = 18000000; //15%
    let bac4 = 32000000; //20%
    let bac5 = 52000000; //25%
    let bac6 = 80000000; //30%
    if (a < bac1){
        document.getElementById('showthue').innerHTML = "Bạn không phải đóng thuế"
    } else if (a >= bac1 && a < bac2){
        thue = bac1 * 5 / 100
        document.getElementById('showthue').innerHTML = "bạn phải nộp: " +thue+" tiền thuế";
    } else if (a >= bac2 && a < bac3){
        thue = bac2 * 10 / 100
        document.getElementById('showthue').innerHTML = "bạn phải nộp: " +thue+" tiền thuế";
    } else if (a >= bac3 && a < bac4){
        thue = bac3 * 20 / 100
        document.getElementById('showthue').innerHTML = "bạn phải nộp: " +thue+" tiền thuế";
    } else if (a >= bac4 && a < bac5){
        thue = bac4 * 25 / 100
        document.getElementById('showthue').innerHTML = "bạn phải nộp: " +thue+" tiền thuế";
    }else if (a >= bac5 && a < bac6){
        thue = bac5 * 30 / 100
        document.getElementById('showthue').innerHTML = "bạn phải nộp: " +thue+" tiền thuế";
    }else
        thue = bac6 * 35 / 100
        document.getElementById('showthue').innerHTML = "bạn phải nộp: " +thue+" tiền thuế";
}

function tienlainganhang(){
    let a = parseInt(document.getElementById('tienbandau').value)
    let b = a/12
    let c = (a * 12 /100) / 12
    let d = ((a - b) * 12 /100) /12
    document.getElementById('hangthang').innerHTML = 'Số tiền gốc trả hàng tháng ' + b;
    document.getElementById('thangdau').innerHTML = 'Số tiền lãi phải trả tháng đầu ' + c;
    document.getElementById('thanghai').innerHTML = 'Số tiền lãi phải trả tháng đầu ' + d;
}