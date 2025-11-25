import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // read current theme from documentElement
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current || "light");
  }, []);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("kaffeepedia-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <header className="nav" role="banner">
      <div className="nav-inner">
        <Link href="/" className="nav-left" aria-label="Kaffeepedia homepage">
          <span className="logo-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="14" cy="14" rx="10" ry="13" stroke="currentColor" strokeWidth="1.8" />
              <path d="M14 5Q17 14 14 23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span className="wordmark">KAFFEEPEDIA</span>
        </Link>

        <nav className="nav-center desktop-nav" aria-label="Main navigation">
          <a href="#enzyklopaedie">Enzyklopädie</a>
          <a href="#kaffeeeducation">Kaffeeducation</a>
          <a href="#science">Coffee Science</a>
          <a href="#ai">Coffee AI</a>
        </nav>

        <div className="nav-right">
          <button id="theme-toggle" className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
            <span className="icon icon-sun" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M12 2.5v1.8" />
                  <path d="M12 19.7v1.8" />
                  <path d="M4.2 4.2l1.25 1.25" />
                  <path d="M18.55 18.55l1.25 1.25" />
                  <path d="M2.5 12h1.8" />
                  <path d="M19.7 12h1.8" />
                  <path d="M4.2 19.8l1.25-1.25" />
                  <path d="M18.55 5.45l1.25-1.25" />
                </g>
              </svg>
            </span>
            <span className="icon icon-moon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.3A8.3 8.3 0 1111.7 3 6.7 6.7 0 0021 12.3z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="toggle-label">{theme === "dark" ? "Dark" : "Light"}</span>
          </button>

          <span className="dev-pill" aria-hidden="true">PHASE 0 · IN DEVELOPMENT</span>
        </div>
      </div>
    </header>
  );
}
