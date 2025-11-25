export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-left">
          © {new Date().getFullYear()} Kaffeepedia — Coffee Science · Enzyklopädie · Kaffeeducation.
        </div>
        <div className="footer-right">
          <a className="footer-contact" href="mailto:info@kaffeepedia.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
