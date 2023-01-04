/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const testText = document.querySelector('div#content');
testText.textContent = 'Click me!';

testText.addEventListener('click', (e) => {
  e.stopPropagation;
  if (testText.textContent === 'Click me!') {
    testText.textContent = 'Hello Up-Skilling World!';
  } else {
    console.log('test');
    testText.textContent = 'Click me!';
  };
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZXN0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG50ZXN0VGV4dC50ZXh0Q29udGVudCA9ICdDbGljayBtZSEnO1xuXG50ZXN0VGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uO1xuICBpZiAodGVzdFRleHQudGV4dENvbnRlbnQgPT09ICdDbGljayBtZSEnKSB7XG4gICAgdGVzdFRleHQudGV4dENvbnRlbnQgPSAnSGVsbG8gVXAtU2tpbGxpbmcgV29ybGQhJztcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIHRlc3RUZXh0LnRleHRDb250ZW50ID0gJ0NsaWNrIG1lISc7XG4gIH07XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==