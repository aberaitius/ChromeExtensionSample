document.addEventListener('DOMContentLoaded', function() {
  const quoteElement = document.getElementById('quote');
  const newQuoteButton = document.getElementById('new-quote');

  async function getQuote() {
    console.log('Fetching a new quote...');
    try {
      const response = await fetch('https://api.quotable.io/random');
      console.log('Response received:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log('Quote data:', data);
      quoteElement.textContent = data.content;
    } catch (error) {
      console.error('Error fetching quote:', error);
      quoteElement.textContent = 'Could not fetch a new quote. Please try again later.';
    }
  }

  newQuoteButton.addEventListener('click', getQuote);

  // Fetch a quote when the popup loads
  getQuote();
});
