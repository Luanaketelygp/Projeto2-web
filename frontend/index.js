import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

ReactDom.render(
<BrowserRouter>
<app/>
</BrowserRouter>, window.document.getElementById('root'))