"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

// API - Login
exports.Login = function (req, res) {
    try {
        let username = req.body.username;
        let password = req.body.password;

        let sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
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

// Sửa Admin
exports.EditAdmin = function (req, res) {
    let sql = "UPDATE admin SET hoten=?, username=?, password=?  WHERE id=?";
    db.query(
        sql,
        [req.body.hoten, req.body.username, req.body.password, req.params.id],
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

// Thêm Admin
exports.InsertAdmin = function (req, res) {
    let sql = "INSERT INTO admin VALUES (NULL, ?, ?, ?)";
    db.query(
        sql,
        [req.body.hoten, req.body.username, req.body.password],
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

// Sửa Admin IF
exports.EditAdminIF = function (req, res) {
    let sql = "SELECT * FROM admin WHERE id = ?";
    db.query(sql, [req.params.id], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (response.length === 0) {
            return res.status(404).json({ message: "tài khoản không tồn tại" });
        }
        res.json(response);
    });
};

// Lấy toàn bộ Admin
exports.GetAllAdmin = function (req, res) {
    let sql = "SELECT * FROM admin";
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.json(response);
    });
};

// Xóa Admin
exports.DeleteAdmin = function (req, res) {
    let sql = "DELETE FROM admin WHERE id = ?";
    db.query(sql, [req.params.id], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (response.affectedRows === 0) {
            return res.status(404).json({ message: "Tài khoản không tồn tại" });
        }
        res.json(response);
    });
};

// Tìm kiếm Admin
exports.getAdminByinfo = function (req, res) {
    let username = req.body.username;
    let id = req.body.id;
    let hoten = req.body.hoten;

    let sql = "SELECT * FROM admin where 1";

    if (username) {
        sql += ' AND username LIKE "%' + username + '%"';
    }
    if (id) {
        sql += ' AND id LIKE "%' + id + '%"';
    }
    if (hoten) {
        sql += ' AND hoten LIKE "%' + hoten + '%"';
    }

    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.json(response);
    });
};

// Kiểm tra trùng Admin
exports.CheckTrungAdmin = function (req, res) {
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
