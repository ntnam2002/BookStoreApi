'use strict';

const util = require('util');
const mysql = require('mysql');
const db = require('../db');

// Sửa dondathang với cập nhật tự động tongtien khi soluong thay đổi
exports.Editdondathang = function (req, res) {
    // Lấy giá của sản phẩm từ bảng sách
    let getProductPriceSQL = 'SELECT gia FROM sach WHERE masp = ?';
    db.query(getProductPriceSQL, [req.body.masp], (err, productInfo) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Kiểm tra xem sách có tồn tại không
        if (!productInfo || productInfo.length === 0) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }

        // Tính tổng tiền dựa trên giá mới và số lượng mới của sách
        const newTotalAmount = req.body.soluong * productInfo[0].gia;

        // Sửa đơn đặt hàng trong cơ sở dữ liệu với cập nhật tự động tongtien
        let updateOrderSQL = 'UPDATE dondathang SET makh=?, masp=?, soluong=?, tongtien=? WHERE madh=?';
        db.query(
            updateOrderSQL,
            [req.body.makh, req.body.masp, req.body.soluong, newTotalAmount, req.params.madh],
            (err, response) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Internal Server Error' });
                }

                res.json(response);
            }
        );
    });
};


// Thêm dondathang
exports.Insertdondathang = function (req, res) {
    // Lấy giá và thông tin khác của sách từ bảng sách
    let getProductInfoSQL = 'SELECT gia FROM sach WHERE masp = ?';
    db.query(getProductInfoSQL, [req.body.masp], (err, productInfo) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Kiểm tra xem sách có tồn tại không
        if (!productInfo || productInfo.length === 0) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }

        // Tính tổng tiền dựa trên giá và số lượng của sách
        const totalAmount = req.body.soluong * productInfo[0].gia;

        // Thêm đơn đặt hàng vào cơ sở dữ liệu với tổng tiền đã tính
        let insertOrderSQL = 'INSERT INTO dondathang VALUES (?, ?, ?, ?, ?)';
        db.query(
            insertOrderSQL,
            [req.body.madh, req.body.makh, req.body.masp, req.body.soluong, totalAmount],
            (err, response) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Internal Server Error' });
                }

                res.json(response);
            }
        );
    });
};


// Sửa dondathang IF
exports.EditdondathangIF = function (req, res) {
    let sql = 'SELECT * FROM dondathang WHERE madh = ?';
    db.query(sql, [req.params.madh], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (response.length === 0) {
            return res.status(404).json({ message: 'tài khoản không tồn tại' });
        }
        res.json(response);
    });
};

// Lấy toàn bộ dondathang
exports.GetAlldondathang = function (req, res) {
    let sql = 'SELECT * FROM dondathang';
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json(response);
    });
};

// Xóa dondathang
exports.Deletedondathang = function (req, res) {
    let sql = 'DELETE FROM dondathang WHERE madh = ?';
    db.query(sql, [req.params.madh], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (response.affectedRows === 0) {
            return res.status(404).json({ message: 'Tài khoản không tồn tại' });
        }
        res.json(response);
    });
};

// Tìm kiếm dơn đạt hàng theo tên và khoảng tổng tiền
exports.getdondathangByinfo = function (req, res) {
    let madh = req.body.madh;
    let makh = req.body.makh;
    let masp = req.body.masp;
    let minPrice = req.body.minPrice;
    let maxPrice = req.body.maxPrice;

    let sql = 'SELECT * FROM dondathang WHERE 1=1';

    if (madh) {
        sql += ' AND madh LIKE "%' + madh + '%"';
    }

    if (makh) {
        sql += ' AND makh LIKE "%' + makh + '%"';
    }

    if (masp) {
        sql += ' AND masp LIKE "%' + masp + '%"';
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        sql += ' AND tongtien BETWEEN ' + minPrice + ' AND ' + maxPrice;
    }

    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json(response);
    });
};

// Kiểm tra trùng dondathang
exports.CheckTrungdondathang = function (req, res) {
    const madh = req.query.madh;

    const sql = 'SELECT madh FROM dondathang WHERE madh = ?';
    db.query(sql, [madh], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (rows.length > 0) {
            res.json({ message: 'Tài khoản đã tồn tại' });
        } else {
            res.json({ message: 'Tài khoản không tồn tại' });
        }
    });
};
