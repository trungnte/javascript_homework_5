
const KHU_VUC_A = 2;
const KHU_VUC_B = 1;
const KHU_VUC_C = 0.5;

const DOI_TUONG_1 = 2.5;
const DOI_TUONG_2 = 1.5;
const DOI_TUONG_3 = 1;


function ketQuaTuyenSinh() {
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var doiTuong = parseInt(document.getElementById("doiTuong").value);

    var diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    var diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    var diemMon3 = parseFloat(document.getElementById("diemMon3").value);

    var khuVuc = document.getElementById("khuVuc").value;

    var ketQua = "ĐẬU";
    var diemUuTien = diemTheoKhuVuc(khuVuc) + diemTheoDoiTuong(doiTuong);
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

    if (diemMon1 === 0.0 || diemMon2 === 0.0 || diemMon3 === 0.0) {
        ketQua = "RỚT";
    } else {
        if (tongDiem < diemChuan) {
            ketQua = "RỚT";
        }
    }

    // console.log("khu vuc:" + khuVuc + " : " + diemTheoKhuVuc(khuVuc));
    // console.log("doi tuong:" + doiTuong + " : " + diemTheoDoiTuong(doiTuong));
    // console.log("tong diem: " + tongDiem + " ket qua: " + ketQua);

    document.getElementById("txtKetQua").innerHTML = "Kết quả: " + ketQua
        + " với tổng điểm: " + tongDiem;
}

function diemTheoKhuVuc(khuVuc) {
    var diem = 0;
    switch (khuVuc) {
        case "A":
            diem = KHU_VUC_A;
            break;
        case "B":
            diem = KHU_VUC_B;
            break;
        case "C":
            diem = KHU_VUC_C;
            break;
        default:
            break;
    }
    return diem;
}

function diemTheoDoiTuong(doiTuong) {
    var diem  = 0;
    switch (doiTuong) {
        case 1:
            diem = DOI_TUONG_1;
            break;
        case 2:
            diem = DOI_TUONG_2;
            break;
        case 3:
            diem = DOI_TUONG_3;
            break;
        default:
            break;
    }
    return diem;
}