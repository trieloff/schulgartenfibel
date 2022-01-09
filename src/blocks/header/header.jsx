import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";


class CustomHeader extends Component {
  render() {
    const header = this;

    return (
      <div class="header-container container">
        <div class="header-left"><button class="header-action" onClick={header.showMenu}><svg class="icon icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
          <path d="M1.5 14c.8 0 1.5.7 1.5 1.5S2.3 17 1.5 17 0 16.3 0 15.5.7 14 1.5 14zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 17 8.5 17 7 16.3 7 15.5 7.7 14 8.5 14zm-7-7C2.3 7 3 7.7 3 8.5S2.3 10 1.5 10 0 9.3 0 8.5.7 7 1.5 7zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 9.3 14 8.5 14.7 7 15.5 7zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 10 8.5 10 7 9.3 7 8.5 7.7 7 8.5 7zm-7-7C2.3 0 3 .7 3 1.5S2.3 3 1.5 3 0 2.3 0 1.5.7 0 1.5 0zm14 0c.8 0 1.5.7 1.5 1.5S16.3 3 15.5 3 14 2.3 14 1.5 14.7 0 15.5 0zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 3 8.5 3 7 2.3 7 1.5 7.7 0 8.5 0z" /></svg></button><a class="header-logo" href="/"><img class="header-pic" src="img/kalli-black.svg" width="56" alt="Kalli"></img></a></div>
        <div class="header-center">
          <nav class="header-nav"><a class="header-link active" href="#">Magazine</a><a class="header-link" href="#">World</a><a class="header-link" href="#">Tech</a><a class="header-link" href="#">Health</a><a class="header-link" href="#">Sport</a><a class="header-link" href="#">Travel</a><a class="header-link" href="#">Design</a></nav>
        </div>
        <div class="header-right"><button class="header-action"><svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <path d="M8 0a8 8 0 0 1 8 8c0 1.848-.627 3.55-1.68 4.905l3.386 3.388a1 1 0 1 1-1.414 1.414h0l-3.388-3.386C11.55 15.373 9.848 16 8 16A8 8 0 1 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 1 0 8 2z" /></svg></button><a class="header-user" href="#"><img class="header-pic" src="img/user-1.jpg" alt="User" ></img></a>
        </div>
      </div>
    );
  }

  showMenu(e) {
    e.stopPropagation();
    document.querySelector('custom-menu .js-menu').classList.add('visible');
    console.log(e, 'showMenu');
  }

  componentDidMount() {
    console.log('Header mounted', this.querySelector('button'));
  }
}


window.customElements.define("custom-header", CustomHeader);