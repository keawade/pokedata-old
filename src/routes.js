import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'

import PokemonList from './containers/pokemon-list'
import PokemonDetail from './containers/pokemon-list'


export default (
  <Route path='/' component={App}>
    <IndexRoute component={PokemonList} />
    <Route path='*' component={PokemonDetail} />
  </Route>
)
