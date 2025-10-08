async function fetchCryptoPrices() {
    try {
        const res = await fetch('/crypto');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        const list = json.data;

        const ids = {
            BTC: 'btc-price', ETH: 'eth-price', USDT: 'usdt-price', BNB: 'bnb-price',
            XRP: 'xrp-price', SOL: 'sol-price', USDC: 'usdc-price', DOGE: 'doge-price',
            TRX: 'trx-price', ADA: 'ada-price', HYPE: 'hype-price', USDE: 'usde-price',
            LINK: 'link-price', SUI: 'sui-price', XLM: 'xlm-price', AVAX: 'avax-price',
            BCH: 'bch-price', HBAR: 'hbar-price', LTC: 'ltc-price', LEO: 'leo-price',
            MNT: 'mnt-price', SHIB: 'shib-price', TON: 'ton-price', CRO: 'cro-price',
            DOT: 'dot-price', XMR: 'xmr-price', DAI: 'dai-price', UNI: 'uni-price',
            OKB: 'okb-price', WLFI: 'wlfi-price', AAVE: 'aave-price', PEPE: 'pepe-price',
            ENA: 'ena-price', BGB: 'bgb-price', APT: 'apt-price', NEAR: 'near-price',
            ASTER: 'aster-price', TAO: 'tao-price', ETC: 'etc-price', IP: 'ip-price',
            ONDO: 'ondo-price', USD1: 'usd1-price', WLD: 'wld-price', PYUSD: 'pyusd-price',
            POL: 'pol-price', ICP: 'icp-price', ARB: 'arb-price', ZEC: 'zec-price',
            M: 'm-price', PUMP: 'pump-price'
        };

        for (const [symbol, id] of Object.entries(ids)) {
            const coin = list.find(c => c.symbol === symbol);
            document.getElementById(id).textContent =
                coin ? `$${coin.quote.USD.price.toFixed(2)}` : 'N/A';
        }

    } catch (e) {
        console.error(e);
        Object.values(ids).forEach(id => {
            document.getElementById(id).textContent = 'Failed to load price';
        });
    }
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 30000);
