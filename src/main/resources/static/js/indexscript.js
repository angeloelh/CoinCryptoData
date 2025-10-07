async function fetchCryptoPrices() {
    try {
        const res = await fetch('/crypto');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();

        const list = json.data; // <- tableau
        const btc = list.find(c => c.symbol === 'BTC');
        const eth = list.find(c => c.symbol === 'ETH');

        document.getElementById('btc-price').textContent =
            btc ? `$${btc.quote.USD.price.toFixed(2)}` : 'N/A';

        document.getElementById('eth-price').textContent =
            eth ? `$${eth.quote.USD.price.toFixed(2)}` : 'N/A';
    } catch (e) {
        console.error(e);
        document.getElementById('btc-price').textContent = 'Failed to load price';
        document.getElementById('eth-price').textContent = 'Failed to load price';
    }
}

fetchCryptoPrices();
