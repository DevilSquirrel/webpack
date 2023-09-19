import _ from 'lodash';
import './style.css'

function component() {
  const element = document.createElement('div');

  //load
  element.innerHTML = _.join(['Hello','webapck'],'');
  element.classList.add('hello')

  return element;
}

document.body.append(component())
