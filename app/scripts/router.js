import Backbone from 'backbone';
import Reader from './components/reader';
import React from 'react';
import ReactDom from 'react-dom';


const Router = Backbone.Router.extend({
    routes: {
      '': 'reader'
    },

    reader () {
      ReactDom.render(<Reader />, container);

    },
})

// const router = new Router();
export default new Router();
