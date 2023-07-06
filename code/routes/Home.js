import { Component } from '../core/core.js';

export default class Home extends Component {
  constructor() {
    super({
      tagName : 'h2'
    });
  }
  render() {
    this.el.textContent = 'WORK IN PROGRESS';
  }
}