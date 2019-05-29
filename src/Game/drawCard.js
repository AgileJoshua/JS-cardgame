
let deck = [];

function createNewDeck(){
    let newDeck = [];
    const values = ['A',2,3,4,5,6,7,8,9,0,'J','Q','K'];
    const suits = ['C','D','S','H'];

    values.forEach(value=>{
        suits.forEach(suit=>{
            newDeck.push({code:`${value}${suit}`, sort: Math.random()});
        })
    });
    newDeck.sort((a,b)=>(a.sort-b.sort));
    deck = newDeck.map(item=>item.code);
}

function drawCard(){
    if(deck.length === 0) createNewDeck();
    return deck.pop();
}

export default drawCard;