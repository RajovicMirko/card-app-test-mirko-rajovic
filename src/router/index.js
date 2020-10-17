import React from 'react'
import { Switch, Route } from 'react-router-dom'

// PAGES
import Error404 from '../views/Error404'
import Cards from '../views/Cards'
import CardEdit from '../views/Cards/CardEdit'
import CardAdd from '../views/Cards/CardAdd'

export default function index() {
  return (
    <Switch>
      <Route exact path="/" component={ Cards } />
      <Route exact path="/cards" component={ Cards } />
      <Route path="/cards/add" component={ CardAdd } />
      <Route path="/cards/:id/edit" component={ CardEdit } />
      <Route path="*" component={ Error404 } />
    </Switch>
  )
}
