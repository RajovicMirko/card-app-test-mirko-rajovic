import React from 'react'

import {connect} from 'react-redux'

// COMPONENTS
import CreditCard from '../../components/CreditCard';
import CreditCardAdd from '../../components/CreditCardAdd';

function Cards(props) {
  const { history, cards } = props;

  return (
    <div className="container">
      <div className="my-cards page page-center py-5">
        <h2 className="text-muted mb-5">My Cards</h2>
        <div className="cards-list d-flex flex-wrap justify-content-around">
          { cards && cards.map(card => {
            const cardNumber = card.cardNumber.split(' ')
            return (    
              <CreditCard
                key={card.id}
                id={card.id}
                name={card.fullName}
                cardNumber1={cardNumber[0]}
                cardNumber2={cardNumber[1]}
                cardNumber3={cardNumber[2]}
                cardNumber4={cardNumber[3]}
                expDate={card.expDate}
                cardType={card.cardType}
                handleClick={() => history.push(`/cards/${card.id}/edit`)}
              />
            )
          })}
          <CreditCardAdd />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards.cards
  }
} 

export default connect(mapStateToProps)(Cards)
