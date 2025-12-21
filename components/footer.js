class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .footer {
          background: #0f172a;
          color: #ffffff;
          padding: 64px 16px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .brand {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--brand);
          text-decoration: none;
        }
        .muted { color: #9ca3af; }
        .section-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .list { list-style: none; margin: 0; padding: 0; }
        .item { margin-bottom: 8px; }
        .link {
          color: #9ca3af;
          text-decoration: none;
          transition: color .2s ease;
        }
        .link:hover { color: var(--brand); }
        .socials { display: flex; gap: 12px; margin-top: 12px; }
        .social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          color: #9ca3af;
          transition: background .2s ease, color .2s ease, transform .2s ease;
          text-decoration: none;
        }
        .social:hover {
          background: rgba(255,255,255,0.12);
          color: var(--brand);
          transform: translateY(-1px);
        }
        .contact {
          display: grid;
          gap: 12px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          color: #9ca3af;
        }
        .contact-item svg {
          width: 20px;
          height: 20px;
          margin-right: 12px;
          color: var(--brand);
          flex-shrink: 0;
        }
        .copyright {
          border-top: 1px solid rgba(255,255,255,0.08);
          margin-top: 48px;
          padding-top: 24px;
          text-align: center;
          color: #9ca3af;
          font-size: 0.9375rem;
        }
      </style>
      <footer class="footer">
        <div class="container">
          <div class="grid">
            <div>
              <a href="index.html" class="brand"><img src="assets/sparksite-logo.svg" alt="SparkSite" style="width:28px;height:28px;margin-right:10px;vertical-align:middle">SparkSite</a>
              <p class="muted" style="margin-top:12px">Helping local businesses establish their online presence with affordable, high-quality websites.</p>
            </div>
            <div>
              <h4 class="section-title">Quick Links</h4>
              <ul class="list">
                <li class="item"><a href="index.html" class="link">Home</a></li>
                <li class="item"><a href="services.html" class="link">Services</a></li>
                <li class="item"><a href="demo.html" class="link">Demos</a></li>
                <li class="item"><a href="contact.html" class="link">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="section-title">Services</h4>
              <ul class="list">
                <li class="item"><a href="services.html" class="link">Business Websites</a></li>
                <li class="item"><a href="services.html" class="link">Restaurant Websites</a></li>
                <li class="item"><a href="services.html" class="link">Clinic Websites</a></li>
                <li class="item"><a href="services.html" class="link">Beauty Parlor Websites</a></li>
                <li class="item"><a href="services.html" class="link">Hair Salon Websites</a></li>
                <li class="item"><a href="services.html" class="link">Wedding Websites</a></li>
                <li class="item"><a href="services.html" class="link">Dance Class Websites</a></li>
              </ul>
            </div>
            <div>
              <h4 class="section-title">Contact Us</h4>
              <div class="contact">
                <div class="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 6.18 2 2 0 0 1 4.06 4h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.09 11a16 16 0 0 0 6 6l.57-.15a2 2 0 0 1 2.11.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z"/></svg>
                  <span>8294947402</span>
                </div>
                <div class="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span>Mon-Fri: 9am-6pm</span>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} SparkSite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
