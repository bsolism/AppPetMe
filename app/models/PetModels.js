const pets = [
  {
    id: 1,
    name: "Pupy",
    category: "Little",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/littleDog1.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/littleDog1.1.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/littleDog1.2.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: false,
  },
  {
    id: 2,
    name: "Pet Medium Dog1",
    category: "Medium",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/mediumDog1.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 3,
    name: "Black",
    category: "Big",
    description: "Le gusta jugar y rompe todo, y solo pasa mordiendo a Jafeth",
    photo: [
      {
        id: 1,
        image: require("../../assets/black1.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/black1.1.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/black1.2.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa Solis Cantarero",
      city: "Villanueva",
      address: "Res. Guacamaya",
    },
    image: require("../../assets/img.png"),
    old: "4 meses",
    weight: "15 kg",
    height: "80 cm",
    sex: "Macho",
    color: "Negro",
    clinicHistory: "Sin Enfermedad detectada",
    lifeHistory: "Tiene una vida Saludable",
    isAdoptable: true,
  },
  {
    id: 4,
    name: "Pet Little Dog2",
    category: "Little",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/littleDog2.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 5,
    name: "Pet Medium Dog2",
    category: "Medium",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/mediumDog2.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 6,
    name: "Pet Big Dog2",
    category: "Big",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/bigDog2.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 7,
    name: "Pet Little Dog3",
    category: "Little",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/littleDog3.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 8,
    name: "Pet Medium Dog3",
    category: "Medium",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/mediumDog3.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 9,
    name: "Pet Big Dog3",
    category: "Big",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/bigDog3.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 10,
    name: "Pet Little Dog4",
    category: "Little",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/littleDog4.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 11,
    name: "Pet Medium Dog4",
    category: "Medium",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/mediumDog4.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
  {
    id: 12,
    name: "Pet Big Dog4",
    category: "Big",
    description: "Perro abandonado pero recuperado y listo para adoptar",
    photo: [
      {
        id: 1,
        image: require("../../assets/bigDog4.jpg"),
      },
    ],
    refuge: {
      id: 1,
      name: "Casa de Rescate Animal",
      city: "San Pedro Sula",
      address: "Barrio el Centro",
    },
    image: require("../../assets/img.png"),
    old: "2 años",
    weight: "10 kg",
    height: "80 cm",
    sex: "Hembra",
    color: "Beige",
    clinicHistory:
      "El cachorro se le practicó una cirugia hace tres meses ahora se" +
      "encuentra en ya recuperado",
    lifeHistory:
      "El cachorro fue rescatado de las calles, se encontraba enfermo, se" +
      "le dió seguimiento para su recuperación, ahora está feliz con una" +
      "segunda oportunidad de vida",
    isAdoptable: true,
  },
];

export default pets;
