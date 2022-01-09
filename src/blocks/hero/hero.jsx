import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";


class HelixHero extends Component {
  render() {
    return (
      <div class="hero-2 js-hero-2">
        <div class="hero-2-slider js-hero-2-slider">
          <div class="hero-2-slide">
            <div class="hero-2-container container">
              <div class="hero-2-group"><a class="hero-2-play play play_black" href="#" data-video="PYBmAzhTecU">
                  <div class="play-icon"><svg class="icon icon-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
                      <path d="M1 18c-.17 0-.35-.04-.5-.13A1 1 0 0 1 0 17V1A1 1 0 0 1 .5.13a1 1 0 0 1 1 0l13.86 8a1 1 0 0 1 0 1.73l-13.86 8c-.15.1-.33.13-.5.13h0z" /></svg></div>
                </a>
                <div class="hero-2-title title">The iPhone X Notch is All About Branding</div><a class="hero-2-more" href="#">Read More</a>
              </div>
              <div class="hero-2-bg" style={{backgroundImage: `url(img/bg-image-3.jpg)`}}></div>
            </div>
          </div>
          <div class="hero-2-slide">
            <div class="hero-2-container container">
              <div class="hero-2-group"><a class="hero-2-play play play_black" href="#" data-video="PYBmAzhTecU">
                  <div class="play-icon"><svg class="icon icon-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
                      <path d="M1 18c-.17 0-.35-.04-.5-.13A1 1 0 0 1 0 17V1A1 1 0 0 1 .5.13a1 1 0 0 1 1 0l13.86 8a1 1 0 0 1 0 1.73l-13.86 8c-.15.1-.33.13-.5.13h0z" /></svg></div>
                </a>
                <div class="hero-2-title title">Make it simple, but significant</div><a class="hero-2-more" href="#">Read More</a>
              </div>
              <div class="hero-2-bg" style={{backgroundImage: `url(img/bg-image-1.jpg)`}}></div>
            </div>
          </div>
          <div class="hero-2-slide">
            <div class="hero-2-container container">
              <div class="hero-2-group"><a class="hero-2-play play play_black" href="#" data-video="PYBmAzhTecU">
                  <div class="play-icon"><svg class="icon icon-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
                      <path d="M1 18c-.17 0-.35-.04-.5-.13A1 1 0 0 1 0 17V1A1 1 0 0 1 .5.13a1 1 0 0 1 1 0l13.86 8a1 1 0 0 1 0 1.73l-13.86 8c-.15.1-.33.13-.5.13h0z" /></svg></div>
                </a>
                <div class="hero-2-title title">Yeezy Boost 350 V2 Clay</div><a class="hero-2-more" href="#">Read More</a>
              </div>
              <div class="hero-2-bg" style={{backgroundImage: `url(img/bg-image-10.jpg)`}}></div>
            </div>
          </div>
        </div>
        <div class="hero-2-foot">
          <div class="hero-2-container container">
            <div class="hero-2-arrows arrows arrows_sm"><button class="arrows-item js-hero-2-prev"><svg class="icon icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                  <path d="M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z" /></svg></button><button class="arrows-item js-hero-2-next"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                  <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></button></div>
            <div class="hero-2-pager pager">
              <div class="pager-number">01</div>
              <div class="pager-dots js-hero-2-dots"></div>
              <div class="pager-total js-hero-2-total"></div>
            </div>
            <div class="hero-2-posts"><a class="hero-2-post" href="#">
                <div class="hero-2-preview"><img class="hero-2-pic" src="img/image-5.jpg" alt="Image 5"/></div>
                <div class="hero-2-details">
                  <div class="hero-2-label label" href="#">Design</div>
                  <div class="hero-2-content content">Artechnic brings life to a concrete Tokyo</div>
                </div>
              </a><a class="hero-2-post" href="#">
                <div class="hero-2-preview"><img class="hero-2-pic" src="img/image-6.jpg" alt="Image 6"/></div>
                <div class="hero-2-details">
                  <div class="hero-2-label label" href="#">Health</div>
                  <div class="hero-2-content content">The Health Benefits of Indoor Plants Are Pretty</div>
                </div>
              </a></div>
          </div>
        </div>
      </div>
    );
  }
}

window.customElements.define("helix-hero", HelixHero);