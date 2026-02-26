const productos = [
    {
        id: 1,
        nombre: "Tarta de Chocolate",
        descripcion: "Cake de chocolate, merengue decoración con cobertura. 16-20 porciones (20-22cm diámetro). Imagen referencial.",
        precio: 4000,
        moneda: "CUP",
        precioTexto: "4,000 CUP",
        categoria: "tartas-clasicas",
        subcategoria: null,
        imagen: "chocolate.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "Decoraciones modificables. Agregados decorativos según disponibilidad."
    },
    {
        id: 2,
        nombre: "Red Velvet",
        descripcion: "Rellenos de crema de vainilla o queso. 16-20 porciones (20-22cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-clasicas",
        subcategoria: null,
        imagen: "redvelvet.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "Decoraciones modificables. Agregados decorativos según disponibilidad."
    },
    {
        id: 3,
        nombre: "Buttercream",
        descripcion: "Crema de mantequilla de vainilla. 16-20 porciones (20-22cm diámetro). Imagen referencial.",
        precio: 4500,
        moneda: "CUP",
        precioTexto: "4,500 CUP",
        categoria: "tartas-clasicas",
        subcategoria: null,
        imagen: "buttercream.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "Decoraciones modificables. Agregados decorativos según disponibilidad."
    },
    {
        id: 4,
        nombre: "ChocoButter",
        descripcion: "Completamente de chocolate, crema de mantequilla. 16-20 porciones (20-22cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-clasicas",
        subcategoria: null,
        imagen: "chocobutter.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "Decoraciones modificables. Agregados decorativos según disponibilidad."
    },
    {
        id: 5,
        nombre: "Capuchino Cubano",
        descripcion: "Masa capuchina rellena de guayaba. 16-20 porciones (20-22cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-clasicas",
        subcategoria: null,
        imagen: "capuchino.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "Decoraciones modificables. Agregados decorativos según disponibilidad."
    },
    {
        id: 6,
        nombre: "Pastel Imposible",
        descripcion: "Flan Cake. 16-20 porciones (20-22cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-clasicas",
        subcategoria: null,
        imagen: "imposible.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "Decoraciones modificables. Agregados decorativos según disponibilidad."
    },
    {
        id: 7,
        nombre: "Tarta Mousse de Chocolate",
        descripcion: "Mousse de chocolate. Crema fría a base de nata y gelatina neutra. 16-20 porciones (20cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-mousse",
        subcategoria: null,
        imagen: "moussechoco.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "2 masas de chocolate + 2 capas de crema del sabor elegido. Decoraciones modificables."
    },
    {
        id: 8,
        nombre: "Tarta Mousse Moka",
        descripcion: "Mousse de moka. Crema fría a base de nata y gelatina neutra. 16-20 porciones (20cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-mousse",
        subcategoria: null,
        imagen: "moussemoka.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "2 masas de vainilla o chocolate + 2 capas de crema del sabor elegido. Decoraciones modificables."
    },
    {
        id: 9,
        nombre: "Tarta Mousse de Fresa",
        descripcion: "Mousse de fresa. Crema fría a base de nata y gelatina neutra. 16-20 porciones (20cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-mousse",
        subcategoria: null,
        imagen: "moussefresa.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "2 masas de vainilla + 2 capas de crema del sabor elegido. Decoraciones modificables."
    },
    {
        id: 10,
        nombre: "Tarta Mousse de Limón",
        descripcion: "Mousse de limón. Crema fría a base de nata y gelatina neutra. 16-20 porciones (20cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-mousse",
        subcategoria: null,
        imagen: "mousselimon.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "2 masas de vainilla + 2 capas de crema del sabor elegido. Decoraciones modificables."
    },
    {
        id: 11,
        nombre: "Tarta Tres Leches",
        descripcion: "Tres leches. Crema fría a base de nata y gelatina neutra. 16-20 porciones (20cm diámetro). Imagen referencial.",
        precio: 6000,
        moneda: "CUP",
        precioTexto: "6,000 CUP",
        categoria: "tartas-mousse",
        subcategoria: null,
        imagen: "tresleches.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "2 masas de vainilla + 2 capas de crema del sabor elegido. Decoraciones modificables."
    },
    {
        id: 12,
        nombre: "Tarta Mousse Red Velvet",
        descripcion: "Mousse red velvet. Crema fría a base de nata y gelatina neutra. 16-20 porciones (20cm diámetro). Imagen referencial.",
        precio: 5000,
        moneda: "CUP",
        precioTexto: "5,000 CUP",
        categoria: "tartas-mousse",
        subcategoria: null,
        imagen: "moussered.webp",
        sinPersonalizar: true,
        requiereAnticipo: false,
        nota: "2 masas de red velvet + 2 capas de crema del sabor elegido. Decoraciones modificables."
    },
    {
        id: 13,
        nombre: "Tarta Personalizada 15cm",
        descripcion: "Cake de merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla o chocolate. 15 porciones",
        precio: 5500,
        moneda: "CUP",
        precioTexto: "5,500 CUP",
        categoria: "personalizados",
        subcategoria: "1piso",
        imagen: "personal15.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        precioGanache: 9000,
        nota: "Cobertura interna de ganache de chocolate: 9,000 CUP (20 porciones). Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 14,
        nombre: "Tarta Personalizada 22cm",
        descripcion: "Cake de merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla o chocolate. 30 porciones",
        precio: 9000,
        moneda: "CUP",
        precioTexto: "9,000 CUP",
        categoria: "personalizados",
        subcategoria: "1piso",
        imagen: "personal22.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        precioGanache: 10500,
        nota: "Cobertura interna de ganache de chocolate: 10,500 CUP (45 porciones). Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 15,
        nombre: "Tarta Personalizada 30cm",
        descripcion: "Cake de merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla o chocolate. 50 porciones",
        precio: 15000,
        moneda: "CUP",
        precioTexto: "15,000 CUP",
        categoria: "personalizados",
        subcategoria: "1piso",
        imagen: "personal30.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        precioGanache: 21000,
        nota: "Cobertura interna de ganache de chocolate: 21,000 CUP (70-80 porciones). Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 16,
        nombre: "Tarta 2 Pisos (22 y 15cm) - 45-50 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 45-50 porciones",
        precio: 12000,
        moneda: "CUP",
        precioTexto: "12,000 CUP",
        categoria: "personalizados",
        subcategoria: "2pisos",
        imagen: "dospisos1.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 17,
        nombre: "Tarta 2 Pisos (22 y 15cm) - 60 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 60 porciones",
        precio: 18000,
        moneda: "CUP",
        precioTexto: "18,000 CUP",
        categoria: "personalizados",
        subcategoria: "2pisos",
        imagen: "dospisos2.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 18,
        nombre: "Tarta 2 Pisos (30 y 22cm) - 45 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 45 porciones",
        precio: 10000,
        moneda: "CUP",
        precioTexto: "10,000 CUP",
        categoria: "personalizados",
        subcategoria: "2pisos",
        imagen: "dospisos3.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 19,
        nombre: "Tarta 2 Pisos (30 y 22cm) - 80 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 80 porciones",
        precio: 20000,
        moneda: "CUP",
        precioTexto: "20,000 CUP",
        categoria: "personalizados",
        subcategoria: "2pisos",
        imagen: "dospisos4.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 20,
        nombre: "Tarta 2 Pisos (30 y 22cm) - 100 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 100 porciones",
        precio: 27000,
        moneda: "CUP",
        precioTexto: "27,000 CUP",
        categoria: "personalizados",
        subcategoria: "2pisos",
        imagen: "dospisos5.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado no incluido."
    },
    {
        id: 21,
        nombre: "Tarta 3 Pisos (22,15,10cm) - 50 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 50 porciones",
        precio: 17000,
        moneda: "CUP",
        precioTexto: "17,000 CUP",
        categoria: "personalizados",
        subcategoria: "3pisos",
        imagen: "trespisos1.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 22,
        nombre: "Tarta 3 Pisos (30,22,15cm) - 60 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 60 porciones",
        precio: 20000,
        moneda: "CUP",
        precioTexto: "20,000 CUP",
        categoria: "personalizados",
        subcategoria: "3pisos",
        imagen: "trespisos2.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 23,
        nombre: "Tarta 3 Pisos (24,22,15cm) - 80 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 80 porciones",
        precio: 25000,
        moneda: "CUP",
        precioTexto: "25,000 CUP",
        categoria: "personalizados",
        subcategoria: "3pisos",
        imagen: "trespisos3.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 24,
        nombre: "Tarta 3 Pisos (30,22,15cm) - 100-120 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 100-120 porciones",
        precio: 30000,
        moneda: "CUP",
        precioTexto: "30,000 CUP",
        categoria: "personalizados",
        subcategoria: "3pisos",
        imagen: "trespisos4.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 25,
        nombre: "Tarta 4 Pisos (30,24,22,15cm) - 80 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 80 porciones",
        precio: 25000,
        moneda: "CUP",
        precioTexto: "25,000 CUP",
        categoria: "personalizados",
        subcategoria: "4pisos",
        imagen: "cuatropisos1.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 26,
        nombre: "Tarta 4 Pisos (24,22,15,10cm) - 100 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 100 porciones",
        precio: 35000,
        moneda: "CUP",
        precioTexto: "35,000 CUP",
        categoria: "personalizados",
        subcategoria: "4pisos",
        imagen: "cuatropisos2.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 27,
        nombre: "Tarta 4 Pisos (30,24,22,15cm) - 150 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 150 porciones",
        precio: 45000,
        moneda: "CUP",
        precioTexto: "45,000 CUP",
        categoria: "personalizados",
        subcategoria: "4pisos",
        imagen: "cuatropisos3.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 28,
        nombre: "Tarta 5 Pisos (30,24,22,15,10cm) - 100 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 100 porciones",
        precio: 40000,
        moneda: "CUP",
        precioTexto: "40,000 CUP",
        categoria: "personalizados",
        subcategoria: "5pisos",
        imagen: "cincopisos1.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 29,
        nombre: "Tarta 5 Pisos (30,24,22,15,10cm) - 150-180 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 150-180 porciones",
        precio: 50000,
        moneda: "CUP",
        precioTexto: "50,000 CUP",
        categoria: "personalizados",
        subcategoria: "5pisos",
        imagen: "cincopisos2.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 30,
        nombre: "Tarta 6 Pisos (32,28,24,22,15,10cm) - 130 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 130 porciones",
        precio: 45000,
        moneda: "CUP",
        precioTexto: "45,000 CUP",
        categoria: "personalizados",
        subcategoria: "6pisos",
        imagen: "seispisos1.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 31,
        nombre: "Tarta 6 Pisos (32,28,24,22,15,10cm) - 200 porc",
        descripcion: "Cobertura merengue. Masa vainilla o chocolate (adicional). Relleno crema vainilla. 200 porciones",
        precio: 60000,
        moneda: "CUP",
        precioTexto: "60,000 CUP",
        categoria: "personalizados",
        subcategoria: "6pisos",
        imagen: "si.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Imágenes referenciales. Traslado incluido en el Centro."
    },
    {
        id: 32,
        nombre: "Fondant 1 Piso (15 porciones)",
        descripcion: "Cobertura interior de ganache de chocolate y exterior de fondant. Masa y rellenos de vainilla o chocolate. Decoración personalizada.",
        precio: 30,
        moneda: "USD",
        precioTexto: "30 USD",
        categoria: "personalizados",
        subcategoria: "fondant",
        imagen: "fondant15.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Precio en USD. Imágenes referenciales."
    },
    {
        id: 33,
        nombre: "Fondant 1 Piso (25 porciones)",
        descripcion: "Cobertura interior de ganache de chocolate y exterior de fondant. Masa y rellenos de vainilla o chocolate. Decoración personalizada.",
        precio: 50,
        moneda: "USD",
        precioTexto: "50 USD",
        categoria: "personalizados",
        subcategoria: "fondant",
        imagen: "fondant25.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Precio en USD. Imágenes referenciales."
    },
    {
        id: 34,
        nombre: "Fondant 2 Pisos (40 porciones)",
        descripcion: "Cobertura interior de ganache de chocolate y exterior de fondant. Masa y rellenos de vainilla o chocolate. Decoración personalizada.",
        precio: 80,
        moneda: "USD",
        precioTexto: "80 USD",
        categoria: "personalizados",
        subcategoria: "fondant",
        imagen: "fondant40.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Precio en USD. Imágenes referenciales."
    },
    {
        id: 35,
        nombre: "Fondant 3 Pisos (50 porciones)",
        descripcion: "Cobertura interior de ganache de chocolate y exterior de fondant. Masa y rellenos de vainilla o chocolate. Decoración personalizada.",
        precio: 100,
        moneda: "USD",
        precioTexto: "100 USD",
        categoria: "personalizados",
        subcategoria: "fondant",
        imagen: "fondant50.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Precio en USD. Imágenes referenciales."
    },
    {
        id: 36,
        nombre: "Fondant 4 Pisos (80 porciones)",
        descripcion: "Cobertura interior de ganache de chocolate y exterior de fondant. Masa y rellenos de vainilla o chocolate. Decoración personalizada.",
        precio: 150,
        moneda: "USD",
        precioTexto: "150 USD",
        categoria: "personalizados",
        subcategoria: "fondant",
        imagen: "fondant80.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Precio en USD. Imágenes referenciales."
    },
    {
        id: 53,
        nombre: "Fondant 5 Pisos (100 porciones)",
        descripcion: "Cobertura interior de ganache de chocolate y exterior de fondant. Masa y rellenos de vainilla o chocolate. Decoración personalizada.",
        precio: 200,
        moneda: "USD",
        precioTexto: "200 USD",
        categoria: "personalizados",
        subcategoria: "fondant",
        imagen: "fondant100.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Precio en USD. Imágenes referenciales."
    },
    {
        id: 54,
        nombre: "Fondant 5 Pisos (120 porciones)",
        descripcion: "Cobertura interior de ganache de chocolate y exterior de fondant. Masa y rellenos de vainilla o chocolate. Decoración personalizada.",
        precio: 250,
        moneda: "USD",
        precioTexto: "250 USD",
        categoria: "personalizados",
        subcategoria: "fondant",
        imagen: "fondant120.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Precio en USD. Imágenes referenciales."
    },
    {
        id: 38,
        nombre: "Brownies",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 2500,
        moneda: "CUP",
        precioTexto: "2,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "brownies.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 39,
        nombre: "Donas",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 2500,
        moneda: "CUP",
        precioTexto: "2,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "donas.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 40,
        nombre: "Dulces de Chocolate",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 2500,
        moneda: "CUP",
        precioTexto: "2,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "dulcechoco.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 41,
        nombre: "Dulces de Vainilla",
        descripcion: "Docena - 12 unidades. Crema de mantequilla o mousse según disponibilidad. Imagen referencial.",
        precio: 2000,
        moneda: "CUP",
        precioTexto: "2,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "dulcevainilla.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 42,
        nombre: "Vasos de Mousse",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 3500,
        moneda: "CUP",
        precioTexto: "3,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "vasosmousse.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 43,
        nombre: "Cupcakes",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 2500,
        moneda: "CUP",
        precioTexto: "2,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "cupcakes.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 44,
        nombre: "Trufas de Chocolate",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 3000,
        moneda: "CUP",
        precioTexto: "3,000 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "trufas.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 45,
        nombre: "Chocoflanes",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 2500,
        moneda: "CUP",
        precioTexto: "2,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "chocoflanes.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 46,
        nombre: "Tartaletas",
        descripcion: "Docena - 12 unidades. Imagen referencial.",
        precio: 2500,
        moneda: "CUP",
        precioTexto: "2,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "tartaletas.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 47,
        nombre: "Pie",
        descripcion: "Unidad de 22cm. Imagen referencial.",
        precio: 1500,
        moneda: "CUP",
        precioTexto: "1,500 CUP",
        categoria: "dulces",
        subcategoria: null,
        imagen: "pie.webp",
        sinPersonalizar: true,
        requiereAnticipo: false
    },
    {
        id: 48,
        nombre: "Mesa Pequeña (60 dulces)",
        descripcion: "Ideal para acompañar el cake en mesa o pequeños montajes.",
        precio: 150,
        moneda: "USD",
        precioTexto: "150 USD",
        categoria: "mesas",
        subcategoria: null,
        imagen: "mesa60.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Los dulces de la mesa son seleccionados por nuestro equipo de acuerdo al lugar a trasladar y el paquete que seleccione. No podrá seleccionar todas las variedades pero si desea alguna específico puede decirnos. Se personaliza según el evento. Montaje incluido en ciudad."
    },
    {
        id: 49,
        nombre: "Mesa Pequeña (80 dulces)",
        descripcion: "Ideal para acompañar el cake en mesa o pequeños montajes.",
        precio: 70,
        moneda: "USD",
        precioTexto: "70 USD",
        categoria: "mesas",
        subcategoria: null,
        imagen: "mesa80.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Los dulces de la mesa son seleccionados por nuestro equipo de acuerdo al lugar a trasladar y el paquete que seleccione. No podrá seleccionar todas las variedades pero si desea alguna específico puede decirnos. Se personaliza según el evento. Montaje incluido en ciudad."
    },
    {
        id: 50,
        nombre: "Mesa Standard (100 dulces)",
        descripcion: "Ideal para degustar.",
        precio: 95,
        moneda: "USD",
        precioTexto: "95 USD",
        categoria: "mesas",
        subcategoria: null,
        imagen: "mesa100.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Los dulces de la mesa son seleccionados por nuestro equipo de acuerdo al lugar a trasladar y el paquete que seleccione. No podrá seleccionar todas las variedades pero si desea alguna específico puede decirnos. Se personaliza según el evento. Montaje incluido en ciudad."
    },
    {
        id: 51,
        nombre: "Mesa Grande (120 dulces)",
        descripcion: "Ideal para degustar.",
        precio: 110,
        moneda: "USD",
        precioTexto: "110 USD",
        categoria: "mesas",
        subcategoria: null,
        imagen: "mesa120.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Los dulces de la mesa son seleccionados por nuestro equipo de acuerdo al lugar a trasladar y el paquete que seleccione. No podrá seleccionar todas las variedades pero si desea alguna específico puede decirnos. Se personaliza según el evento. Montaje incluido en ciudad."
    },
    {
        id: 52,
        nombre: "Mesa Grande (160 dulces)",
        descripcion: "Gran variedad de dulces para eventos.",
        precio: 180,
        moneda: "USD",
        precioTexto: "180 USD",
        categoria: "mesas",
        subcategoria: null,
        imagen: "mesa160.webp",
        requiereAnticipo: true,
        porcentajeAnticipo: 30,
        nota: "Los dulces de la mesa son seleccionados por nuestro equipo de acuerdo al lugar a trasladar y el paquete que seleccione. No podrá seleccionar todas las variedades pero si desea alguna específico puede decirnos. Se personaliza según el evento. Montaje incluido en ciudad."
    }
];

let cart = [];

const productosContainer = document.getElementById('productosContainer');
const cartBadgeHeader = document.getElementById('cartBadgeHeader');
const cartFloatBadge = document.getElementById('cartFloatBadge');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartFloatBtn = document.getElementById('cartFloatBtn');
const cartPanel = document.getElementById('cartPanel');
const cartPanelClose = document.getElementById('cartPanelClose');
const cartPanelEmpty = document.getElementById('cartPanelEmpty');
const cartPanelItems = document.getElementById('cartPanelItems');
const cartPanelFooter = document.getElementById('cartPanelFooter');
const cartPanelSend = document.getElementById('cartPanelSend');
const categoriaActual = document.getElementById('categoriaActual');
const subcategoriasContainer = document.getElementById('subcategoriasContainer');

function cargarProductos(categoria = 'todos', subcategoria = null) {
    if (!productosContainer) return;
    
    productosContainer.innerHTML = '';
    
    let filtrados = [];
    
    if (categoria === 'personalizados' && subcategoria && subcategoria !== 'todos-personalizados') {
        filtrados = productos.filter(p => p.categoria === categoria && p.subcategoria === subcategoria);
    } else if (categoria === 'personalizados') {
        filtrados = productos.filter(p => p.categoria === categoria);
    } else {
        filtrados = categoria === 'todos' ? productos : productos.filter(p => p.categoria === categoria);
    }
    
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.categoria === categoria) btn.classList.add('active');
    });
    
    if (subcategoriasContainer) {
        if (categoria === 'personalizados') {
            subcategoriasContainer.style.display = 'flex';
            
            document.querySelectorAll('.subcategoria-btn').forEach(btn => {
                btn.classList.remove('active');
                if ((!subcategoria || subcategoria === 'todos-personalizados') && btn.dataset.subcategoria === 'todos-personalizados') {
                    btn.classList.add('active');
                } else if (btn.dataset.subcategoria === subcategoria) {
                    btn.classList.add('active');
                }
            });
        } else {
            subcategoriasContainer.style.display = 'none';
        }
    }
    
    if (categoriaActual) {
        const nombresCategorias = {
            'todos': 'Todos los productos',
            'tartas-clasicas': 'Tartas Clásicas',
            'tartas-mousse': 'Tartas Mousse',
            'personalizados': 'Tartas Personalizadas',
            'dulces': 'Dulces',
            'mesas': 'Mesas de Dulces'
        };
        
        if (categoria === 'personalizados' && subcategoria && subcategoria !== 'todos-personalizados') {
            const nombresSubcategorias = {
                '1piso': '1 Piso',
                '2pisos': '2 Pisos',
                '3pisos': '3 Pisos',
                '4pisos': '4 Pisos',
                '5pisos': '5 Pisos',
                '6pisos': '6 Pisos',
                'fondant': 'Fondant'
            };
            categoriaActual.innerHTML = `Mostrando: <span>${nombresCategorias[categoria]} - ${nombresSubcategorias[subcategoria]}</span>`;
        } else {
            categoriaActual.innerHTML = `Mostrando: <span>${nombresCategorias[categoria]}</span>`;
        }
    }
    
    if (filtrados.length === 0) {
        productosContainer.innerHTML = '<div style="text-align:center; padding:40px;">No hay productos en esta categoría</div>';
        return;
    }
    
    filtrados.forEach(p => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        
        let imagenHTML = '';
        if (p.imagen) {
            imagenHTML = `<div class="producto-imagen" style="background-image: url('${p.imagen}'); background-size: cover;"></div>`;
        } else {
            imagenHTML = `<div class="producto-imagen"><i class="fas fa-birthday-cake"></i></div>`;
        }
        
        let sinPersonalizarHTML = '';
        if (p.sinPersonalizar) {
            sinPersonalizarHTML = '<div class="producto-sin-personalizar">SIN PERSONALIZAR</div>';
        }
        
        let anticipoHTML = '';
        if (p.requiereAnticipo) {
            anticipoHTML = `<div class="producto-nota" style="color: var(--dorado);">✨ Requiere 30% anticipo</div>`;
        }
        
        let precioClass = p.moneda === 'USD' ? 'producto-precio-usd' : 'producto-precio';
        
        card.innerHTML = `
            ${imagenHTML}
            <div class="producto-info">
                ${sinPersonalizarHTML}
                <h3 class="producto-nombre">${p.nombre}</h3>
                <div class="producto-detalles">${p.descripcion}</div>
                <div class="${precioClass}">${p.precioTexto}</div>
                ${anticipoHTML}
                ${p.nota ? `<div class="producto-nota">${p.nota}</div>` : ''}
                <button class="btn-interes" 
                    data-nombre="${p.nombre}" 
                    data-precio="${p.precio}" 
                    data-moneda="${p.moneda}"
                    data-preciotexto="${p.precioTexto}"
                    data-anticipo="${p.requiereAnticipo ? 'true' : 'false'}"
                    data-porcentaje="${p.porcentajeAnticipo || 0}"
                    data-detalles="${p.descripcion}">
                    <i class="fas fa-plus-circle"></i> Agregar
                </button>
            </div>
        `;
        productosContainer.appendChild(card);
    });
    
    document.querySelectorAll('.btn-interes').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const item = {
                nombre: this.dataset.nombre,
                precio: parseInt(this.dataset.precio) || 0,
                moneda: this.dataset.moneda,
                precioTexto: this.dataset.preciotexto,
                requiereAnticipo: this.dataset.anticipo === 'true',
                porcentajeAnticipo: parseInt(this.dataset.porcentaje) || 0,
                detalles: this.dataset.detalles,
                cantidad: 1
            };
            
            const existing = cart.find(i => i.nombre === item.nombre && i.moneda === item.moneda);
            if (existing) {
                existing.cantidad += 1;
            } else {
                cart.push(item);
            }
            actualizarCarrito();
            
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Agregado';
            this.style.background = 'var(--dorado)';
            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.style.background = 'var(--chocolate)';
            }, 500);
        });
    });
}

function actualizarCarrito() {
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
    
    if (cartBadgeHeader) cartBadgeHeader.textContent = totalItems;
    if (cartFloatBadge) cartFloatBadge.textContent = totalItems;
    
    if (!cartPanelEmpty || !cartPanelItems || !cartPanelFooter) return;
    
    if (cart.length === 0) {
        cartPanelEmpty.style.display = 'block';
        cartPanelItems.style.display = 'none';
        cartPanelFooter.style.display = 'none';
    } else {
        cartPanelEmpty.style.display = 'none';
        cartPanelItems.style.display = 'block';
        cartPanelFooter.style.display = 'block';
        
        let totalCUP = 0;
        let totalUSD = 0;
        let anticipoCUP = 0;
        let anticipoUSD = 0;
        
        cart.forEach(item => {
            const subtotal = item.precio * item.cantidad;
            
            if (item.moneda === 'CUP') {
                totalCUP += subtotal;
                if (item.requiereAnticipo) {
                    anticipoCUP += subtotal * (item.porcentajeAnticipo / 100);
                }
            } else {
                totalUSD += subtotal;
                if (item.requiereAnticipo) {
                    anticipoUSD += subtotal * (item.porcentajeAnticipo / 100);
                }
            }
        });
        
        const restoCUP = totalCUP - anticipoCUP;
        const restoUSD = totalUSD - anticipoUSD;
        
        let itemsHtml = '';
        cart.forEach((item, index) => {
            itemsHtml += `
                <div class="cart-panel-item">
                    <div>
                        <strong>${item.nombre}</strong><br>
                        <small>${item.precioTexto} c/u</small>
                        ${item.requiereAnticipo ? 
                            '<br><small style="color: var(--dorado);">Anticipo: 30%</small>' : 
                            ''}
                    </div>
                    <div class="cart-panel-item-qty">
                        <button class="cart-panel-qty-btn minus" data-index="${index}">-</button>
                        <span>${item.cantidad}</span>
                        <button class="cart-panel-qty-btn plus" data-index="${index}">+</button>
                        <button class="cart-panel-qty-btn remove" data-index="${index}">🗑️</button>
                    </div>
                </div>
            `;
        });
        cartPanelItems.innerHTML = itemsHtml;
        
        let footerHtml = '<div style="margin-bottom: 10px;">';

        if (totalCUP > 0) {
            footerHtml += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px; font-size: 0.9rem;">
                    <span>Total CUP:</span>
                    <span style="font-weight: bold;">${totalCUP.toLocaleString()} CUP</span>
                </div>
            `;
            if (anticipoCUP > 0) {
                footerHtml += `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 3px; font-size: 0.85rem; color: var(--dorado);">
                        <span>Anticipo CUP:</span>
                        <span>${anticipoCUP.toLocaleString()} CUP</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.85rem; color: var(--chocolate-claro);">
                        <span>Resto CUP:</span>
                        <span>${restoCUP.toLocaleString()} CUP</span>
                    </div>
                `;
            }
        }

        if (totalUSD > 0) {
            if (totalCUP > 0) footerHtml += '<div style="margin-top: 5px;"></div>';
            footerHtml += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px; font-size: 0.9rem;">
                    <span>Total USD:</span>
                    <span style="font-weight: bold; color: #27ae60;">$${totalUSD.toLocaleString()} USD</span>
                </div>
            `;
            if (anticipoUSD > 0) {
                footerHtml += `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 3px; font-size: 0.85rem; color: var(--dorado);">
                        <span>Anticipo USD:</span>
                        <span>$${anticipoUSD.toLocaleString()} USD</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.85rem; color: var(--chocolate-claro);">
                        <span>Resto USD:</span>
                        <span>$${restoUSD.toLocaleString()} USD</span>
                    </div>
                `;
            }
        }

        footerHtml += `</div>
            <button class="cart-panel-btn" id="cartPanelSend">
                <i class="fab fa-whatsapp"></i> Enviar Pedido
            </button>
        `;
        
        cartPanelFooter.innerHTML = footerHtml;
        
        document.getElementById('cartPanelSend').addEventListener('click', enviarPedido);
    }
}


function enviarPedido(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (cart.length === 0) {
        alert('Carrito vacío');
        return;
    }
    
    let msg = '🍰 *Nuevo pedido desde el catálogo* 🍰\n\n';
    
    const cupItems = cart.filter(i => i.moneda === 'CUP');
    const usdItems = cart.filter(i => i.moneda === 'USD');
    
    if (cupItems.length > 0) {
        msg += `*💰 PRODUCTOS EN CUP*\n`;
        cupItems.forEach(i => {
            msg += `• ${i.nombre} x${i.cantidad} - ${i.precioTexto}\n`;
            
            // ✅ PERSONALIZACIÓN
            if (i.personalizacion && i.personalizacion !== "No aplica") {
                msg += `  🔹 *Personalización:* ${i.personalizacion}\n`;
            }
            
            // ✅ FECHA Y HORA
            if (i.fechaEntrega && i.horaEntrega) {
                msg += `  📅 *Fecha:* ${i.fechaEntrega}\n`;
                msg += `  ⏰ *Hora:* ${i.horaEntrega}\n`;
            }
            
            // ✅ GANACHE
            if (i.tieneGanache) {
                msg += `  🍫 *Con ganache de chocolate*\n`;
            }
            
            if (i.requiereAnticipo) msg += `  ✨ Requiere 30% anticipo\n`;
        });
        msg += '\n';
    }
    
    if (usdItems.length > 0) {
        msg += `*💵 PRODUCTOS EN USD*\n`;
        usdItems.forEach(i => {
            msg += `• ${i.nombre} x${i.cantidad} - ${i.precioTexto}\n`;
            
            // ✅ PERSONALIZACIÓN
            if (i.personalizacion && i.personalizacion !== "No aplica") {
                msg += `  🔹 *Personalización:* ${i.personalizacion}\n`;
            }
            
            // ✅ FECHA Y HORA
            if (i.fechaEntrega && i.horaEntrega) {
                msg += `  📅 *Fecha:* ${i.fechaEntrega}\n`;
                msg += `  ⏰ *Hora:* ${i.horaEntrega}\n`;
            }
            
            // ✅ GANACHE
            if (i.tieneGanache) {
                msg += `  🍫 *Con ganache de chocolate*\n`;
            }
            
            if (i.requiereAnticipo) msg += `  ✨ Requiere 30% anticipo\n`;
        });
        msg += '\n';
    }
    
    // Calcular totales
    let totalCUP = 0;
    let totalUSD = 0;
    let anticipoCUP = 0;
    let anticipoUSD = 0;
    
    cart.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        if (item.moneda === 'CUP') {
            totalCUP += subtotal;
            if (item.requiereAnticipo) {
                anticipoCUP += subtotal * (item.porcentajeAnticipo / 100);
            }
        } else {
            totalUSD += subtotal;
            if (item.requiereAnticipo) {
                anticipoUSD += subtotal * (item.porcentajeAnticipo / 100);
            }
        }
    });
    
    const restoCUP = totalCUP - anticipoCUP;
    const restoUSD = totalUSD - anticipoUSD;
    
    msg += `💰 *RESUMEN DE PAGO*\n`;
    if (totalCUP > 0) {
        msg += `\n*CUP:*\n`;
        msg += `Total: ${totalCUP.toLocaleString()} CUP\n`;
        if (anticipoCUP > 0) {
            msg += `Anticipo (30%): ${anticipoCUP.toLocaleString()} CUP\n`;
            msg += `Resto: ${restoCUP.toLocaleString()} CUP\n`;
        }
    }
    
    if (totalUSD > 0) {
        msg += `\n*USD:*\n`;
        msg += `Total: $${totalUSD.toLocaleString()} USD\n`;
        if (anticipoUSD > 0) {
            msg += `Anticipo (30%): $${anticipoUSD.toLocaleString()} USD\n`;
            msg += `Resto: $${restoUSD.toLocaleString()} USD\n`;
        }
    }
    
    window.open(`https://wa.me/5356552059?text=${encodeURIComponent(msg)}`, '_blank');
}

function toggleCarrito(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    if (cartPanel) {
        cartPanel.classList.toggle('active');
        
        if (cartPanel.classList.contains('active')) {
            document.body.classList.add('carrito-abierto');
        } else {
            document.body.classList.remove('carrito-abierto');
        }
    }
}

function cerrarCarrito(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    if (cartPanel) {
        cartPanel.classList.remove('active');
        document.body.classList.remove('carrito-abierto');
    }
}

document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const categoria = btn.dataset.categoria;
        if (categoria === 'personalizados') {
            cargarProductos(categoria, 'todos-personalizados');
        } else {
            cargarProductos(categoria);
        }
    });
});

document.querySelectorAll('.subcategoria-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subcategoria = btn.dataset.subcategoria;
        cargarProductos('personalizados', subcategoria);
    });
});

if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', toggleCarrito);
}

if (cartFloatBtn) {
    cartFloatBtn.addEventListener('click', toggleCarrito);
}

if (cartPanelClose) {
    cartPanelClose.addEventListener('click', cerrarCarrito);
}

document.addEventListener('click', (e) => {
    if (cartPanel && cartPanel.classList.contains('active')) {
        const isClickInsidePanel = cartPanel.contains(e.target);
        const isClickOnToggleBtn = cartToggleBtn && (cartToggleBtn === e.target || cartToggleBtn.contains(e.target));
        const isClickOnFloatBtn = cartFloatBtn && (cartFloatBtn === e.target || cartFloatBtn.contains(e.target));
        
        if (!isClickInsidePanel && !isClickOnToggleBtn && !isClickOnFloatBtn) {
            cerrarCarrito(e);
        }
    }
});

document.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.classList.contains('minus') || target.closest('.minus')) {
        const btn = target.classList.contains('minus') ? target : target.closest('.minus');
        const index = btn.dataset.index;
        if (index !== undefined && cart[index]) {
            e.preventDefault();
            e.stopPropagation();
            if (cart[index].cantidad > 1) {
                cart[index].cantidad--;
            } else {
                cart.splice(index, 1);
            }
            actualizarCarrito();
        }
    }
    
    if (target.classList.contains('plus') || target.closest('.plus')) {
        const btn = target.classList.contains('plus') ? target : target.closest('.plus');
        const index = btn.dataset.index;
        if (index !== undefined && cart[index]) {
            e.preventDefault();
            e.stopPropagation();
            cart[index].cantidad++;
            actualizarCarrito();
        }
    }
    
    if (target.classList.contains('remove') || target.closest('.remove')) {
        const btn = target.classList.contains('remove') ? target : target.closest('.remove');
        const index = btn.dataset.index;
        if (index !== undefined) {
            e.preventDefault();
            e.stopPropagation();
            cart.splice(index, 1);
            actualizarCarrito();
        }
    }
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

(function() {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        
        const mensaje = document.createElement('div');
        mensaje.textContent = '🔒 Contenido protegido © Cerchio di Cioccolato';
        mensaje.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #5C3E2E;
            color: white;
            padding: 12px 24px;
            border-radius: 40px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            z-index: 9999;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            border-left: 4px solid #C6A15B;
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.3s ease;
            pointer-events: none;
        `;
        
        document.body.appendChild(mensaje);
        
        setTimeout(() => {
            mensaje.style.opacity = '1';
            mensaje.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            mensaje.style.opacity = '0';
            mensaje.style.transform = 'translateX(30px)';
            setTimeout(() => mensaje.remove(), 300);
        }, 2000);
    });

    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'c') e.preventDefault();
    });
})();

cargarProductos('todos');
actualizarCarrito();

const modalHTML = `
<div id="modalPersonalizacion" class="modal-personalizacion" style="display: none;">
    <div class="modal-contenido">
        <span class="modal-cerrar">&times;</span>
        <div class="modal-header">
            <i class="fas fa-pencil-alt" style="color: var(--dorado, #C6A15B); font-size: 1.5rem;"></i>
            <h3>Detalles de tu Pedido</h3>
        </div>
        <div id="modal-producto-info" class="modal-producto-info-card"></div>
        <form id="form-personalizacion">
            <div id="campo-personalizacion-container" class="campo-personalizacion">
                <label for="detalles">
                    <i class="fas fa-paint-brush"></i> Detalles de personalización:
                </label>
                <textarea id="detalles" name="detalles" rows="4" placeholder="Ej: Tema de superhéroes, colores azul y blanco, frase 'Feliz Cumpleaños Juan'..."></textarea>
                <small class="campo-ayuda">Cuéntanos tu idea, colores, temática o frase especial</small>
            </div>
            
            <div class="campo-cantidad">
                <label for="cantidad">
                    <i class="fas fa-cubes"></i> Cantidad:
                </label>
                <div class="cantidad-selector">
                    <button type="button" class="cantidad-btn menos" id="cantidadMenos">−</button>
                    <input type="number" id="cantidad" name="cantidad" value="1" min="1" max="99" step="1" readonly>
                    <button type="button" class="cantidad-btn mas" id="cantidadMas">+</button>
                </div>
                <small class="campo-ayuda" id="cantidadAyuda"></small>
            </div>
            
            <div id="campo-ganache-container" class="campo-ganache oculto">
                <label for="ganache">
                    <i class="fas fa-candy-cane"></i> Cobertura especial:
                </label>
                <div class="ganache-opciones">
                    <label class="ganache-option">
                        <input type="checkbox" id="ganache" name="ganache"> 
                        <span>Agregar cobertura interna de ganache de chocolate <strong id="ganache-precio">(+3,500 CUP)</strong></span>
                    </label>
                </div>
                <small class="campo-ayuda">Ideal para un sabor más intenso y textura cremosa</small>
            </div>
            
            <div class="fila-dos-columnas">
                <div class="campo-fecha">
                    <label for="fecha">
                        <i class="fas fa-calendar-alt"></i> Fecha de entrega:
                    </label>
                    <input type="date" id="fecha" name="fecha" required>
                </div>

                <div class="campo-hora">
                    <label for="hora">
                        <i class="fas fa-clock"></i> Hora de entrega:
                    </label>
                    <input type="time" id="hora" name="hora" required>
                </div>
            </div>

            <button type="submit" class="btn-modal-agregar">
                <i class="fas fa-check-circle"></i> Agregar a Mi selección 
            </button>
        </form>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

const modalStyles = `
<style>
.modal-personalizacion {
    display: none; 
    position: fixed; 
    z-index: 9999; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(92, 62, 46, 0.7);
    backdrop-filter: blur(5px);
    align-items: flex-start;
    justify-content: center;
    animation: fadeIn 0.3s ease;
    overflow-y: auto;
    padding: 10px 0;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-personalizacion[style*="display: block"] {
    display: flex !important;
}

.modal-contenido {
    background: linear-gradient(145deg, #ffffff 0%, #fcf9f7 100%);
    margin: auto;
    padding: 25px 25px 30px 25px;
    border: none;
    border-radius: 25px;
    width: 90%;
    max-width: 550px;
    max-height: none;
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
    position: relative;
    font-family: 'Montserrat', sans-serif;
}

.modal-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(198, 161, 91, 0.2);
    padding-bottom: 10px;
}

.modal-header h3 {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Playfair Display', serif;
    color: var(--chocolate, #5C3E2E);
    margin: 0;
}

.modal-header i {
    font-size: 1.2rem !important;
    color: var(--dorado, #C6A15B);
}

.modal-cerrar {
    color: #C6A15B;
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(198, 161, 91, 0.1);
    z-index: 10;
}

.modal-cerrar:hover {
    color: #5C3E2E;
    background: rgba(198, 161, 91, 0.2);
    transform: rotate(90deg);
}

.modal-producto-info-card {
    background: linear-gradient(135deg, #f5efe9 0%, #f0e8e0 100%);
    padding: 12px 18px;
    border-radius: 15px;
    border-left: 4px solid var(--dorado, #C6A15B);
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(92, 62, 46, 0.1);
}

.modal-producto-info-card strong {
    color: var(--chocolate, #5C3E2E);
    display: block;
    margin-bottom: 4px;
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
}

.modal-producto-info-card p {
    color: #5C3E2E;
    margin: 3px 0;
    font-size: 0.85rem;
    line-height: 1.3;
    opacity: 0.9;
}

.modal-producto-info-card p:last-child {
    margin-top: 6px;
    font-weight: 600;
    color: var(--dorado, #C6A15B);
    font-size: 1rem;
}

#form-personalizacion {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.campo-personalizacion,
.campo-cantidad,
.campo-ganache,
.campo-fecha,
.campo-hora {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}

.campo-cantidad {
    margin-bottom: 5px;
}

.cantidad-selector {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f5f5f5;
    border-radius: 50px;
    padding: 5px;
    width: fit-content;
    border: 1px solid #e0d6cc;
}

.cantidad-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: white;
    color: var(--chocolate, #5C3E2E);
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: all 0.2s ease;
}

.cantidad-btn:hover {
    background: var(--dorado, #C6A15B);
    color: white;
}

#cantidad {
    width: 60px;
    text-align: center;
    border: none;
    background: transparent;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--chocolate, #5C3E2E);
    padding: 8px 0;
    -moz-appearance: textfield;
}

#cantidad::-webkit-outer-spin-button,
#cantidad::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.campo-ganache {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
    padding: 15px;
    background: #f9f3ec;
    border-radius: 12px;
    border-left: 4px solid #C6A15B;
}

.campo-ganache > label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #5C3E2E;
    font-size: 0.9rem;
    margin-bottom: 5px;
}

.ganache-opciones {
    display: flex;
    align-items: center;
}

.ganache-option {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    width: 100%;
}

.ganache-option input[type="checkbox"] {
    width: 18px !important;
    height: 18px !important;
    min-width: 18px !important;
    max-width: 18px !important;
    accent-color: #C6A15B !important;
    cursor: pointer !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 1px solid #5C3E2E !important;
    border-radius: 3px !important;
    background: white !important;
    -webkit-appearance: checkbox !important;
    appearance: checkbox !important;
    opacity: 1 !important;
}

.ganache-option input[type="checkbox"]:checked {
    background: #C6A15B !important;
    accent-color: #C6A15B !important;
}

.ganache-option span {
    color: #5C3E2E;
    font-size: 0.95rem;
    line-height: 1.4;
    flex: 1;
}

.ganache-option strong {
    color: #C6A15B;
    font-weight: 700;
    margin-left: 5px;
}

.campo-ganache .campo-ayuda {
    font-size: 0.75rem;
    color: #a79e94;
    margin-top: 5px;
    font-style: italic;
}

.fila-dos-columnas {
    display: flex !important;
    flex-direction: row !important;
    gap: 15px !important;
    width: 100% !important;
    flex-wrap: nowrap !important;
}

.fila-dos-columnas .campo-fecha,
.fila-dos-columnas .campo-hora {
    flex: 1 1 50% !important;
    min-width: 0 !important;
    max-width: 50% !important;
}

#form-personalizacion label {
    font-weight: 600;
    color: var(--chocolate, #5C3E2E);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 2px;
}

#form-personalizacion label i {
    color: var(--dorado, #C6A15B);
    font-size: 0.9rem;
    width: 16px;
}

#form-personalizacion input {
    padding: 10px 12px;
    border: 1.5px solid #e8e0d8;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    width: 100%;
    box-sizing: border-box;
    background: white;
    height: 42px;
}

#form-personalizacion textarea {
    padding: 10px 12px;
    border: 1.5px solid #e8e0d8;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    width: 100%;
    box-sizing: border-box;
    background: white;
    min-height: 60px;
    max-height: 100px;
    resize: vertical;
}

#form-personalizacion input:focus, 
#form-personalizacion textarea:focus {
    outline: none;
    border-color: var(--dorado, #C6A15B);
    box-shadow: 0 0 0 3px rgba(198, 161, 91, 0.1);
}

.campo-ayuda {
    font-size: 0.75rem;
    color: #a79e94;
    margin-top: 3px;
    font-style: italic;
}

.btn-modal-agregar {
    background: linear-gradient(135deg, #C6A15B 0%, #b38f4a 100%);
    color: white;
    border: none;
    padding: 14px 20px;
    border-radius: 40px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 8px 15px -5px rgba(198, 161, 91, 0.3);
    width: 100%;
    height: 48px;
}

.btn-modal-agregar:hover {
    background: linear-gradient(135deg, #b38f4a 0%, #9e7b3f 100%);
    transform: translateY(-2px);
    box-shadow: 0 12px 20px -5px rgba(198, 161, 91, 0.4);
}

.oculto {
    display: none !important;
}

@media (max-width: 768px) {
    .modal-contenido {
        width: 95%;
        margin: 10px auto;
        padding: 20px 15px;
    }
    
    .fila-dos-columnas {
        flex-direction: column !important;
        gap: 15px !important;
    }
    
    .fila-dos-columnas .campo-fecha,
    .fila-dos-columnas .campo-hora {
        max-width: 100% !important;
    }
}

.modal-contenido::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #C6A15B, #E8D3B0, #C6A15B);
    border-radius: 25px 25px 0 0;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);

const modal = document.getElementById('modalPersonalizacion');
const modalClose = document.querySelector('.modal-cerrar');
const modalForm = document.getElementById('form-personalizacion');
const modalProductoInfo = document.getElementById('modal-producto-info');
const campoPersonalizacionContainer = document.getElementById('campo-personalizacion-container');
const campoGanacheContainer = document.getElementById('campo-ganache-container');
const ganachePrecio = document.getElementById('ganache-precio');
const cantidadAyuda = document.getElementById('cantidadAyuda');

let productoSeleccionado = null;

const productosConGanache = [13, 14, 15];

function esProductoPersonalizado(producto) {
    return producto.nombre.toLowerCase().includes('personalizada') || 
           producto.categoria === 'personalizados' ||
           producto.categoria === 'mesas';
}

function abrirModal(producto) {
    productoSeleccionado = producto;
    
    modalProductoInfo.innerHTML = `
        <strong>${producto.nombre}</strong>
        <p>${producto.detalles || ''}</p>
        <p>Precio: ${producto.precioTexto}</p>
    `;
    
    if (esProductoPersonalizado(producto)) {
        campoPersonalizacionContainer.classList.remove('oculto');
        document.getElementById('detalles').required = true;
    } else {
        campoPersonalizacionContainer.classList.add('oculto');
        document.getElementById('detalles').required = false;
    }
    
    if (productosConGanache.includes(producto.id)) {
        campoGanacheContainer.classList.remove('oculto');
        document.getElementById('ganache').checked = false;
        
        if (producto.precioGanache) {
            const incremento = producto.precioGanache - producto.precio;
            ganachePrecio.textContent = `(+${incremento.toLocaleString()} CUP)`;
        }
    } else {
        campoGanacheContainer.classList.add('oculto');
        document.getElementById('ganache').checked = false;
    }
    
    if (producto.nombre === "Pie") {
        cantidadAyuda.textContent = "Cada unidad equivale a 1 pie de 22cm";
    } else if (producto.categoria === "dulces" && producto.nombre !== "Pie") {
        cantidadAyuda.textContent = "Cada unidad equivale a una docena (12 unidades)";
    } else {
        cantidadAyuda.textContent = "";
    }
    
    document.getElementById('cantidad').value = 1;
    modalForm.reset();
    
    modal.style.display = 'block';
    document.body.classList.add('carrito-abierto');
}

function cerrarModal() {
    modal.style.display = 'none';
    productoSeleccionado = null;
    document.body.classList.remove('carrito-abierto');
}

modalClose.addEventListener('click', cerrarModal);
window.addEventListener('click', (event) => {
    if (event.target == modal) cerrarModal();
});

const cantidadInput = document.getElementById('cantidad');
const cantidadMenos = document.getElementById('cantidadMenos');
const cantidadMas = document.getElementById('cantidadMas');

if (cantidadMenos && cantidadMas && cantidadInput) {
    cantidadMenos.addEventListener('click', () => {
        let valor = parseInt(cantidadInput.value) || 1;
        if (valor > 1) cantidadInput.value = valor - 1;
    });
    
    cantidadMas.addEventListener('click', () => {
        let valor = parseInt(cantidadInput.value) || 1;
        if (valor < 99) cantidadInput.value = valor + 1;
    });
}

modalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!productoSeleccionado) return;

    const detallesPersonalizacion = document.getElementById('detalles').value;
    const cantidad = parseInt(document.getElementById('cantidad').value) || 1;
    const fechaEntrega = document.getElementById('fecha').value;
    const horaEntrega = document.getElementById('hora').value;
    const tieneGanache = document.getElementById('ganache').checked;

    if (new Date(fechaEntrega) < new Date().setHours(0,0,0,0)) {
        alert('La fecha de entrega no puede ser en el pasado.');
        return;
    }

    let precioFinal = productoSeleccionado.precio;
    let precioTextoFinal = productoSeleccionado.precioTexto;

    if (tieneGanache && productosConGanache.includes(productoSeleccionado.id) && productoSeleccionado.precioGanache) {
        precioFinal = productoSeleccionado.precioGanache;
        if (productoSeleccionado.moneda === 'CUP') {
            precioTextoFinal = `${precioFinal.toLocaleString()} CUP (con ganache)`;
        }
    }

    const itemParaCarrito = {
        ...productoSeleccionado,
        precio: precioFinal,
        precioTexto: precioTextoFinal,
        personalizacion: esProductoPersonalizado(productoSeleccionado) ? 
                        (detallesPersonalizacion || "Sin detalles específicos") : 
                        "No aplica",
        fechaEntrega,
        horaEntrega,
        cantidad,
        tieneGanache
    };

    const existingIndex = cart.findIndex(i => 
        i.nombre === itemParaCarrito.nombre && 
        i.moneda === itemParaCarrito.moneda &&
        i.fechaEntrega === itemParaCarrito.fechaEntrega &&
        i.horaEntrega === itemParaCarrito.horaEntrega &&
        i.personalizacion === itemParaCarrito.personalizacion &&
        i.tieneGanache === itemParaCarrito.tieneGanache
    );

    if (existingIndex > -1) {
        cart[existingIndex].cantidad += itemParaCarrito.cantidad;
    } else {
        cart.push(itemParaCarrito);
    }

    actualizarCarrito();
    
    document.querySelectorAll('.btn-interes').forEach(btn => {
        if (btn.dataset.nombre === productoSeleccionado.nombre) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Agregado';
            btn.style.background = 'var(--dorado)';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = 'var(--chocolate)';
            }, 500);
        }
    });

    cerrarModal();
});

function configurarBotonesParaModal() {
    document.querySelectorAll('.btn-interes').forEach(btn => {
        const nuevoBoton = btn.cloneNode(true);
        btn.parentNode.replaceChild(nuevoBoton, btn);
        
        nuevoBoton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productoOriginal = productos.find(p => p.nombre === this.dataset.nombre);
            
            abrirModal({
                id: productoOriginal ? productoOriginal.id : 0,
                nombre: this.dataset.nombre,
                precio: parseInt(this.dataset.precio) || 0,
                precioGanache: productoOriginal ? productoOriginal.precioGanache : null,
                moneda: this.dataset.moneda,
                precioTexto: this.dataset.preciotexto,
                requiereAnticipo: this.dataset.anticipo === 'true',
                porcentajeAnticipo: parseInt(this.dataset.porcentaje) || 0,
                detalles: this.dataset.detalles,
                categoria: productoOriginal ? productoOriginal.categoria : ''
            });
        });
    });
}

const cargarProductosOriginal = window.cargarProductos;
window.cargarProductos = function(categoria, subcategoria) {
    cargarProductosOriginal(categoria, subcategoria);
    setTimeout(configurarBotonesParaModal, 100);
};

setTimeout(configurarBotonesParaModal, 500);
document.querySelectorAll('.subcategoria-btn').forEach(btn => {
    btn.addEventListener('click', () => setTimeout(configurarBotonesParaModal, 200));
});
