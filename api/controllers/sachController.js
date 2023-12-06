"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

// Sửa Sach
exports.EditSach = function (req, res) {
    let sql =
        "UPDATE sach SET tensach=?, theloai=?, tacgia=?, image=?, mota=?, gia=?, soluong=? WHERE masp=?";
    db.query(
        sql,
        [
            req.body.tensach,
            req.body.theloai,
            req.body.tacgia,
            req.body.image,
            req.body.mota,
            req.body.gia,
            req.body.soluong,
            req.params.masp,
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

// Thêm Sach
exports.InsertSach = function (req, res) {
    let sql = "INSERT INTO sach VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
        sql,
        [
            // req.body.masp,
            req.body.tensach,
            req.body.theloai,
            req.body.tacgia,
            req.body.image,
            req.body.mota,
            req.body.gia,
            req.body.soluong,
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

// Sửa Sach IF
exports.EditSachIF = function (req, res) {
    let sql = "SELECT * FROM sach WHERE masp = ?";
    db.query(sql, [req.params.masp], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (response.length === 0) {
            return res.status(404).json({ message: "Sách không tồn tại" });
        }
        res.json(response);
    });
};

// Lấy toàn bộ Sach
exports.GetAllSach = function (req, res) {
    let sql = "SELECT * FROM sach";
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.json(response);
    });
};

// Lấy toàn bộ Sách với hỗ trợ phân trang
exports.PhanTrangSach = function (req, res) {
    const start = parseInt(req.query.start) || 0;
    const length = parseInt(req.query.length) || 10;
    const sql = "SELECT * FROM sach LIMIT " + length + " OFFSET " + start;
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(404).json({ message: "Lỗi Server" });
        }
        res.json(response);
    });
};

// Xóa sv
exports.DeleteSach = function (req, res) {
    let sql = "DELETE FROM sach WHERE masp = ?";
    db.query(sql, [req.params.masp], (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (response.affectedRows === 0) {
            return res.status(404).json({ message: "Sách không tồn tại" });
        }
        res.json(response);
    });
};

// Tìm kiếm Sách theo tên sách và khoảng giá
exports.getSachByinfo = function (req, res) {
    const { masp, tensach, tacgia, theloai, minPrice, maxPrice } = req.body;

    let sql = "SELECT * FROM sach WHERE 1=1";

    if (tensach) {
        sql += ' AND tensach LIKE "%' + tensach + '%"';
    }
    if (masp) {
        sql += ' AND masp LIKE "%' + masp + '%"';
    }

    if (tacgia) {
        sql += ' AND tacgia LIKE "%' + tacgia + '%"';
    }

    if (theloai && theloai.length > 0) {
        const genresCondition = theloai.map((genre) => `"${genre}"`).join(",");
        sql += ` AND theloai IN (${genresCondition})`;
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        sql +=
            " AND gia BETWEEN " +
            (minPrice ? minPrice : 0) +
            " AND " +
            (maxPrice ? maxPrice : 9999999);
    }

    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Lỗi Nội Server" });
        }
        res.json(response);
    });
};

// Kiểm tra trùng Sach
exports.CheckTrungSach = function (req, res) {
    const tensach = req.query.tensach;

    const sql = "SELECT tensach FROM sach WHERE tensach = ?";
    db.query(sql, [tensach], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        if (rows.length > 0) {
            res.json({ message: "Sách đã tồn tại" });
        } else {
            res.json({ message: "Sách không tồn tại" });
        }
    });
};

// Lấy toàn bộ thể loại Sach
exports.GetAllTheLoai = function (req, res) {
    let sql = "SELECT DISTINCT theloai FROM sach";
    db.query(sql, (err, response) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.json(response);
    });
};
