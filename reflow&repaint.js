//reflow is the number of operations that have been done
//repaint is the number of times the pixels of the webpage has changed
//any excecution depends on reflow and repaint as the performance is inversly propotional to the sum of reflow and repaint

//to reduce the number of reflows we use document fragment
//this method creates a section in the document but gets appended at last, so reflow is only once
let fragment = document.createDocumentFragment();
// This code triggers a reflow for every paragraph element
for (let i = 0; i < 100; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'New paragraph';
    document.body.appendChild(paragraph);
  }
//this utilises document fragment
const fragments = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'New paragraph';
  fragment.appendChild(paragraph);
}
document.body.appendChild(fragment);
