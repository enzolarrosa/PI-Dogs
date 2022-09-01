const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");

router.post("/", async (req, res) => {
  try {
    let { name, img, height1, height2, weight1, weight2, lifeSpan1, lifeSpan2, temperament } = req.body;
    const height= height1 + ' - ' + height2
    const weight= weight1 + ' - ' + weight2
    const lifeSpan= lifeSpan1 + ' - ' + lifeSpan2 + ' years'
    console.log(height)
    const neew = await Dog.create({
      name,
      img,
      height,
      weight,
      lifeSpan,
    });
    temperament.map(async (e) => {
      let post = await Temperament.findAll({
        where: { name: e.toLowerCase() },
      });
      await neew.addTemperament(post);
    });
  
    res.send("Finish");
  } catch (error) {
    console.log(error.message)
  }
});

module.exports = router;
