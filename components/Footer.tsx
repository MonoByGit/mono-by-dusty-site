import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="wrap wrap-wide">
        <div className="footer-feature">
          <p className="footer-sign-lg">
            <em>Creëren</em> is de handtekening, mensen <em>meenemen</em> is de missie.
          </p>
        </div>
        <div className="footer-inner">
          <div className="footer-brandcol">
            <Link className="brand" href="/">
              <svg className="brand-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <g><path d="m7.5 5.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m4.2 8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m3 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m4.2 17.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m7.5 20.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m12 22c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m16.5 20.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m19.8 17.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.5 1-1 1z" /></g>
                <g><path d="m21 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m19.8 8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.5 1-1 1z" /></g>
                <g><path d="m16.5 5.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
                <g><path d="m12 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              </svg>
              <span className="brand-name">
                <b>Mono</b> <span>by Dusty</span>
              </span>
            </Link>
            <p className="footer-tag">
              <b>AI voor het MKB, van leren tot bouwen.</b>
              <br />
              Door Dusty Baars.
            </p>
          </div>
          
          <div className="footer-col footer-nav">
            <h4>Navigatie</h4>
            <Link href="/#aanpak">Aanpak</Link>
            <Link href="/aanbod">Aanbod</Link>
            <Link href="/paden">Paden</Link>
            <Link href="/nulmeting">Nulmeting</Link>
            <Link href="/prijzen">Prijzen</Link>
            <Link href="/#over">Over</Link>
            <Link href="/contact">Contact</Link>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:studio@monobydusty.com">studio@monobydusty.com</a>
            <a href="tel:+31600000000" className="opacity-90 hover:opacity-100 transition-opacity">
              +31 (0)6 0000 0000 <small className="text-ink-mute">(Placeholder)</small>
            </a>
            <span style={{ fontSize: "14.5px" }} className="text-ink-soft">
              KvK: 00000000 <small className="text-ink-mute">(Placeholder)</small>
            </span>
            <a href="https://www.linkedin.com/in/dustybaars/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.dustybaars.com" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>&copy; {currentYear} Mono by Dusty</span>
          <span>Opgesteld door Dusty Baars, Mono by Dusty &middot; 9 juni 2026</span>
          <span>monobydusty.com</span>
        </div>
      </div>
    </footer>
  );
}
