import React from 'react'
import ReactDOM from 'react-dom'
import './public/sass/main.scss'
import {Provider} from 'react-redux'
import store from './redux/store'
import PageRouter from './router'





const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<Provider store={store}><PageRouter /></Provider>, wrapper) : false