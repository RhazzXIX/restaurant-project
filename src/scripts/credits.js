import toastNCoffee from '../images/bread-coffee.jpg';//juAnnun
import board from '../images/menu-board.jpg'; //miti
import table from '../images/bread-mug-laptop.jpg'

const creditsContent = (function () {
  const creditsSection = document.createElement("section");
  creditsSection.setAttribute("id", "credits");
  
  const iconText = document.createElement('p');
  iconText.textContent = 'Icons are from:'
  const iconSite =document.createElement('a')
  iconSite.innerHTML = '<em>Material Design Icons</em>'
  iconSite.setAttribute('href', 'https://materialdesignicons.com/');
  creditsSection.appendChild(iconText);
  creditsSection.appendChild(iconSite);
  
  const imageText = document.createElement('h2');
  imageText.textContent = 'Images'
  creditsSection.appendChild(imageText);

  const cardHolder = document.createElement('div')
  cardHolder.classList.add('imageCards');
  creditsSection.appendChild(cardHolder);

  
  for (let i = 0; i <= 2; i += 1) {
    const imgCard = document.createElement('div');
    imgCard.classList.add('card');
    const image = new Image();
    image.classList.add('image-credit');
    const anchor = document.createElement('a');
    const p = document.createElement('p');
    p.innerHTML = 'Photo by'
    const name = document.createElement('em');
    const nameAnchor = document.createElement('a');
    switch (i) {
      case 1:
        image.src = board;
        image.setAttribute('alt', 'Pastries on edge of Table');
        anchor.appendChild(image)
        anchor.setAttribute('href', 'https://unsplash.com/photos/qYreP9QOdrk')
        imgCard.appendChild(anchor);
        name.textContent = 'Miti'
        nameAnchor.setAttribute('href', 'https://unsplash.com/@mitifotos');
        break;
      case 2:
        image.src = table;
        image.setAttribute('alt', 'Laptop bread and mug');
        anchor.appendChild(image)
        anchor.setAttribute('href', 'https://www.pexels.com/photo/blue-ceramic-mug-beside-cupcake-1340462/')
        imgCard.appendChild(anchor);
        name.textContent = 'Lisa Fotios'
        nameAnchor.setAttribute('href', 'https://www.pexels.com/@fotios-photos/');
        break;
      default:
        image.src = toastNCoffee;
        image.setAttribute('alt', 'Toast and Coffee');
        anchor.appendChild(image)
        anchor.setAttribute('href', 'https://pixabay.com/photos/coffee-with-milk-bread-and-butter-2435254/')
        imgCard.appendChild(anchor);
        name.textContent = 'Juliana Annunciato'
        nameAnchor.setAttribute('href', 'https://pixabay.com/users/juannun-5716625/');
    }
    imgCard.appendChild(p);
    nameAnchor.appendChild(name);
    imgCard.appendChild(nameAnchor);
    cardHolder.appendChild(imgCard);
  }


  return {creditsSection}
}) ();

export default creditsContent;