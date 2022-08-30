const { Dog, Temperament } = require("../db");
const { default: axios } = require("axios");

const allApi = async () => {
  const info = await axios.get("https://api.thedogapi.com/v1/breeds?limit=100");
  const final = await info.data.map((e) => {
    const temp = e.temperament.toLowerCase().split(",").join("").split(" ");
    return {
      id: e.id,
      name: e.name,
      img: e.image.url,
      weight: e.weight.metric,
      temperaments: temp.map((el) => {
        return { name: el };
      }),
    };
  });
  return final;
};

const allDb = async () => {
  let info = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return info;
};

const allDog = async () => {
  const api = await allApi();
  const db = await allDb();
  const all = api.concat(db);
  return all;
};

const idAll = async (id) => {
  const info = await axios.get("https://api.thedogapi.com/v1/breeds?limit=100");
  const final = await info.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      img: e.image.url,
      height: e.height.metric,
      weight: e.weight.metric,
      lifeSpan: e.life_span,
      temperaments: e.temperament,
    };
  });
  const dog = final.concat(allDb());
  const filt = dog.find((el) => el.id == id);
  return filt;
};

const types = async () => {
  let temp = "";
  let fin = [];
  const info = await axios.get("https://api.thedogapi.com/v1/breeds?limit=100");
  await info.data.map((e) => {
    temp = temp + e.temperament;
  });
  let arr = temp.split(",").join("");
  let newArr = arr.split(" ");
  newArr.forEach((e) => {
    if (!fin.includes(e)) {
      fin.push(e);
    }
  });
  return fin;
};

module.exports = {
  allDog,
  idAll,
  types,
};
