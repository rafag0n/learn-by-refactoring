import React from 'react'
import ReactDOM from 'react-dom'
import './public/sass/main.scss'
import PageRouter from './router'





const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<PageRouter />, wrapper) : false