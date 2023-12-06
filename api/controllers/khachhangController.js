"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

// API - Login
exports.LoginKH = function (req, res) {
    try {
        let username = req.body.username;
        let password = req.body.password;

        let sql = "SELECT * FROM khachhang WHERE username = ? AND password = ?";
        db.query(sql, [username, password], (err, response) => {
            if (err) {
                console.error(err);
                return res
                    .status(500)
                    .json({ message: "Internal Server Error" });
            }

            if (response.length === 0) {
                return res
                    .status(401)
                    .json({ message: "Tài khoản không tồn tại" });
            }

            res.json({ message: "Login thành công" });
        });
    } catch (error) {
        throw error;
    }
};

// Sửa thông tin Khách hàng
exports.EditKH = function (req, res) {
    let sql =
        "UPDATE khachhang SET hoten=?, username=?, password=?, sdt=?, email=?, diachi=? WHERE makh=?";
    db.query(
        sql,
        [
            req.body.hoten,
            req.body.username,
            req.body.password,
            req.body.sdt,
            req.body.email,
            req.body.diachi,
            req.params.makh,
        ],
        (err, response) => {
            if (err) {
                console.error(err);
                return res
                    .status(500)
                    .json({ message: "Internal Server Error" });
            }

            res.json(response);
        },
    );
};

// Đăng ký tài khoản khách hàng (Khi khách hàng đăng ký tài khoản)
exports.InsertTKKH = function (req, res) {
    let sql = "INSERT INTO khachhang VALUES (?, ?, ?)";
    db.query(
        sql,
        [req.body.makh, req.body.username, req.body.password],
        (err, response) => {
            if (err) {
                console.error(err);
                return res
                    .status(500)
                    .json({ message: "Internal Server Error" });
            }

            res.json(response);
        },
    );
};

// Thêm Khách hàng ( Khi khách hàng nhập thông tin )
exports.InsertKH = function (req, res) {
    let sql = "INSERT INTO khachhang VALUES (NULL, ?, ?, ?, ?, ?, ?)";
    db.query(
        sql,
        [
            req.body.hoten,
            req.body.username,
            req.body.password,
            req.body.sdt,
            req.body.email,
            req.body.diachi,
        ],
        (err, response) => {
            if (err) {
                console.error(err);
                return res
                    .status(500)
                    .json({ message: "Internal Server Error" });
            }

            res.json(response);
        },
    );
};

// Sửa khách hàng IF
exports.EditKHIF = function (req, res) {
    let sql = "SELECT * FROM khachhang WHERE makh = ?";
    db.query(sql, [req.params.makh], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (response.length === 0) {
            return res
                .status(404)
                .json({ message: "Khách hàng không tồn tại" });
        }
        res.json(response);
    });
};

// Lấy toàn bộ KH
exports.GetAllKH = function (req, res) {
    let sql = "SELECT * FROM khachhang";
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.json(response);
    });
};

// Xóa khach hàng
exports.DeleteKH = function (req, res) {
    let sql = "DELETE FROM khachhang WHERE makh = ?";
    db.query(sql, [req.params.makh], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (response.affectedRows === 0) {
            return res
                .status(404)
                .json({ message: "Khách hàng không tồn tại" });
        }
        res.json(response);
    });
};

// Tìm kiếm khách hàng
exports.getKHByinfo = function (req, res) {
    let makh = req.body.makh;
    let hoten = req.body.hoten;
    let username = req.body.username;

    let sql = "SELECT * FROM khachhang WHERE 1=1";

    if (makh) {
        sql += ' AND makh LIKE "%' + makh + '%"';
    }
    if (hoten) {
        sql += ' AND hoten LIKE "%' + hoten + '%"';
    }
    if (username) {
        sql += ' AND username LIKE "%' + username + '%"';
    }   
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.json(response);
    });
};

// Kiểm tra trùng khach
exports.CheckTrungKH = function (req, res) {
    const username = req.query.username;

    const sql = "SELECT username FROM admin WHERE username = ?";
    db.query(sql, [username], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        if (rows.length > 0) {
            res.json({ message: "Tài khoản đã tồn tại" });
        } else {
            res.json({ message: "Tài khoản không tồn tại" });
        }
    });
};
