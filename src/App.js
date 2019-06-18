import React from 'react';
import { StateProvider, mainReducer } from './State/state'
import { initialState } from './State/initialState'
import Home from './Components/Home/Home'
import 'typeface-roboto'
import 'typeface-suranna'

const App = () => (
    <StateProvider initialState={ initialState } reducer={ mainReducer }>
      <Home />
    </StateProvider>
)

export default App;
