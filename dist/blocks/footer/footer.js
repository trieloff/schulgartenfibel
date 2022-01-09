import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";

class CustomFooter extends Component {
  render() {
    console.log(this);
    return jsx("div", {
      class: "footer-4-container container"
    }, jsx("div", {
      class: "footer-4-row"
    }, jsx("div", {
      class: "footer-4-col footer-4-col_wide"
    }, jsx("a", {
      class: "footer-4-logo",
      href: "/"
    }, jsx("img", {
      class: "footer-4-pic",
      src: "img/kalli-white.svg",
      width: "56",
      alt: "Kalli"
    }))), jsx("div", {
      class: "footer-4-col"
    }, jsx("div", {
      class: "footer-4-title"
    }, "Sitemap"), jsx("nav", {
      class: "footer-4-nav nav"
    }, jsx("a", {
      class: "nav-link",
      href: "#"
    }, "About"), jsx("a", {
      class: "nav-link",
      href: "#"
    }, "Portfolio"), jsx("a", {
      class: "nav-link",
      href: "#"
    }, "Blog"), jsx("a", {
      class: "nav-link",
      href: "#"
    }, "Careers"), jsx("a", {
      class: "nav-link",
      href: "#"
    }, "Press"))), jsx("div", {
      class: "footer-4-col"
    }, jsx("div", {
      class: "footer-4-title"
    }, "Follow Us"), jsx("div", {
      class: "footer-4-socials socials"
    }, jsx("a", {
      class: "socials-item",
      href: "#"
    }, jsx("svg", {
      class: "icon icon-facebook",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 10 18"
    }, jsx("path", {
      d: "M6.1 18V9.8h2.8l.4-3.2H6.1v-2c0-.9.3-1.6 1.6-1.6h1.7V.1C9 .1 8 0 6.9 0 4.4 0 2.8 1.5 2.8 4.2v2.4H0v3.2h2.8V18h3.3z"
    }))), jsx("a", {
      class: "socials-item",
      href: "#"
    }, jsx("svg", {
      class: "icon icon-twitter",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 15"
    }, jsx("path", {
      d: "M5.7 14.6c6.8 0 10.5-5.6 10.5-10.5v-.5c.7-.5 1.3-1.2 1.8-1.9-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9C14.5.4 13.5 0 12.5 0c-2 0-3.7 1.7-3.7 3.7 0 .3 0 .6.1.8C5.8 4.4 3.1 2.9 1.3.7.9 1.2.8 1.9.8 2.5c0 1.3.7 2.4 1.6 3.1-.6 0-1.2-.2-1.7-.5h0C.7 7 2 8.5 3.7 8.8c-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.8 2.5 3.5 2.6-1.3 1-2.9 1.6-4.6 1.6-.3 0-.6 0-.9-.1 1.6 1 3.6 1.7 5.7 1.7"
    }))), jsx("a", {
      class: "socials-item",
      href: "#"
    }, jsx("svg", {
      class: "icon icon-instagram",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 18"
    }, jsx("path", {
      d: "M13.8 3.1c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1M9 12a3 3 0 0 1 0-6 3 3 0 0 1 0 6m0-7.6C6.4 4.4 4.4 6.4 4.4 9s2.1 4.6 4.6 4.6 4.6-2.1 4.6-4.6S11.6 4.4 9 4.4M9 0L5.3.1c-1 0-1.6.2-2.2.4-.6.2-1.1.5-1.6 1s-.8 1-1 1.6C.2 3.7.1 4.3.1 5.3v7.4c0 1 .2 1.6.4 2.2.2.6.5 1.1 1 1.6s1 .8 1.6 1c.6.2 1.2.4 2.2.4h7.4c1 0 1.6-.2 2.2-.4.6-.2 1.1-.5 1.6-1s.8-1 1-1.6c.2-.6.4-1.2.4-2.2s.1-1.3.1-3.7l-.1-3.7c0-1-.2-1.6-.4-2.2-.2-.6-.5-1.1-1-1.6s-1-.8-1.6-1c-.6-.2-1.2-.4-2.2-.4L9 0m0 1.6l3.6.1c.9 0 1.4.2 1.7.3.4.2.7.4 1 .7s.5.6.7 1c.1.3.3.8.3 1.7a63 63 0 0 1 .1 3.6l-.1 3.6c0 .9-.2 1.4-.3 1.7-.2.4-.4.7-.7 1s-.6.5-1 .7c-.3.1-.8.3-1.7.3l-3.6.1a63 63 0 0 1-3.6-.1c-.9 0-1.4-.2-1.7-.3-.4-.2-.7-.4-1-.7s-.5-.6-.7-1c-.1-.3-.3-.8-.3-1.7V5.4c0-.9.2-1.4.3-1.7.2-.4.4-.7.7-1s.6-.5 1-.7c.3-.1.8-.3 1.7-.3L9 1.6"
    }))))), jsx("div", {
      class: "footer-4-col footer-4-col_lg"
    }, jsx("div", {
      class: "footer-4-group"
    }, jsx("div", {
      class: "footer-4-title"
    }, "Sign up to keep updated on new products and discounts."), jsx("form", {
      class: "footer-4-subscribe subscribe",
      action: ""
    }, jsx("div", {
      class: "subscribe-label"
    }, "Email Address"), jsx("input", {
      class: "subscribe-input",
      type: "email",
      required: true
    }), jsx("button", {
      class: "subscribe-btn btn btn_white",
      type: "submit"
    }, "Sign Up"))))));
  }

}

window.customElements.define("custom-footer", CustomFooter);