import { Component } from '../core/core.js';
import TextMsg from '../components/TextMsg.js';

export default class Home extends Component {
  render() {

    const maintitle = new TextMsg({msg : 'WORK IN PROGRESS'}).el;
    const subTitle  = new TextMsg({msg : 'Malrang', fontSize : '1.5rem'}).el

    subTitle.classList.add('text-right');

    this.el.append(
      maintitle,
      subTitle
    );
  }
}