import Map from "../images/googleMap.png";
import storeLoc from "../images/store-marker.svg";
import phoneIm from "../images/phone.svg";

const contactContent = (function () {
  const contactSection = document.createElement("section");
  contactSection.setAttribute("id", "contact");

  const phoneImage = new Image();
  phoneImage.src = phoneIm;
  phoneImage.setAttribute("alt", "Phone Icon");
  phoneImage.classList.add("svg");

  const storeImage = new Image();
  storeImage.src = storeLoc;
  storeImage.setAttribute("alt", "Store Location Icon");
  storeImage.classList.add("svg");

  const map = new Image();
  map.src = Map;
  map.classList.add("map");

  const header = document.createElement("h1");
  header.innerHTML = "Contacts";

  const infoCard = document.createElement("div");
  infoCard.classList.add("card");

  const infoHeader = document.createElement("h2");
  infoHeader.innerHTML = "<em>Bread & Butter Cafe</em>";

  const open = document.createElement("h4");
  open.textContent = "Open Hours";

  const day = document.createElement("p");
  day.textContent = "Monday ~ Sunday";

  const time = document.createElement("p");
  time.textContent = "0800H ~ 2130H";

  const contacts = document.createElement("address");
  contacts.setAttribute("id", "contacts");

  const telHolder = document.createElement("div");
  telHolder.classList.add("holder");

  const telHeader = document.createElement("h4");
  telHeader.textContent = "Tel. No.:";

  const telLine = document.createElement('div');
  telLine.classList.add('line');

  const telNo = document.createElement("p");
  telNo.textContent = "(417) 555-5678";
  
  telLine.appendChild(phoneImage);
  telLine.appendChild(telNo);
  
  telHolder.appendChild(telHeader);
  telHolder.appendChild(telLine);

  const addressHolder = document.createElement("div");
  addressHolder.classList.add("holder");

  const addHeader = document.createElement("h4");
  addHeader.textContent = "Address:";

  const addressLine = document.createElement('div');
  addressLine.classList.add('line');

  const address = document.createElement("p");
  address.textContent = "155 East Wood Rd, Skill Castle, Competence Kingdom.";
  address.classList.add('left');

  addressLine.appendChild(storeImage);
  addressLine.appendChild(address);

  addressHolder.appendChild(addHeader);
  addressHolder.appendChild(addressLine);

  contacts.appendChild(telHolder);
  contacts.appendChild(addressHolder);
  contacts.appendChild(map);

  infoCard.appendChild(infoHeader);
  infoCard.appendChild(open);
  infoCard.appendChild(day);
  infoCard.appendChild(time);
  infoCard.appendChild(contacts);

  map.setAttribute("alt", "Location Image");

  contactSection.appendChild(header);
  contactSection.appendChild(infoCard);

  return { contactSection };
})();

export default contactContent;
