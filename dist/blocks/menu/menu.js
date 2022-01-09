import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";

class CustomMenu extends Component {
  render() {
    const closeMenu = this.closeMenu.bind(this);
    return jsx("div", {
      class: "menu-2 js-menu"
    }, jsx("header", {
      class: "header"
    }, jsx("div", {
      class: "header-container container"
    }, jsx("div", {
      class: "header-left"
    }, jsx("button", {
      class: "header-action",
      onClick: closeMenu
    }, jsx("svg", {
      class: "icon icon-close",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 14 14"
    }, jsx("path", {
      d: "M13.4.6a1 1 0 0 1 0 1.4l-5 5 5 5c.4.4.4.9.1 1.3v.1a1 1 0 0 1-1.4 0l-5-5-5 5c-.4.4-.9.4-1.3.1H.6a1 1 0 0 1 0-1.4l5-5-5-5C.3 1.7.2 1.1.6.7V.6A1 1 0 0 1 2 .6l5 5 5-5c.4-.4.9-.4 1.3-.1h.1z"
    })))), jsx("div", {
      class: "header-center"
    }, jsx("a", {
      class: "header-logo",
      href: "/"
    }, jsx("img", {
      class: "header-pic",
      src: "img/kalli-black.svg",
      width: "56",
      alt: "Kalli"
    }))), jsx("div", {
      class: "header-right"
    }, jsx("button", {
      class: "header-action"
    }, jsx("svg", {
      class: "icon icon-search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 18"
    }, jsx("path", {
      d: "M8 0a8 8 0 0 1 8 8c0 1.848-.627 3.55-1.68 4.905l3.386 3.388a1 1 0 1 1-1.414 1.414h0l-3.388-3.386C11.55 15.373 9.848 16 8 16A8 8 0 1 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 1 0 8 2z"
    })))))), jsx("div", {
      class: "menu-2-container container"
    }, jsx("div", {
      class: "menu-2-col"
    }, jsx("nav", {
      class: "menu-2-nav"
    }, jsx("a", {
      class: "menu-2-link",
      href: "#"
    }, "About"), jsx("a", {
      class: "menu-2-link active",
      href: "#"
    }, "Collections"), jsx("a", {
      class: "menu-2-link",
      href: "#"
    }, "Shop")), jsx("div", {
      class: "menu-2-links"
    }, jsx("a", {
      class: "more",
      href: "#"
    }, "Home"), jsx("a", {
      class: "more",
      href: "#"
    }, "Careers"), jsx("a", {
      class: "more",
      href: "#"
    }, "Blog"), jsx("a", {
      class: "more",
      href: "#"
    }, "Contact Us", jsx("svg", {
      class: "icon icon-arrow-right",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 9"
    }, jsx("path", {
      d: "M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z"
    }))))), jsx("div", {
      class: "menu-2-col"
    }, jsx("div", {
      class: "menu-2-contact"
    }, jsx("div", {
      class: "menu-2-label label"
    }, "Office"), jsx("div", {
      class: "menu-2-content content"
    }, "248 N Rodeo Dr, Beverly Hills, ", jsx("br", null), "CA 90210")), jsx("div", {
      class: "menu-2-contact"
    }, jsx("div", {
      class: "menu-2-label label"
    }, "Phone"), jsx("div", {
      class: "menu-2-content content"
    }, jsx("a", {
      href: "tel:+1234567890"
    }, "+1 234 567 890"))), jsx("div", {
      class: "menu-2-socials socials socials_black"
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
    })))))), jsx("div", {
      class: "menu-2-bg",
      style: "background-image: url(img/bg-image-24.jpg)"
    }));
  }

  closeMenu(e) {
    e.stopPropagation();
    this.querySelector(':scope div').classList.remove('visible');
  }

  componentDidMount() {
    console.log('Menu mounted', this.querySelector('[data-menu-close]'));
  }

}

window.customElements.define("custom-menu", CustomMenu);