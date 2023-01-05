// import board from '../images/menu-board.jpg'

const menuContent = (function () {
  const menuSection = document.createElement("section");
  menuSection.setAttribute("id", "menu");

  const BreadText = document.createElement("h1");
  BreadText.innerHTML = "MENU";
  menuSection.appendChild(BreadText);

  for (let i = 0; i <= 3; i += 1) {
    const menuBlock = document.createElement("div");
    const header = document.createElement("h3");
    const list = document.createElement("ul");

    switch (i) {
      case 1:
        header.textContent = "Sandwhich / Cake";
        for (let point = 0; point <= 6; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Garlic Bread                ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Croissants                  ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Crawfish & Bread            ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 4:
              item.innerHTML = `<pre>Classic Vanilla Cake        ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 5:
              item.innerHTML = `<pre>Chocolate Lava Cake         ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 6:
              item.innerHTML = `<pre>Strawberry Short Cake       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Roast Beef Sandwich         ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
        break;
      case 2:
        header.textContent = "Coffee";
        for (let point = 0; point <= 6; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Americano                   ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Espresso                    ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Doppio                      ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 4:
              item.innerHTML = `<pre>Latte                       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 5:
              item.innerHTML = `<pre>Cappuccino                  ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 6:
              item.innerHTML = `<pre>Mocha                       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Black                       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
        break;
      case 3:
        header.textContent = "Other Beverages";
        for (let point = 0; point <= 4; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Watermelon Juice            ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Lemonade Jolt               ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Orange Grove                ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 4:
              item.innerHTML = `<pre>Budweiser                   ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Bottled Water               ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
        break;
      default:
        header.textContent = "Pasta";
        for (let point = 0; point <= 3; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Fettuccine Alfredo          ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Chicken Tetrazzini          ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Steakhouse Pasta            ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Meatballs and Spaghetti     ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
    }
    menuBlock.appendChild(header);
    menuBlock.appendChild(list);
    menuSection.appendChild(menuBlock);
  }

  return { menuSection };
})();

export default menuContent;
