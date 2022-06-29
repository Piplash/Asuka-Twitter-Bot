# Asuka-Twitter-Bot
# Qué es
Twitter Bot postea imágenes de Asuka cada 5 horas. Funcionando hace ya 4 años de manera casi ininterrumpida, actualmente es uno de los bots más populares de este personaje en twitter, con ya casi 30 mil seguidores. 

Pueden verlo andado aquí: https://twitter.com/asuka_dailycl

# Cómo funciona

Este bot consta básicamente de 3 partes
<ul>
  <li>Configuración API</li>
  <br>
  <p>
    Lo principal para la creación de un bot de twitter es conseguir acceso a la API de twitter. Esto podemos hacerlo aquí https://developer.twitter.com/en, explicando el     uso que daremos a la API y con que fines. Tras un par días (u horas si tienen suerte) obtendrán el acceso a las llaves necesarias para realizar la conexión. 
  </p>
  <p>
    La configuración pueden encontrarla en "config.js", donde declaramos y exportamos nuestras llaves. Posteriormente estas son utilizadas en twitterClient.js
  </p>
  <li>Hosting</li>
  <br>
  <p>
    Para que el bot corra es necesario alojarlo en algún lugar. Personalmente yo utilizo Heroku (https://www.heroku.com/) principalmente por ser gratuito, aunque cabe destacar que cuenta con ciertas limitantes, tales como el hecho de que el bot se "apaga" cada 30 minutos y es necesario "despertarlo" para que siga corriendo, o que se reinicia una vez al día. Si bien estas limitantes no perjudican el funcionamiento, es importante tenerlas en consideración.
  </p>
  <li>Librería de imágenes</li>
  <br>
  <p>
    Este bot no busca imágenes de internet. Más bien postea imágenes que uno buscó por cuenta propia y que se encuentran en la carpeta "asukaImagenes"
  </p>
  <li>Lógica de JavaScript</li>
  <br>
  <p>
    En el archivo "asuBot.js" se encuentra la lógica detrás del bot, permitiéndonos -en primer lugar- el llenado de un arreglo con todas las imágenes disponibles, el cual está en el archivo "imagenes.js" con el debido crédito a los artistas, cuando corresponde, funcionando como una especie de BBDD simple.
  </p>
  
  <p>
    Dentro de "asuBot.js" están el resto de funciones tales como obtener una imagen random del array, veriricar que la nueva imagen a postear no sea igual a la anterior, la configuración para que postee cada 5 horas y también verificar en qué día estamos para qué, cuando sea jueves, postee un saludo especial.
  </p>
  
  <p>
    Dntro de este mismo archivo existe una función que cada 5 minutos "despierta" al bot cada 5 minutos para indicar que sigue funcionando. Así prevenimos que deje de correr y se mantenga siempre activo.
  </p>
    <p>
    Finalmente, los invito a clonar el repositorio si gustan, modificarlo y que creen sus propios bots de imágenes :)!
  </p>
</ul>
