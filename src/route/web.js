import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/michelle', (req, res) => {
        return res.send('Hello world with Michelle')
    });
    router.get('/about', homeController.getAboutPage);



    return app.use("/", router);
}

module.exports = initWebRoutes;