const { Router } = require("express");
const router = Router();
const { allDog, idAll } = require("../controllers/functions");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const dog= await allDog()
  if (name) {
    try {
      const query = dog.filter((e) =>
        e.name.toUpperCase().includes(name.toUpperCase())
      );
      query.length !== 0 ? res.json(query) : res.send("dog not found");
    } catch (error) {
      res.status(400).send('Hubo un error')
    }
  } else {
    try {
      return res.json(dog);
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const filt = await idAll(id)
  if(filt) {return res.json(filt)}
  else {return res.status(404).send('Dog not Found')}
});

module.exports = router;
