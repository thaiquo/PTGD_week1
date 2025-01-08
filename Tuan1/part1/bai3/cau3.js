function tinhDiemTrungBinh(scores) {
    return scores.reduce((tong, diem) => tong + diem, 0) / scores.length;
}

function xacDinhNguoiThang(diemDolphins, diemKoalas) {
    // Tính điểm trung bình
    const diemTB_Dolphins = tinhDiemTrungBinh(diemDolphins);
    const diemTB_Koalas = tinhDiemTrungBinh(diemKoalas);

    console.log(`Điểm trung bình của Dolphins: ${diemTB_Dolphins}`);
    console.log(`Điểm trung bình của Koalas: ${diemTB_Koalas}`);

    // Điều kiện điểm tối thiểu
    const diemToiThieu = 100;

    // So sánh để xác định đội chiến thắng
    if (diemTB_Dolphins >= diemToiThieu && diemTB_Dolphins > diemTB_Koalas) {
        console.log("Dolphins giành cúp!");
    } else if (diemTB_Koalas >= diemToiThieu && diemTB_Koalas > diemTB_Dolphins) {
        console.log("Koalas giành cúp!");
    } else if (
        diemTB_Dolphins >= diemToiThieu &&
        diemTB_Koalas >= diemToiThieu &&
        diemTB_Dolphins === diemTB_Koalas
    ) {
        console.log("Hòa! Cả hai đội đều giành được cúp!");
    } else {
        console.log("Không đội nào giành được cúp.");
    }
}

// Test dữ liệu 1
console.log("Dữ liệu kiểm tra 1:");
xacDinhNguoiThang([96, 108, 89], [88, 91, 110]);

// Test dữ liệu Bonus 1
console.log("\nDữ liệu Bonus 1:");
xacDinhNguoiThang([97, 112, 101], [109, 95, 123]);

// Test dữ liệu Bonus 2
console.log("\nDữ liệu Bonus 2:");
xacDinhNguoiThang([97, 112, 101], [109, 95, 106]);
