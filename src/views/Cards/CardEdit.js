import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

// COMPONENTS
import CreditCard from '../../components/CreditCard';
import Form from '../../components/global/form'
import FormValidation from '../../components/global/form/validation'
import Button from '../../components/global/button'
import Input from '../../components/global/input'
import SelectCard from '../../components/global/select-card-type'

// ACTIONS
import { editCard } from '../../store/actions/cards'

class index extends Component {
  constructor(props){
    super(props);
    const num = props.card.cardNumber.split(" ")
    this.state = {
      inputs: {
        id: props.card.id,
        fullName: props.card.fullName,
        cardNumber1: num[0],
        cardNumber2: num[1],
        cardNumber3: num[2],
        cardNumber4: num[3],
        expDate: props.card.expDate,
        cardType: props.card.cardType
      },
      rules: {
        expDate: {
          exparationDate: { message: 'Wrong date' }
        },
      },
      errors: {}
    }
  }

  validate = (key) => {
    const form = new FormValidation(this.state)
    const { isValid, errors } = key ? form.validate(key) : form.validate();
    this.setState({ errors: errors });

    return isValid;
  }

  handleChange = (event) => {
    let inputs = this.state.inputs;
    inputs[event.target.id] = event.target.value;

    if(event.target.id.indexOf("cardNumber") !== -1){
      const fieldNum = Number(event.target.id.slice(-1));

      if(event.target.value.length === 4){
        if(fieldNum < 4) {
          document.querySelector(`#cardNumber${fieldNum + 1}`).focus()
        } else {
          document.querySelector('#expDate').focus();
        }
      }
    }
  
    this.setState({ inputs });
    this.validate(event.target.id);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const inputs = this.state.inputs;


    // if(this.validate()){
    //   this.setState({ inputs: {} });
    // }
    const data = {
      id: inputs.id,
      fullName: inputs.fullName,
      cardNumber: `${inputs.cardNumber1} ${inputs.cardNumber2} ${inputs.cardNumber3} ${inputs.cardNumber4}`,
      expDate: inputs.expDate,
      cardType: inputs.cardType
    }

    this.props.editCard(data);
    this.props.history.push('/cards')
  }

  render() {
    const { inputs, errors } = this.state;
    return (
      <div className="container">
        <div className="my-cards page page-center py-5">
        <div className="col-10 col-md-6 col-xl-5 d-flex flex-column align-items-center">
          <h2 className="text-muted mb-5">Edit current card</h2>

          <CreditCard
            name={inputs.fullName}
            cardNumber1={inputs.cardNumber1}
            cardNumber2={inputs.cardNumber2}
            cardNumber3={inputs.cardNumber3}
            cardNumber4={inputs.cardNumber4}
            expDate={inputs.expDate}
            cardType={inputs.cardType}
          />

          <Form
            addClass="w-100"
            onSubmit={this.handleSubmit}
            addClassTitle="text-center text-primary"
          >
            <Input
              id="fullName"
              label="Name"
              type="text"
              value={inputs.fullName}
              error={errors.fullName}
              onChange={this.handleChange}
            />

            <SelectCard id="cardType" label="Card type" cardType={inputs.cardType} onChange={this.handleChange} />

            <div className="d-flex justify-content-between align-items-end">
              <Input
                id="cardNumber1"
                type="text"
                label="Card number"
                addClass="mx-1"
                value={inputs.cardNumber1}
                error={errors.cardNumber1}
                onChange={this.handleChange}
              />
              <Input
                id="cardNumber2"
                type="text"
                addClass="mx-1"
                value={inputs.cardNumber2}
                error={errors.cardNumber2}
                onChange={this.handleChange}
              />
              <Input
                id="cardNumber3"
                type="text"
                addClass="mx-1"
                value={inputs.cardNumber3}
                error={errors.cardNumber3}
                onChange={this.handleChange}
              />
              <Input
                id="cardNumber4"
                type="text"
                addClass="mx-1"
                value={inputs.cardNumber4}
                error={errors.cardNumber4}
                onChange={this.handleChange}
              />
            </div>
            
            <Input
              id="expDate"
              label="Expires on"
              type="text"
              value={inputs.expDate}
              error={errors.expDate}
              onChange={this.handleChange}
            />

            <Button type="submit" addClass="btn btn-primary mt-3" text="Save"></Button>
          </Form>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.match.params.id;
  const card = state.cards.cards.find(card => card.id === cardId)
  return {
    card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (data) => dispatch(editCard(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))