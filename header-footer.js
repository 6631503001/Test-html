class header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <link rel="stylesheet" href="assets/stylesheet/header-footer.css">
      <input type="checkbox" id="sidebar-active" style="display: none;">
        <label id="overlay" for="sidebar-active"></label>
        <div class="header">
            <a style="cursor: pointer;" href="index.php"> <img class="logo" src="assets/headphoto/Logo-base.png"
                    title="Logo"></a>
            <div class="nav-link">
                <a class="buttonhead" href="page2.html">Check in</a>
                <a class="buttonhead" href="page3.html">My flight</a>
                <a class="buttonhead" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Bundle&Sale</a>
                <a class="buttonhead" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Help</a>
                <a class="buttonhead" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">TH/EN</a>
                <a class="buttonhead" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Login</a>
            </div>

            <label for="sidebar-active" style="cursor: pointer;" class="open-sidebar-botton">
                <svg xmlns="http://www.w3.org/2000/svg" height="4vh" viewBox="0 -960 960 960" width="4vh"
                    fill="#e8eaed">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </label>
        </div>
        <div class="mobile-nav">
            <label for="sidebar-active" style="cursor: pointer;" class="close-sidebar-botton">
                <svg xmlns="http://www.w3.org/2000/svg" height="4vh" viewBox="0 -960 960 960" width="4vh"
                    fill="#e8eaed">
                    <path
                        d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
            </label>
            <a href="page3.html">Check in</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">My flight</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Bundle&Sale</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Help</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">TH/EN</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Login</a>
        </div>`;
    }
  }

  class footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/win_cringeaf/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
   </footer>`
    }
  }

      
  customElements.define('header-main', header);

  customElements.define( 'footer-main', footer)