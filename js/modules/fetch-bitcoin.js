function initFetchBitcoin() {
	
}

fetch('https://blockchain.info/ticker').then((res) => {
   return res.json()
})
.then((resJson) => {
   const btcPreco = document.querySelector('.btc-preco');
   btcPreco.innerText = (1000 / resJson.BRL.sell).toFixed(4)
})
.catch((erro) => {
   console.log(Error(erro));
   
})





//https://blockchain.info/ticker
export default initFetchBitcoin();



