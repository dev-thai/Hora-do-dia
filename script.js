msg = window.document.getElementById('msg');
img = window.document.getElementById('imagem');
hora = new Date().getHours();

msg.innerHTML = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

foto = hora < 12 ? "" : hora < 18 ? "https://cdn.pixabay.com/photo/2018/10/05/14/39/sunset-3726030__340.jpg" : "https://cdn.pixabay.com/photo/2021/06/26/06/52/moon-6365467__340.jpg";

img.src = foto;