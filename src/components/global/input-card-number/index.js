import React, { Component } from 'react'

import Input from '../input'

export default class index extends Component {
  constructor(props){
    super(props)
    const num = props.cardNumber.split(" ");
    this.state = {
      cardNumber1: num[0] || '',
      cardNumber2: num[1] || '',
      cardNumber3: num[2] || '',
      cardNumber4: num[3] || ''
    }
  }
  
  handleChange = () => {
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = this.state;
    this.props.onChange(`${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`)
  }
  
  render() {
    console.log(this.state);
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = this.state;
    return (
      <div className="d-flex justify-content-between align-items-end">
        <Input
          id="cardNumber1"
          type="text"
          label="Card number"
          addClass="mx-1"
          value={cardNumber1}
          onChange={this.handleChange}
        />
        <Input
          id="cardNumber2"
          type="text"
          addClass="mx-1"
          value={cardNumber2}
          onChange={this.handleChange}
        />
        <Input
          id="cardNumber3"
          type="text"
          addClass="mx-1"
          value={cardNumber3}
          onChange={this.handleChange}
        />
        <Input
          id="cardNumber4"
          type="text"
          addClass="mx-1"
          value={cardNumber4}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
