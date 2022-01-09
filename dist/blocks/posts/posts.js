import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";

class HelixPosts extends Component {
  render() {
    return jsx("section", {
      class: "section"
    }, jsx("div", {
      class: "section-container container"
    }, jsx("div", {
      class: "posts posts_simple"
    }, jsx("div", {
      class: "posts-list"
    }, jsx("div", {
      class: "posts-item"
    }, jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-date"
    }, "January 26, 2019")), jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-name title title_sm",
      href: "#"
    }, "Midcentury Modern: A Rare Chance To Tour"), jsx("div", {
      class: "posts-content content"
    }, "Likeness rule moveth morning spirit earth fruit brought fill spirit green open")), jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-more more",
      href: "#"
    }, "Read More", jsx("svg", {
      class: "icon icon-arrow-right",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 9"
    }, jsx("path", {
      d: "M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z"
    }))))), jsx("div", {
      class: "posts-item"
    }, jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-date"
    }, "January 26, 2019")), jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-name title title_sm",
      href: "#"
    }, "The $10-billion Business Of Self-care"), jsx("div", {
      class: "posts-content content"
    }, "Tree rule image. I itself created. Morning face behold there have itself creeping")), jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-more more",
      href: "#"
    }, "Read More", jsx("svg", {
      class: "icon icon-arrow-right",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 9"
    }, jsx("path", {
      d: "M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z"
    }))))), jsx("div", {
      class: "posts-item"
    }, jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-date"
    }, "January 26, 2019")), jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-name title title_sm",
      href: "#"
    }, "Exploring The Wonderfully Weird And Wildly Venice"), jsx("div", {
      class: "posts-content content"
    }, "Grass the sea days, place moveth be appear together open god be morning ")), jsx("div", {
      class: "posts-cell"
    }, jsx("a", {
      class: "posts-more more",
      href: "#"
    }, "Read More", jsx("svg", {
      class: "icon icon-arrow-right",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 9"
    }, jsx("path", {
      d: "M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z"
    })))))))));
  }

}

window.customElements.define("helix-posts", HelixPosts);