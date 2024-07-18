// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//solution

function defineSuit(card) {
    return card.endsWith('♣') ? 'clubs'
                              : card.endsWith('♦')
                              ? 'diamonds'
                              : card.endsWith('♥')
                              ? 'hearts' : 'spades'
}