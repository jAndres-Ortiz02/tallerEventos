// Evento mouseover
document.getElementById("mouseParagraph").addEventListener("mouseover", function() {
    this.classList.add("highlight");
  });
  
  // Evento mouseleave
  document.getElementById("mouseParagraph").addEventListener("mouseleave", function() {
    this.classList.remove("highlight");
  });
  
  // Evento contextmenu
  document.getElementById("mouseParagraph").addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Evita que aparezca el menú contextual del navegador
    alert("¡Has abierto el menú contextual!");
  });
  
  // Evento submit
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert("¡Formulario enviado!");
  });
  
  // Evento mouseenter
  document.getElementById("hoverDiv").addEventListener("mouseenter", function() {
    this.style.backgroundColor = "lightgreen";
  });
  
  // Evento focusin
  document.getElementById("textInput").addEventListener("focusin", function() {
    console.log("El input o uno de sus elementos secundarios ha recibido el enfoque");
  });
  
  // Evento focusout
  document.getElementById("textInput").addEventListener("focusout", function() {
    console.log("El input o uno de sus elementos secundarios ha perdido el enfoque");
  });
  
  // Evento dblclick
  document.getElementById("clickBtn").addEventListener("dblclick", function() {
    alert("¡Doble clic!");
  });
  
  // Evento keypress
  document.addEventListener("keypress", function(event) {
    console.log("Tecla presionada:", event.key);
  });

  // Evento de movimiento del ratón
document.getElementById("mouseParagraph").addEventListener("mousemove", function(event) {
    console.log("Coordenadas del mouse:", event.clientX, event.clientY);
  });
  
  // OnClick
  function eventOnClick() {
    alert("Prueba onclick!");
}