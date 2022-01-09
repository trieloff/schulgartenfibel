import jsx from "../../vendor/custom-elements-jsx/index.js";
import Component from "../../vendor/custom-elements-jsx/component.js";


class HelixPosts extends Component {
  render() {
    return (
      <section class="section">
        <div class="section-container container">
          <div class="posts posts_simple">
            <div class="posts-list">
              <div class="posts-item">
                <div class="posts-cell"><a class="posts-date">January 26, 2019</a></div>
                <div class="posts-cell"><a class="posts-name title title_sm" href="#">Midcentury Modern: A Rare Chance To Tour</a>
                  <div class="posts-content content">Likeness rule moveth morning spirit earth fruit brought fill spirit green open</div>
                </div>
                <div class="posts-cell"><a class="posts-more more" href="#">Read More<svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                      <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></a></div>
              </div>
              <div class="posts-item">
                <div class="posts-cell"><a class="posts-date">January 26, 2019</a></div>
                <div class="posts-cell"><a class="posts-name title title_sm" href="#">The $10-billion Business Of Self-care</a>
                  <div class="posts-content content">Tree rule image. I itself created. Morning face behold there have itself creeping</div>
                </div>
                <div class="posts-cell"><a class="posts-more more" href="#">Read More<svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                      <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></a></div>
              </div>
              <div class="posts-item">
                <div class="posts-cell"><a class="posts-date">January 26, 2019</a></div>
                <div class="posts-cell"><a class="posts-name title title_sm" href="#">Exploring The Wonderfully Weird And Wildly Venice</a>
                  <div class="posts-content content">Grass the sea days, place moveth be appear together open god be morning </div>
                </div>
                <div class="posts-cell"><a class="posts-more more" href="#">Read More<svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                      <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

window.customElements.define("helix-posts", HelixPosts);