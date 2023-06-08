let bandNames = ['The Rolling Stones', 'Metallica', 'Aerosmith', 'The Beatles', 'AC/DC'];

// Remove articles from band names
function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');

  // Check if the first word is an article, and remove it
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }

  return words.join(' ');
}

// Sort band names without articles
bandNames = bandNames.map(removeArticles).sort();

// Create the list of band names
const ul = document.createElement('ul');
ul.id = 'band';

bandNames.forEach(function(name) {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Append the list to the document body
document.body.appendChild(ul);