'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')


// Sửa VPP
exports.EditVPP = function (req, res) {
    let sql = 'UPDATE vanphongpham SET tensp=?, image=?, mota=?, gia=?, soluong=? WHERE masp=?';
    db.query(sql, [req.body.tensp, req.body.image, req.body.mota, req.body.gia, req.body.soluong, req.params.masp], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        res.json(response);
    });
};

// Thêm GV
exports.InsertVPP = function (req, res) {
    let sql = 'INSERT INTO vanphongpham VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [req.body.masp, req.body.tensp, req.body.image, req.body.mota, req.body.gia, req.body.soluong], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json(response);
    });
};

// Sửa GV IF
exports.EditVPPIF = function (req, res) {
    let sql = 'SELECT * FROM vanphongpham WHERE masp = ?';
    db.query(sql, [req.params.masp], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (response.length === 0) {
            return res.status(404).json({ message: 'Văn phòng phẩm không tồn tại' });
        }
        res.json(response);
    });
};

// Lấy toàn bộ vpp
exports.GetAllVPP = function (req, res) {
    let sql = 'SELECT * FROM vanphongpham';
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json(response);
    });
};

// Xóa sv
exports.DeleteVPP = function (req, res) {
    let sql = 'DELETE FROM vanphongpham WHERE masp = ?';
    db.query(sql, [req.params.masp], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (response.affectedRows === 0) {
            return res.status(404).json({ message: 'Văn phòng phẩm không tồn tại' });
        }
        res.json(response);
    });
};

// Tìm kiếm Văn phòng phẩm theo tên sản phẩm và khoảng giá
exports.getVPPByinfo = function (req, res) {
    let tensp = req.body.tensp;
    let minPrice = req.body.minPrice;
    let maxPrice = req.body.maxPrice;

    let sql = 'SELECT * FROM vanphongpham WHERE 1=1';

    if (tensp) {
        sql += ' AND tensp LIKE "%' + tensp + '%"';
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        sql += ' AND gia BETWEEN ' + minPrice + ' AND ' + maxPrice;
    }

    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json(response);
    });
};


// Kiểm tra trùng gv
exports.CheckTrungVPP = function (req, res) {
    const masp = req.query.masp;

    const sql = 'SELECT masp FROM vanphongpham WHERE masp = ?';
    db.query(sql, [masp], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (rows.length > 0) {
            res.json({ message: 'Văn phòng phẩm đã tồn tại' });
        } else {
            res.json({ message: 'Văn phòng phẩm không tồn tại' });
        }
    });
};
