const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");

router.post("/", async (req, res) => {
  const { name, img, height1, height2, weight1, weight2, lifeSpan1, lifeSpan2, temp } = req.body;
  const height= [...height1,height2]
  const weight= [...weight1,weight2]
  const lifeSpan= [...lifeSpan1,lifeSpan2]
  let h = height[0] + ' - ' + height[1]
  let w = weight[0] + ' - ' + weight[1]
  let l = lifeSpan[0] + ' - ' + lifeSpan[1] + ' years'
  const neew = await Dog.create({
    name,
    img,
    h,
    w,
    l,
  });
  temp.map(async (e) => {
    let post = await Temperament.findAll({
      where: { name: e.toLowerCase() },
    });
    await neew.addTemperament(post);
  });

  res.send("Finish");
});

module.exports = router;
