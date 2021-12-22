"use strict";
const e = require("express");
const logger = require("../../config/logger");
const User = require("../../models/User");

// GET 방식 = output
const output = {
    home: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },

    login: (req, res) => {
        logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },

    register: (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
};

// POST 방식 = process
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response =  await user.login();

        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 201,
        }
        log(response, url);
        return res.status(url.status).json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();

        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409 : 201,
        }
        log(response, url);
        return res.status(url.status).json(response);
    },
};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Responese: ${response.success} ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Responese: ${response.success} ${response.msg || ""}`
        );
    }
}