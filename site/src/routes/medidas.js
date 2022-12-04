var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/lugaresPreferidos/", function (req, res) {
    medidaController.lugaresFavoritos(req, res);
});


module.exports = router;