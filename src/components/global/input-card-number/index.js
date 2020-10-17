import React from 'react'

import Input from '../input'

function index({ cardNumber = '', handleChange }) {
  const getCardPart = (part) => {
    if(cardNumber) {
      return cardNumber.split(" ")[part - 1]
    } else {
      return ''
    }
  }

  const handleChange = () => {

  }

  return (
    <div className="d-flex justify-content-between align-items-end">
      <Input
        id="cardNumber1"
        type="text"
        label="Card number"
        addClass="mx-1"
        value={getCardPart(1)}
        onChange={handleChange}
      />
      <Input
        id="cardNumber2"
        type="text"
        addClass="mx-1"
        value={getCardPart(2)}
        onChange={handleChange}
      />
      <Input
        id="cardNumber3"
        type="text"
        addClass="mx-1"
        value={getCardPart(3)}
        onChange={handleChange}
      />
      <Input
        id="cardNumber4"
        type="text"
        addClass="mx-1"
        value={getCardPart(4)}
        onChange={handleChange}
      />
    </div>
  )
}

export default index
