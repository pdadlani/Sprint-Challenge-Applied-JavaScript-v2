// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());

function Header() {
  // create the elements
  const header = document.createElement('div'),
    date = document.createElement('span'),
    lambdaH1 = document.createElement('h1'),
    temp = document.createElement('span');

  // set the content
  date.textContent = 'SMARCH 28, 2019';
  lambdaH1.textContent = 'Lambda Times';
  temp.textContent = '98°';

  // set up the structure of the elements
  header.append(date, lambdaH1, temp);

  //set the styles aka class names
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  return header;
}
