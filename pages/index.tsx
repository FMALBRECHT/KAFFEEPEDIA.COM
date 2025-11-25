import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaffeepedia — The World’s Coffee Encyclopedia & University</title>
        <meta name="description" content="Kaffeepedia — The world’s coffee encyclopedia and university. Science-based, academic, impartial knowledge for the specialty coffee world." />
      </Head>

      <section className="section hero-section reveal">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="section-heading">The future home of</div>
            <h1 className="section-title">The World’s Coffee Encyclopedia &amp; University</h1>
            <p className="section-subtitle">
              Kaffeepedia’s mission: Unify coffee biology, chemistry, physics, sensory, roasting, brewing, systems, and the entire scientific foundation of the craft.
            </p>

            <div className="fake-searchbar" role="search" aria-hidden="true">
              <input type="text" disabled placeholder="Search varieties, extraction, water, roasting, sensory…" />
              <span className="search-pill">Search coming soon</span>
            </div>

            <div className="meta-line">Built as a precise, scientifically grounded backbone for the global specialty coffee world.</div>

            <div className="hero-actions">
              <a className="button primary" href="mailto:info@kaffeepedia.com?subject=Join%20the%20early%20interest%20list">Join early interest list →</a>
              <a className="button secondary" href="#enzyklopaedie">Explore the vision</a>
            </div>

            <div className="founder-note">Fäïzan Müßtafa Albrecht, Kaffeepedia &amp; Kaffeeducation</div>
          </div>

          <div className="hero-right">
            <div className="card launch-roadmap reveal reveal-delay-1">
              <div className="card-title">Launch roadmap</div>
              <p>The first deliverables for Kaffeepedia:</p>
              <ul>
                <li>Arabica &amp; Robusta A–Z</li>
                <li>Science volumes — biology, chemistry, physics</li>
                <li>Sensory &amp; psychophysics framework</li>
                <li>Kaffeeducation learning paths</li>
              </ul>
              <div className="card-chips">
                <span className="chip">Enzyklopädie</span>
                <span className="chip">Kaffeeducation</span>
                <span className="chip">Coffee Physics</span>
                <span className="chip">AI Assistant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="enzyklopaedie" className="section reveal">
        <div className="section-heading">Kaffeepedia Enzyklopädie</div>
        <h2 className="section-title">The scientific backbone of coffee knowledge</h2>
        <p className="section-subtitle">Building a precise, impartial, and multilingual knowledge base for coffee’s biology, chemistry, physics, sensory, and practice.</p>
        <div className="card-grid">
          <div className="card info-card reveal reveal-delay-1">
            <div className="card-title">Arabica &amp; Robusta A–Z</div>
            <p>Comprehensive entries, varieties, genetics, history, and agricultural science.</p>
          </div>
          <div className="card info-card reveal reveal-delay-2">
            <div className="card-title">From molecule to cup</div>
            <p>Chemistry, structure, and processes that shape every aspect of coffee’s journey.</p>
          </div>
          <div className="card info-card reveal reveal-delay-3">
            <div className="card-title">Multilingual, digital-first</div>
            <p>Global access in multiple languages; powerful digital experience for research and education.</p>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">Scope (Topics)</div>
        <h2 className="section-title">A vast map of coffee science and practice</h2>
        <div className="scope-grid">
          <div className="scope-left">
            <div className="scope-subheading">Core domains</div>
            <ul className="topic-grid">
              <li>Varieties &amp; cultivars</li>
              <li>Processing methods</li>
              <li>Soil, climate &amp; water activity</li>
              <li>Roast physics &amp; chemistry</li>
              <li>Extraction theory (TDS, EY, pressure)</li>
              <li>Sensory science &amp; culture</li>
              <li>Water chemistry</li>
              <li>Equipment &amp; measurement</li>
            </ul>
          </div>
          <div className="scope-right">
            <div className="scope-subheading">Planned tools</div>
            <ul>
              <li>Lexicon, concept graphs</li>
              <li>Roast/brew calculators</li>
              <li>Sensory forms</li>
              <li>Water/cost/quality tools</li>
              <li>Deep search across books and classes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="kaffeeeducation" className="section reveal">
        <div className="section-heading">Kaffeeducation</div>
        <h2 className="section-title">From enthusiast to coffee scientist</h2>
        <p className="section-subtitle">Kaffeeducation is the scientific &amp; educational arm — deep, structured, and open learning pathways for the entire specialty coffee world.</p>
        <div className="card-grid">
          <div className="card info-card reveal reveal-delay-1">
            <div className="card-title">Pathways</div>
            <p>Scientifically structured learning, from foundation to advanced topics.</p>
          </div>
          <div className="card info-card reveal reveal-delay-2">
            <div className="card-title">Standards</div>
            <p>Aligned with industry, but built for deeper scientific rigor and objectivity.</p>
          </div>
          <div className="card info-card reveal reveal-delay-3">
            <div className="card-title">Formats</div>
            <p>Courses, texts, visual and interactive microlearning.</p>
          </div>
        </div>
      </section>

      <section id="science" className="section reveal">
        <div className="section-heading">Coffee Science</div>
        <h2 className="section-title">Physics, chemistry, and sensory — properly connected</h2>
        <p className="section-subtitle">Integrating physical systems, molecular transformations, and psychophysics into a unified knowledge structure.</p>
        <div className="card-grid">
          <div className="card info-card reveal reveal-delay-1">
            <div className="card-title">Physics</div>
            <p>Flow, heat, extraction, and system modeling.</p>
          </div>
          <div className="card info-card reveal reveal-delay-2">
            <div className="card-title">Chemistry</div>
            <p>Compounds, transformations, molecular structures and chemistry of taste, aroma, and extraction.</p>
          </div>
          <div className="card info-card reveal reveal-delay-3">
            <div className="card-title">Sensory</div>
            <p>How psychophysics, perception, and cultural science connect the data to experience.</p>
          </div>
        </div>
      </section>

      <section id="ai" className="section reveal">
        <div className="section-heading">Coffee AI</div>
        <h2 className="section-title">A focused assistant for coffee, not generic chat</h2>
        <p className="section-subtitle">Purpose-built tools, assistants and apps for baristas, researchers, and enthusiasts — always precise, never generic.</p>
        <div className="card-grid">
          <div className="card info-card reveal reveal-delay-1">
            <div className="card-title">Use cases</div>
            <p>From bar to lab — knowledge and calculation tools for professionals and learners.</p>
          </div>
          <div className="card info-card reveal reveal-delay-2">
            <div className="card-title">Integration</div>
            <p>Apps, calculators, and interfaces for direct support in the field and lab.</p>
          </div>
          <div className="card info-card reveal reveal-delay-3">
            <div className="card-title">Philosophy</div>
            <p>Designed for precision, not hype — always focused on accurate, actionable knowledge.</p>
          </div>
        </div>
      </section>
    </>
  );
}
