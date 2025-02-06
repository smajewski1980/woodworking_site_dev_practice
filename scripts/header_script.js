const header = document.querySelector("header");
function loadHeaderHtml() {
  header.innerHTML = `
      <div class="logo-wrapper">
        <a href="./index.html"><img src="./assets/images/logo.png" alt="carved creations" /></a>
      </div>
      <nav>
        <ul>
          <li><a href="./index.html">HOME</a></li>
          <li><a href="./about.html">ABOUT</a></li>
          <li><a href="./gallery.html">GALLERY</a></li>
          <li><a href="./blog.html">BLOG</a></li>
          <li><a href="./contact.html">CONTACT</a></li>
        </ul>
      </nav>
  `;
}
loadHeaderHtml();
