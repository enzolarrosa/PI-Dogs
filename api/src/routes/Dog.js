const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");

router.post("/", async (req, res) => {
  try {
    const { name, img, height1, height2, weight1, weight2, lifeSpan1, lifeSpan2, temperament } = req.body;
    const height= height1.concat(height2)
    const weight= weight1.concat(weight2)
    const lifeSpan= lifeSpan1.concat(lifeSpan2)
    console.log(height)
    let h = height[0] + ' - ' + height[1]
    let w = weight[0] + ' - ' + weight[1]
    let l = lifeSpan[0] + ' - ' + lifeSpan[1] + ' years'
    console.log(h)
    const neew = await Dog.create({
      name,
      img,
      height: h,
      weight: w,
      lifeSpan: l,
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
