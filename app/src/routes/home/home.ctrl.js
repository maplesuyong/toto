"use strict";
const e = require("express");
const logger = require("../../config/logger");
const User = require("../../models/User");

// GET 방식 = output
const output = {
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login: (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register: (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
};

// POST 방식 = process
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response =  await user.login();
        if (response.err)
            logger.error(`POST /login 200 Responese: "success: ${response.success}, ${response.err}"`);
        else
            logger.info(
                `POST /login 200 Responese: "success: ${response.success}, msg: ${response.msg}"`
            );
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err)
            logger.error(`POST /login 200 Responese: "success: ${response.success}, ${response.err}"`);
        else
            logger.info(
                `POST /register 200 Responese: "success: ${response.success}, msg: ${response.msg}"`
            );
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};