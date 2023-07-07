import { Component } from "../core/core.js";

export default class TextMsg extends Component {
  constructor(state) {
    super({
      tagName : 'h2',
      state,
    });
  }
  render() {
    this.el.textContent = this.state.msg;
    this.el.style.fontSize = this.state?.fontSize || 'inherit';
  }
}