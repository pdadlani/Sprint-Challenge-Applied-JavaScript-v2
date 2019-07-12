// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  // outcome if promise is a success
  .then(data => {
    // saving only relevant data from axios.get to variable
    articlesByTopic = data.data.articles;
    // passing in object of articles by topic into topics Component
    topicsComponent(articlesByTopic);
  })

  // outcome if promise is a failure
  .catch(error => {
    console.log('There is an error in your Cards/index.js file', error)
  })

// takes object of articles by topic
function topicsComponent(objectArticlesByTopic) {
  // for each of the topics
  Object.keys(objectArticlesByTopic).forEach(topic => {
    // select all articles of that topic
    let articles = objectArticlesByTopic[topic];
    // pass each of the articles into cardComponent, with article object and topic
    articles.forEach(article => cardsContainer.append(cardComponent(article, topic)));
  })
}

function cardComponent(articleObj, topic) {
  // create the elements
  const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    imgSrc = document.createElement('img'),
    authorName = document.createElement('span');

  // set the content
  headline.textContent = articleObj.headline;
  imgSrc.src = articleObj.authorPhoto;
  authorName.textContent = articleObj.authorName;

  // set the structure
  card.append(headline, author);
  author.append(imgContainer, authorName);
  imgContainer.append(imgSrc);

  // set the style aka classes
  card.classList.add('card', topic);
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  return card;
}