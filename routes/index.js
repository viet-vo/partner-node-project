// Dependency List
const path = require('path');
const router = require('express').Router();

router.get("/",function (req, res) {
    res.json({test: "subroutes work"})
});

// router.use("/", ext);

module.exports = router;