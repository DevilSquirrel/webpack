import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button')

  //load
  element.innerHTML = _.join(['Hello','webapck'],'');

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn)

  return element;
}

document.body.append(component())
