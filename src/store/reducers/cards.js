const initState = {
  cards: [
    { id: "1", fullName: 'Rajovic Mirko', cardType: 'visa', cardNumber: '1234 1234 1234 1234', expDate: '02/22'},
    { id: "2", fullName: 'Rajovic Mirko', cardType: 'discover', cardNumber: '4444 4444 4444 4444', expDate: '05/22'},
    { id: "3", fullName: 'Rajovic Mirko', cardType: 'master', cardNumber: '5555 5555 5555 5555', expDate: '10/22'}
  ]
};

const auth = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case "EDIT_CARD":
      const localCards = state.cards;
      const newCards = localCards.map(card => {
        if(card.id === payload.id){
          return payload;
        } else {
          return card;
        }
      })
      return {
        cards: newCards
      }
    
    case "ADD_CARD":
      const newCard = state.cards;
      newCard.push(payload)

      return {
        cards: newCard
      }
  
    default:
      break;
  }
  return state;
};

export default auth;
