'use strict';

let React = require('react');
let MainComponent = React.createFactory(require('./components/main'));

let renderComponent = function(){
  let mountNode = document.getElementById('app-container');
  React.render(MainComponent(), mountNode);
};

if (typeof window !== 'undefined') {
	console.log("BOOTSTRAP APPLICATION ON CLIENT");
    window.onload = () => {
    	//When window is loaded, render the main component
      renderComponent();
    }
}
