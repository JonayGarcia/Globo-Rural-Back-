const SHOPS = [
  {
    name: "Tienda1",
    email: "Sincere@april.biz",
    postcode: "35018",
    phone: "928000001",
    logo:
      "https://cdn.dribbble.com/users/24078/screenshots/14343984/media/35c85ad9172eb95a292d363c287ae918.jpg",
  },
  {
    name: "Tienda2",
    email: "Shanna@melissa.tv",
    postcode: "35018",
    phone: "928000002",
    logo:
      "https://cdn.dribbble.com/users/24078/screenshots/14365732/media/9744573663695e5c4b12a97ecd5064ba.jpg",
  },
  {
    name: "Tienda3",
    postcode: "35200",
    phone: "928000003",
    logo:
      "https://cdn.dribbble.com/users/24078/screenshots/13972510/media/84fffa5c27472436f50ad8ac544dea31.jpg",
  },
  {
    name: "Tienda4",
    email: "Julianne.OConner@kory.org",
    postcode: "35400",
    phone: "928000004",
    logo:
      "https://cdn.dribbble.com/users/24078/screenshots/14533792/media/7e9dd669880bab07e025b563d1d92199.jpg",
  },
  {
    name: "Tienda5",
    email: "Karley_Dach@jasper.info",
    postcode: "35018",
    phone: "928000005",
    logo:
      "https://cdn.dribbble.com/users/13604/screenshots/14459739/media/e6d0447abca04c409cb5f0d63ab83aa2.jpg",
  },
  {
    name: "Tienda6",
    email: "Sherwood@rosamond.me",
    postcode: "35200",
    phone: "928000006",
    logo:
      "https://cdn.dribbble.com/users/24078/screenshots/14562865/media/130e993838dec40962316d5fde601ec2.jpg",
  },
  {
    name: "Tienda7",
    email: "Chaim_McDermott@dana.io",
    postcode: "35400",
    phone: "928000007",
    logo:
      "https://cdn.dribbble.com/users/52084/screenshots/14307957/media/5b726212f3b7f7c7f58c91b77fbbe4a5.jpg",
  },
  {
    name: "Tienda8",
    email: "Rey.Padberg@karina.biz",
    postcode: "35219",
    phone: "928000008",
    logo:
      "https://cdn.dribbble.com/users/230124/screenshots/14349126/media/ae035ed4da5b9f34179d8bd2e1460d17.jpg",
  },
  {
    name: "Tienda9",
    email: "Rey.Padberg@karina.biz",
    postcode: "35200",
    phone: "928000009",
    logo:
      "https://cdn.dribbble.com/users/13604/screenshots/14443801/media/4258f865fe493d5103ca14f0c3a48f53.jpg",
  },
  {
    name: "Tienda10",
    email: "Rey.Padberg@karina.biz",
    postcode: "35200",
    phone: "928000010",
    logo:
      "https://cdn.dribbble.com/users/230124/screenshots/14392993/media/4536da1ab367f3083a07281820c311e2.jpg",
  },
];

const PRODUCTS = [
  {
    name: "Navidul Jamón curado de Extremadura, lonchas 138g",
    price: "2.89",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s0.dia.es/medias/h91/hc6/9997490028574.jpg",
    stock: 4,
  },
  {
    name: "ASTURIANA leche entera envase 1 lt",
    price: "0.79",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s0.dia.es/medias/h79/hd3/10248592195614.jpg",
    stock: 4,
  },
  {
    name: "KELLOGGS cereales corn flakes caja 500 gr",
    price: "2.59",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s1.dia.es/medias/hb0/h74/10020531666974.jpg",
    stock: 4,
  },
  {
    name: "Huevos frescos categoría A clase L estuche 12 uds",
    price: "1.45",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s0.dia.es/medias/hf5/h58/10174922194974.jpg",
    stock: 4,
  },
  {
    name: "CASA TARRADELLAS pizza jamón y queso envase 405 gr ",
    price: "2.64",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s2.dia.es/medias/heb/hc9/10280254537758.jpg",
    stock: 4,
  },
  {
    name: "COCA COLA light sin cafeína lata 33 cl ",
    price: "0.69",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s0.dia.es/medias/h2b/h10/10314369368094.jpg",
    stock: 4,
  },
  {
    name: "COCA COLA clásica pack 12 latas 33 cl ",
    price: "7.99",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s3.dia.es/medias/h0a/h98/10259077300254.jpg",
    stock: 4,
  },
  {
    name: "BIMBO pan de molde blanco sin corteza bolsa 450 gr ",
    price: "1.99",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s0.dia.es/medias/hbe/h21/10268049637406.jpg",
    stock: 4,
  },
  {
    name: "BIMBO pan de hamburguesas 4 uds bolsa 300 gr ",
    price: "1.85",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s0.dia.es/medias/ha9/he4/9001529081886.jpg",
    stock: 4,
  },
  {
    name: "HELLMANN'S mayonesa frasco 450 ml  ",
    price: "1.89",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s2.dia.es/medias/hf8/h88/10335757107230.jpg",
    stock: 4,
  },
  {
    name: "CHIPS AHOY mini galletas caja 160 gr  ",
    price: "1.59",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s0.dia.es/medias/h70/h45/10299379154974.jpg",
    stock: 4,
  },
  {
    name: "HIDA tomate doble concentrado lata 170 gr   ",
    price: "0.79",
    description:
      "Lonchas de Jamón Curado Extremadura, un producto elaborado en nuestras bodegas de Trujillo (Cáceres). Con este producto podrás disfrutar del mejor sabor, listo para consumir y disfrutaren cualquier momento. Sin colorantes, sin gluten y sin lactosa. Cada producto tiene un peso total de 138g ",
    image: "https://s1.dia.es/medias/hcc/h6d/10322705514526.jpg",
    stock: 4,
  },
];

const CARRIERS = [
  {
    name: "Eduardo Ortega",
    email: "correo@gmail.com",
    phone: "939-555-0113",
    working_postcodes: ["35018", "35200", "35400", "35219"],
  },
  {
    name: "Jonay García",
    email: "correo2@gmail.com",
    phone: "939-333-0113",
    working_postcodes: ["35018", "35219"],
  },
  {
    name: "José Mejias",
    email: "correo3@gmail.com",
    phone: "939-222-0113",
    working_postcodes: ["35200", "35400", "35219"],
  },
  {
    name: "Bryan Tamayo",
    email: "correo4@gmail.com",
    phone: "939-111-0113",
    working_postcodes: ["35400", "35219"],
  },
  {
    name: "Guzman Hernández",
    email: "correo5@gmail.com",
    phone: "939-444-0113",
    working_postcodes: ["35219"],
  },
];

SHOPS.forEach((shop) => {
  const object_id = ObjectId();
  db.shops.insert({ _id: object_id, ...shop });
  PRODUCTS.forEach((product) => {
    db.products.insert({ ...product, shop_id: object_id });
  });
});

CARRIERS.forEach((carrier) => {
  db.carriers.insert({ ...carrier });
});
