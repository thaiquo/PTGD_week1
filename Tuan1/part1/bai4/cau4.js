function tinhTienTip(hoaDon) {
    // Tính tiền tip bằng toán tử ternary
    const tienTip = hoaDon >= 50 && hoaDon <= 300 ? hoaDon * 0.15 : hoaDon * 0.2;

    // Tổng giá trị (hóa đơn + tiền tip)
    const tongGiaTri = hoaDon + tienTip;

    // In kết quả ra màn hình
    console.log(
        `Hóa đơn là ${hoaDon}, tiền tip là ${tienTip.toFixed(
            2
        )}, và tổng giá trị là ${tongGiaTri.toFixed(2)}`
    );
}

// Test dữ liệu
tinhTienTip(275); // Hóa đơn là 275, tiền tip là 41.25, và tổng giá trị là 316.25
tinhTienTip(40);  // Hóa đơn là 40, tiền tip là 8.00, và tổng giá trị là 48.00
tinhTienTip(430); // Hóa đơn là 430, tiền tip là 86.00, và tổng giá trị là 516.00
