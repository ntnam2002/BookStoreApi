"use strict";
module.exports = function (app) {
    let vanphongphamController = require("./controllers/vanphongphamController");
    let adminController = require("./controllers/adminController");
    let sachController = require("./controllers/sachController");
    let dondathangController = require("./controllers/dondathangController");
    let khachhangController = require("./controllers/khachhangController");

    app.route("/dondathang").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.GetAlldondathang);
    app.route("/dondathang/EditIF/:madh").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.EditdondathangIF);
    app.route("/dondathang/Insert").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.Insertdondathang);
    app.route("/dondathang/Edit/:madh").put(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.Editdondathang);
    app.route("/dondathang/Delete/:madh").delete(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "DELETE");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.Deletedondathang);
    app.route("/dondathang/Search").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.getdondathangByinfo);
    app.route("/dondathang/Check").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.CheckTrungdondathang);
    app.route("/dondathangWithkhachhang").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, dondathangController.GetAlldondathangWithCustomerInfo);

    // sách
    app.route("/sach").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.GetAllSach);
    app.route("/sach/theloai").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.GetAllTheLoai);
    app.route("/sach").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.PhanTrangSach);
    //http://localhost:3001/sach/3 đưa ra số sách ở trang số 3 giới hạn 2 quyển 1 trang
    app.route("/sach/EditIF/:masp").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.EditSachIF);
    app.route("/sach/Insert").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.InsertSach);
    app.route("/sach/Edit/:masp").put(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.EditSach);
    app.route("/sach/Delete/:masp").delete(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "DELETE");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.DeleteSach);
    app.route("/sach/Search").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.getSachByinfo);
    // {
    //     "tensach": "Tên sản phẩm",
    //     "tacgia": "Tác giả mới",
    //     "minPrice": 100000,
    //     "maxPrice": 200000
    // }
    app.route("/sach/Check").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, sachController.CheckTrungSach);

    //Văn phòng phẩm
    app.route("/vanphongpham").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, vanphongphamController.GetAllVPP);
    app.route("/vanphongpham/EditIF/:masp").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, vanphongphamController.EditVPPIF);
    app.route("/vanphongpham/Insert").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, vanphongphamController.InsertVPP);
    app.route("/vanphongpham/Edit/:masp").put(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, vanphongphamController.EditVPP);
    app.route("/vanphongpham/Delete/:masp").delete(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "DELETE");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, vanphongphamController.DeleteVPP);
    app.route("/vanphongpham/Search").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, vanphongphamController.getVPPByinfo);
    app.route("/vanphongpham/Check").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, vanphongphamController.CheckTrungVPP);

    //ADMIN
    app.route("/admin").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.GetAllAdmin);
    app.route("/admin/Login").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.Login);
    app.route("/admin/EditIF/:id").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.EditAdminIF);
    app.route("/admin/Insert").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.InsertAdmin);
    app.route("/admin/Edit/:id").put(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.EditAdmin);
    app.route("/admin/Delete/:id").delete(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "DELETE");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.DeleteAdmin);
    app.route("/admin/Search").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.getAdminByinfo);
    app.route("/admin/Check").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, adminController.CheckTrungAdmin);

    //khách hàng
    app.route("/khachhang").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.GetAllKH);
    app.route("/khachhang/LoginKH").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.LoginKH);
    app.route("/khachhang/EditIF/:makh").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.EditKHIF);

    app.route("/khachhang/Insert").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.InsertKH);

    app.route("/khachhang/Edit/:makh").put(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.EditKH);
    app.route("/khachhang/Delete/:makh").delete(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "DELETE");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.DeleteKH);
    app.route("/khachhang/Search").post(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.getKHByinfo);
    app.route("/khachhang/Check").get(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization",
        );
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
    }, khachhangController.CheckTrungKH);
};
