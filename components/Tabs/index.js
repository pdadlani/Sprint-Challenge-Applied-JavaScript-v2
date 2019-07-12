// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsSec = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  // outcome if promise is a success
  .then(data => {
    // assign topics to equal node List of all tab topics
    const topics = data.data.topics;
    // iterate over each topic
    topics.forEach(topic => {
      // to create a tab component and add to DOM as child of '.topics'
      // console.log(topic);
      topic = (topic === 'node.js') ? 'node' : topic;
      // console.log(topic);
      topicsSec.appendChild(topicComponent(topic));
    })
  })

  // outcome if promise is a failure
  .catch(error => {
    console.log('There is an issue with your tabs component.', error, 'Please check Tabs.index.js')
  })


function topicComponent(topic) {
  // create the topic
  const item = document.createElement('div');
  
  // set the content
  item.textContent = topic;
  
  // set up structure - already done in promise success
  
  // set the style
  item.classList.add('tab');
  item.setAttribute('data-tab', topic);
  // console.log('tabs', topic);

  // stretch for tabs filtering
  item.addEventListener('click', event => {
    // get all the cards with data-tab attribute
    const articles = document.querySelectorAll('.card[data-tab]');
    // iterate through all the cards
    articles.forEach(article => {
      // variable for currently selected article topic
      const articleTopic = article.dataset.tab;
      // ternary operator to set style if article topic currently selected
      article.style.display = (articleTopic === topic) ? 'flex' : 'none';
    })
  })
  
  return item
}
