import React, { Component,Fragment } from 'react';
import {GlobalStyle} from './style'
import {GlobalIconStyle} from './statics/iconfont/iconfont'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
import store from './store/index'



class App extends Component {
  render() {
        return (
          <Fragment>
            <GlobalStyle />
            <GlobalIconStyle />
            <Provider store = {store}>
            <BrowserRouter>
              <div>
                 <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/write' exact component={Write}></Route>
              </div>
            </BrowserRouter>
            </Provider>
          </Fragment>
          
        );
  }
}

export default App;
