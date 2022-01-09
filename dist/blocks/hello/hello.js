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
    }, jsx("h3", null, `Hello, ${this.textContent || 'World'}`));
  }

} // Check that the element hasn't already been registered


if (!window.customElements.get("hello-world")) window.customElements.define("hello-world", CustomElement);