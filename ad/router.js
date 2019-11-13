const { Router } = require("express");
const Ad = require("./model");

const router = new Router();

// find all ads
router.get("/ads", (_request, response, next) => {
  Ad.findAll()
    .then(ads => response.json(ads))
    .catch(next);
});

// create a new ad
router.post("/ads", (request, response, next) => {
  Ad.create(request.body)
    .then(result => response.json(result))
    .catch(next);
});

// find one ad
router.get("/ads/:id", (request, response, next) => {
  Ad.findByPk(request.params.id)
    .then(ad => {
      if (ad) {
        response.json(ad);
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});

// update a single ad
router.put("/ads/:id", (request, response, next) =>
  Ad.findByPk(request.params.id)
    .then(ad => {
      if (ad) {
        ad.update(request.body).then(ad => response.send(ad));
      } else {
        response.status(404).end();
      }
    })
    .catch(next)
);

// delete a single ad
router.delete("/ads/:id", (request, response, next) =>
  Ad.destroy({ where: { id: request.params.id } })
    .then(number => {
      if (number) {
        response.status(204).end();
      } else {
        response.status(404).end();
      }
    })
    .catch(next)
);

module.exports = router;
