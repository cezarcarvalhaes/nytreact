const router = require("express").Router();
const axios = require("axios");
const articlesController = require("../../controllers/articlesController");
const nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q='

// Matches with "/api/articles/
router.get("/", (req, res) => {
    //saves the passed in search query from front end to pass to API URL
    let query = req.query.q
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
    .delete(articlesController.remove);

module.exports = router;