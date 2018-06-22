const router = require("express").Router();
const axios = require("axios");
const articlesController = require("../../controllers/articlesController");
const nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q='

// Matches with "/api/articles/:query
router.get("/", (req, res) => {
    let query = req.query.q;
    console.log(nytUrl + query)
    axios
        .get(nytUrl + query)
        .then((response) => res.json(response.data.response.docs))
        .catch(err => res.status(422).json(err));
});

// Matches with "/api/articles/saved"
router.route("/saved")
    .get(articlesController.findAll)
    .post(articlesController.create);

// Matches with "/api/articles/:id"
router.route("/:id")
    //.get(articlesController.findById)
    // .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;