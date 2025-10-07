async function fetchCryptoPrices() {
    try {
        const response = await fetch('http://localhost:8080/crypto');
        const data = await response.json();

        const btcPrice = data.data[0].quote.USD.price;
        const ethPrice = data.data[1].quote.USD.price;

        document.getElementById('btc-price').textContent = `$${btcPrice.toFixed(2)}`;
        document.getElementById('eth-price').textContent = `$${ethPrice.toFixed(2)}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('btc-price').textContent = 'Failed to load price';
        document.getElementById('eth-price').textContent = 'Failed to load price';
    }
}

fetchCryptoPrices();
