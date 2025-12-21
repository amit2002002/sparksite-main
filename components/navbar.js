class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { position: relative; }
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.85);
          backdrop-filter: saturate(180%) blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: background .2s ease, box-shadow .2s ease;
        }
        .navbar--scrolled {
          box-shadow: 0 8px 24px rgba(15,23,42,0.06);
          background: rgba(20, 19, 22, 0.92);
        }
        .navbar--scrolled .link {
          color: #ffffff;
        }
          .navbar--scrolled .mobile-toggle svg{
            color: #ffffff;
          }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }
        .brand {
          color: var(--brand);
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          text-decoration: none;
        }
        .links {
          display: none;
          gap: 24px;
          align-items: center;
        }
        .link {
          color: #374151;
          font-weight: 500;
          text-decoration: none;
          transition: color .2s ease;
        }
        .link:hover { color: var(--brand); }
        .cta {
          background: var(--brand);
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 9999px;
          transition: background .2s ease, transform .2s ease, box-shadow .2s ease;
          box-shadow: 0 1px 2px rgba(16,185,129,0.2);
        }
        .cta:hover {
          background: var(--brand-700);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(16,185,129,0.3);
        }
        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
        }
        .mobile-toggle svg {
          width: 24px;
          height: 24px;
          color: #374151;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 260px;
          background: #2d2b2bff;
          box-shadow: 4px 0 24px rgba(15,23,42,0.1);
          transform: translateX(-100%);
          transition: transform .25s ease;
          z-index: 1001;
          padding-top: 15px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
          .mobile-menu a {
          color : #ffff
          }
          
        .m-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          text-decoration: none;
          color: var(--brand);
          font-weight: 700;
        }
        .m-brand-logo {
          width: 38px;
          height: 38px;
          display: inline-block;
        }
        
        .m-section {
          padding: 8px 16px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #e7e8e9ff;
          text-transform: uppercase;
          letter-spacing: .06em;
        }
        .m-list {
          display: grid;
          grid-auto-rows: min-content;
        }
        .menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          opacity: 0;
          pointer-events: none;
          transition: opacity .25s ease;
          z-index: 1000;
        }
        .menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        .m-link {
          display: block;
          padding: 12px 16px;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color .2s ease, background .2s ease;
        }
        .m-link:hover {
          background: #f9fafb;
          color: var(--brand);
        }
        .m-cta {
          display: block;
          margin: 8px 16px 16px;
          text-align: center;
          padding: 10px 16px;
          background: var(--brand);
          color: #ffffff;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: background .2s ease, transform .2s ease, box-shadow .2s ease;
          box-shadow: 0 1px 2px rgba(16,185,129,0.2);
        }
        .m-cta:hover {
          background: var(--brand-700);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(16,185,129,0.3);
        }
        @media (min-width: 768px) {
          .links { display: flex; }
          .mobile-toggle { display: none; }
          .mobile-menu { display: none !important; }
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .brand-logo {
          width: 28px;
          height: 28px;
          display: inline-block;
        }
      </style>
      <nav class="navbar">
        <div class="container">
          <div class="row">
            <a href="index.html" class="brand"><img src="assets/sparksite-logo.svg" alt="SparkSite" class="brand-logo">SparkSite</a>
            <div class="links">
              <a href="index.html" class="link">Home</a>
              <a href="services.html" class="link">Services</a>
              <a href="demo.html" class="link">Demos</a>
              <a href="contact.html" class="link">Contact</a>
              <a href="contact.html" class="cta">Get Started</a>
            </div>
            <button class="mobile-toggle" aria-expanded="false" aria-label="Open menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="menu-overlay" id="menu-overlay"></div>
        <div class="mobile-menu" id="mobile-menu">
          <a href="index.html" class="m-brand"><img src="assets/sparksite-logo.svg" alt="SparkSite" class="m-brand-logo width='40px" height='40px'>SparkSite</a>
          <div class="m-section">Navigation</div>
          <div class="m-list">
            <a href="index.html" class="m-link">Home</a>
            <a href="services.html" class="m-link">Services</a>
            <a href="demo.html" class="m-link">Demos</a>
            <a href="contact.html" class="m-link">Contact</a>
          </div>
          <a href="contact.html" class="m-cta">Get Started</a>
        </div>
      </nav>
    `;
    const toggle = this.shadowRoot.querySelector('.mobile-toggle');
    const menu = this.shadowRoot.getElementById('mobile-menu');
    const overlay = this.shadowRoot.getElementById('menu-overlay');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        overlay.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }
    const links = this.shadowRoot.querySelectorAll('.m-link, .m-cta, .m-brand');
    links.forEach(el => {
      el.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    window.addEventListener('click', (e) => {
      const path = e.composedPath();
      const clickedInsideMenu = path.includes(menu) || path.includes(toggle);
      if (!clickedInsideMenu) {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }, { capture: true });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    const nav = this.shadowRoot.querySelector('.navbar');
    const onScroll = () => {
      if (window.scrollY > 4) nav.classList.add('navbar--scrolled');
      else nav.classList.remove('navbar--scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}

customElements.define('custom-navbar', CustomNavbar);
