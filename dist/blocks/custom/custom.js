import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";

class CustomElement extends Component {
  render() {
    console.log(this);
    const {
      children,
      age
    } = this.props || {};
    return jsx("div", {
      className: "customElement-container"
    }, jsx("h3", null, `Hello, ${this.textContent}`), jsx("h4", null, `You are ${this.textContent} years old`));
  }

} // Check that the element hasn't already been registered


if (!window.customElements.get("custom-element")) window.customElements.define("custom-element", CustomElement);