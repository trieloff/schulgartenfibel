import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";


class CustomElement extends Component {
  render() {
    console.log(this);
    const { children, age } = this.props || {};

    return (
      <div className="customElement-container">
        <h3>{`Hello, ${this.textContent || 'World'}`}</h3>
      </div>
    );
  }
}

// Check that the element hasn't already been registered
if (!window.customElements.get("hello-world"))
  window.customElements.define("hello-world", CustomElement);