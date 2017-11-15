// agreguen un window.onload para que no se ejecute el código
// si no se a terminado de cargar la página completamente.

var imagesContainer = document.getElementById('images-container');
var selectPromo = document.getElementById('select-promo');
var subSelectPromo = null;

selectPromo.addEventListener('change', showCoder);
imagesContainer.addEventListener('click', showModal);

// constantes de dir promo
var CHILE4PRO = '4-chile';
var LIMA5PRO = '5-lima';
var LIMA6PRO = '6-lima';

// arrays de las promociones: alumnas
var chile4Promo = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var lima5Promo = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var lima6Promo = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

addImages(chile4Promo, CHILE4PRO);
addImages(lima5Promo, LIMA5PRO);
addImages(lima6Promo, LIMA6PRO);

// agrega imagenes de todas las promos
function addImages(arrayPromo, sede) {
  for (var i = 0; i < arrayPromo.length; i++)
    createImage(arrayPromo[i], sede);
}

// crea una imagen de la alumna
function createImage(name, promo) {
  var image = document.createElement('img');

  image.setAttribute('src', 'assets/images/' + promo + '/' + name + '.jpg');
  image.setAttribute('alt', name);

  imagesContainer.appendChild(image);
}

function showCoder(event) {
  console.log(event.target.value);
  switch (true) {
    case event.target.value === '4chile':
      imagesContainer.innerHTML = '';
      addImages(chile4Promo, CHILE4PRO);
      break;
    case event.target.value === '5lima':
      imagesContainer.innerHTML = '';
      addImages(lima5Promo, LIMA5PRO);
      break;
    case event.target.value === '6lima':
      imagesContainer.innerHTML = '';
      addImages(lima6Promo, LIMA6PRO);
      break;
    default:
      imagesContainer.innerHTML = '';
      addImages(chile4Promo, CHILE4PRO);
      addImages(lima5Promo, LIMA5PRO);
      addImages(lima6Promo, LIMA6PRO);
  }
}

function showModal(event) {
  var modal = document.createElement('div');

  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';

  event.target.style.margin = window.innerHeight/4 + 'px auto';
  event.target.style.display = 'block';

  modal.appendChild(event.target);

  document.body.appendChild(modal);

  modal.addEventListener('click', closeModal);
}

function closeModal(event) {
  event.target.parentElement.removeChild(event.currentTarget);
}
