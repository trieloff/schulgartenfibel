import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";

class HelixHighlight extends Component {
  render() {
    return jsx("section", {
      class: "section section_pt0 section_pb0"
    }, jsx("div", {
      class: "section-container container"
    }, jsx("div", {
      class: "video-1",
      style: {
        backgroundImage: `url(img/bg-image-4.jpg)`
      }
    }, jsx("div", {
      class: "video-1-container"
    }, jsx("div", {
      class: "video-1-label label"
    }, "Featured"), jsx("div", {
      class: "video-1-title title title_sm"
    }, "\"A hilarious dark fantasy\u201D \u2014"), jsx("a", {
      class: "video-1-play play",
      href: "#",
      "data-video": "PYBmAzhTecU"
    }, jsx("div", {
      class: "play-icon"
    }, jsx("svg", {
      class: "icon icon-play",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 18"
    }, jsx("path", {
      d: "M1 18c-.17 0-.35-.04-.5-.13A1 1 0 0 1 0 17V1A1 1 0 0 1 .5.13a1 1 0 0 1 1 0l13.86 8a1 1 0 0 1 0 1.73l-13.86 8c-.15.1-.33.13-.5.13h0z"
    }))), jsx("div", {
      class: "play-title"
    }, "Play Video"))))));
  }

}

window.customElements.define("helix-highlight", HelixHighlight);