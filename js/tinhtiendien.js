
const GIA_50KW_DAU = 500;
const GIA_50KW_KE = 650;
const GIA_100KW_KE = 850;
const GIA_150KW_KE = 1100;
const GIA_CON_LAI = 1300;

function ketQuaTienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var soDien = parseInt(document.getElementById("soDien").value);
    var tienDien = 0;

    if (soDien <= 50) {
        tienDien = tinhTienDienTheoDinhMuc(soDien, GIA_50KW_DAU);
    } else if (soDien <= 100) {
        tienDien = tinhTienDienTheoDinhMuc(50, GIA_50KW_DAU);
        tienDien += tinhTienDienTheoDinhMuc(soDien - 50, GIA_50KW_KE);
    } else if (soDien <= 200) {
        tienDien = tinhTienDienTheoDinhMuc(50, GIA_50KW_DAU);
        tienDien += tinhTienDienTheoDinhMuc(50, GIA_50KW_KE);
        tienDien += tinhTienDienTheoDinhMuc(soDien - 100, GIA_100KW_KE);
    } else if (soDien <= 350) {
        tienDien = tinhTienDienTheoDinhMuc(50, GIA_50KW_DAU);
        tienDien += tinhTienDienTheoDinhMuc(50, GIA_50KW_KE);
        tienDien += tinhTienDienTheoDinhMuc(100, GIA_100KW_KE);
        tienDien += tinhTienDienTheoDinhMuc(soDien - 200, GIA_150KW_KE);
    } else if (soDien > 350) {
        tienDien = tinhTienDienTheoDinhMuc(50, GIA_50KW_DAU);
        tienDien += tinhTienDienTheoDinhMuc(50, GIA_50KW_KE);
        tienDien += tinhTienDienTheoDinhMuc(100, GIA_100KW_KE);
        tienDien += tinhTienDienTheoDinhMuc(200, GIA_150KW_KE);
        tienDien += tinhTienDienTheoDinhMuc(soDien - 350, GIA_CON_LAI);
    } else {
        alert("Số điện không hợp lệ!");
    }

    document.getElementById("txtTienDien").innerHTML = "Khách hàng: " + hoTen
        + ", tiền điện: " + tienDien;
}


function tinhTienDienTheoDinhMuc(soKw, gia) {
    var tien = soKw * gia;
    console.log("SoKw: " + soKw + ", gia: " + gia + ", tien: " + tien);
    return tien;
}