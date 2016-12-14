import Backbone from 'backbone';
import Reader from './components/reader';
import React from 'react';
import ReactDom from 'react-dom';
import store from './store';

let container = document.getElementById('container');



const Router = Backbone.Router.extend({
    routes: {
      '': 'reader'

    },

    reader () {
      ReactDom.render(<Reader document={store}/>, container);
      // ReactDom.render(<Confirm />, container);
    },
})

// const router = new Router();
export default new Router();
