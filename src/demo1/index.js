import _ from 'lodash';
import './style.css'
import Icon from './pic1.png'


function component() {
  const element = document.createElement('div');

  //load
  element.innerHTML = _.join(['Hello','webapck'],'');
  element.classList.add('hello')
  element.classList.add('icon-yonghu')
  //将图添加到己经存在的div中
  const myIcon= new Image();
  myIcon.src=Icon;

  element.appendChild(myIcon)

  return element;
}

document.body.append(component())
