// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

  { text: "La vida no es fácil,", time: 3 },
  { text: "y sé que a veces sientes que llevas el peso del mundo en tus hombros.", time: 13 },
  { text: "Pero quiero que recuerdes algo: eres más fuerte de lo que crees.", time: 23 },
  { text: "Has superado tantas cosas que otros ni imaginarían,", time:  33},
  { text: "y aún así sigues de pie, con una sonrisa que ilumina todo a tu alrededor.", time: 43 },
  { text: "No necesitas ser perfecta; tu valentía al enfrentar los días difíciles", time: 54 },
  { text: "es una de las cosas que te hace única.", time: 62 },
  { text: "Eres capaz de lograr lo que te propongas,", time: 73 },
  { text: "porque dentro de ti hay un poder increíble.", time: 83 },
  { text: "Nunca subestimes la capacidad que tienes para cambiar tu vida y la de quienes te rodean.", time: 93 },
  { text: "Sigue adelante, no por los demás, sino por ti misma.", time: 103 },
  { text: "Hazlo porque mereces ser feliz,", time: 113 },
  { text: "porque tu historia aún tiene muchas páginas por escribir.", time: 123 },
  { text: "Cree en ti, eres capaz, eres valiosa, eres fuerza", time: 133 },
  { text: "y ameritas todo lo bueno que la vida tiene para ofrecer.", time: 143 },
  { text: "ANIMO, RESPIRA Y CONTINUA", time: 164 },

  /*La idea principal de este mensaje es transmitir un mensaje de fortaleza, 
  autoconfianza y perseverancia. A través de las palabras, se enfatiza que, aunque 
  la vida pueda ser difícil, la persona posee una fuerza interna increíble que le 
  permite superar obstáculos y seguir adelante. La clave es creer en uno mismo, 
  reconocer el propio valor y la capacidad para transformar la vida y el entorno. 
  Se resalta que cada desafío superado suma a la belleza y la fuerza personal, 
  y que el futuro está lleno de posibilidades y oportunidades. */

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);