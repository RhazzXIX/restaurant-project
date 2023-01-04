const testText = document.querySelector('div#content');
testText.textContent = 'Click me!';

testText.addEventListener('click', (e) => {
  e.stopPropagation();
  if (testText.textContent === 'Click me!') {
    testText.textContent = 'Hello Up-Skilling World!';
  } else {
    console.log('test');
    testText.textContent = 'Click me!';
  }
});
