const rwClient  = require("./twitterClient");
const path      = require('path');
const imagenes  = require(path.join(__dirname, 'imagenes.js'));
const fs        = require('fs-extra');
const https     = require("https");

let ultima = null;
let post;

//FUNCIÓN PARA TWITTEAR LA IMAGEN
const tweet = async (ruta, fuente) => {
    try {
        const mediaId = await rwClient.v1.uploadMedia(ruta);
        if ( fuente != '' ){
            post = rwClient.v2.tweet("Artist: "+fuente+'\n'+"#Asuka #Evangelion #アスカ", { media: { media_ids: [mediaId] } });
        }else{
            post = rwClient.v2.tweet("#Asuka #Evangelion #アスカ", { media: { media_ids: [mediaId] } });
        }
        await post;
        console.log("Image uploaded...")
    } catch (error) {
        console.log(error)
    }
}

// FUNCIÓN PARA LLENAR MI ARREGLO CON IMÁGENES
fs.readdir(__dirname + '/asukaImages', function(err, files) {
  if (err){
    console.log(err);
  }else{
    const imagenes = [];
    files.forEach( function(f) {
      imagenes.push(f);
    });
  }
});

//ME ENTREGA UNA IMAGEN AL AZAR DENTRO DEL ARREGLO
let randomImagen = function (imagenes){
    if ( ultima == null ) {
        random = Math.floor(Math.random() * imagenes.length);
        ultima = random;
    }else{
        do {
            random = Math.floor(Math.random() * imagenes.length);
        } while ( ultima==random );
        ultima = random;
    }
    return imagenes[random];
}

//RESCATA FUENTE Y RUTA DE LA IMAGEN, Y LUEGO LA ENVÍA A LA FUNCIÓN PARA TWITTEAR
function subirImagen(imagenes){
    console.log('Opening an image...');
    let imagen = randomImagen(imagenes)
    let imagenPath = path.join(__dirname, '/asukaImages/' + imagen.file );
    let fuente = imagen.source;

    console.log('Uploading an image...');
    tweet(imagenPath, fuente);   
    
  }

//PINGEO A HEROKU CADA 5 MINUTOS PARA QUE NO SE CAIGA EL BOT
setInterval(function() {
    https.get("https://asukadailycl.herokuapp.com/");
    console.log("conectando")
}, 300000);

//FUNCIÓN PARA SUBIR LAS IMAGENES CADA X HORAS
setInterval(function(){
    subirImagen(imagenes)
}, 3600000 * 5)

//FUNCION INICIAL QUE SE DISPARA AL INICIALIZAR EL BOT.
subirImagen(imagenes);


//FELIZ JUEVES. 

function checkDate() {
    let date = new Date();
    console.log(date.getDay());
    if(date.getDay() === 4) {
        let felizPath = path.join(__dirname, '/asukaImages/felizjueves.gif');
        tweet(felizPath, '');
        console.log("¡FELIZ JUEVES!");
    }else{
        console.log("NO ES JUEVES:(")
    }
}

//VERIFICA UNA VEZ CADA 24 HORAS SI ES JUEVES O NO.
dateLoop = setInterval(function() {
    console.log("¿Es jueves?");
    checkDate();
},3600000*24);

checkDate();


