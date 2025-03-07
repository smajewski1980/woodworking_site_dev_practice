const footer = document.querySelector("footer");

function loadFooterHtml() {
  footer.innerHTML = `
      <div class="footer-top">
        <section class="footer-section-1">
          <h3>VISIT OUR SHOWROOM</h3>
          <div class="footer-img-wrapper">
            <img src="./assets/images/show-room.png" alt="show-room" />
          </div>
          <p>
            This is just a placeholder, so you can see what the site looks like.
          </p>
          <p>(760)-962-9541</p>
          <p><a href="#">info@carvedcreations.com</a></p>
        </section>
        <section class="footer-section-2">
          <h3>RECENT BLOG POSTS</h3>
          <div class="footer-card">
          <div class="date">
            <a href="./blog.html">
              <img src="./assets/images/bg-time.png" alt="" />
            </a>
          </div>
            <div class="footer-card-content">
              <h4>This is just a placeholder.</h4>
              <p>
                This is just a placeholder, so you can see what the site looks
                like.
              </p>
            </div>
            </div>
            <div class="footer-card">
            <div class="date">
              <a href="./blog.html">
                <img src="./assets/images/bg-time.png" alt="" />
              </a>
            </div>
            <div class="footer-card-content">
              <h4>This is just a placeholder.</h4>
              <p>
                This is just a placeholder, so you can see what the site looks
                like.
              </p>
            </div>
            </div>
            <div class="footer-card">
            <div class="date">
            <a href="./blog.html">
              <img src="./assets/images/bg-time.png" alt="" />
            </a>
            </div>
            <div class="footer-card-content">
              <h4>This is just a placeholder.</h4>
              <p>
                This is just a placeholder, so you can see what the site looks
                like.
              </p>
            </div>
            </div>
        </section>
        <section class="footer-section-3">
          <div class="footer-sec-3-top">
            <h3>JOIN OUR NEWSLETTER</h3>
            <form>
              <input
                id="email-input"
                type="email"
                required
                autocomplete="off"
                placeholder="Enter Email Address Here For Updates"
              />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
          <div class="footer-sec-3-bottom">
            <h3>SOCIAL MEDIA</h3>
            <div class="footer-social-wrapper">
              <img src="./assets/images/fb-icon-dark.png" alt="facebook" />
              <img src="./assets/images/goog-icon-dark.png" alt="google plus" />
              <img src="./assets/images/twit-icon-dark.png" alt="twitter" />
            </div>
          </div>
        </section>
      </div>
      <div class="footer-bottom">
        <p><span>&copy;</span>COPYRIGHT 2012 ALL RIGHTS RESERVED.</p>
        <nav>
          <ul>
            <li><a href="./index.html">HOME</a></li>
            <li><a href="./about.html">ABOUT</a></li>
            <li><a href="./gallery.html">GALLERY</a></li>
            <li><a href="./blog.html">BLOG</a></li>
            <li><a href="./contact.html">CONTACT</a></li>
          </ul>
        </nav>
      </div>
  
  `;
}

loadFooterHtml();
