document.querySelector('button').addEventListener('click', getPrice)

function getPrice(){
  console.log('getPrice');
  let cardName = document.querySelector('input').value;
  console.log(`cardName =${cardName}`)
  const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?fname='+ cardName

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log( data )
      // console.log(data.data)
      // console.log(data.data[0])
      // console.log(data.data[0].card_prices[0].tcgplayer_price)
      
      // set up loop for each (ammount of cards to show)
      for (let i =0; i < data.data.length; i++){
          showCard(data.data[i])
      }
    })
    .catch(err => {
      console.log(`ygoprodeckError =${err}`)
    })
}

// have results show info from website
function showCard(card){
  // creates an element
  let ygoInfo = document.createElement ('p')

  // what will show up on the page (name)
  const newName = document.createTextNode(card.name)
  // for (let i = 0; i < data.length; i++){
  //   console.log(data.name)

  // what will show up on the page (price)
  const newPrice = document.createTextNode(card.card_prices[0].tcgplayer_price)
  // for (let i = 0; i < 11; i++){
  // }
  // allows text to show up in new element
    ygoInfo.appendChild(newName)
    ygoInfo.appendChild(newPrice)
  // enters info into section in HTML
  document.querySelector('section').appendChild(ygoInfo)
}
