import React from "react";

export default function DocLayout({ children, frontMatter }: { children: React.ReactNode; frontMatter?: Record<string, any> }) {
  return (
    <article className="section reveal doc-section">
      <div className="doc-meta">
        <div className="section-heading">Document</div>
        <h1 className="section-title">{frontMatter?.title || "Untitled"}</h1>
        {frontMatter?.authors && <div className="meta-line">{Array.isArray(frontMatter.authors) ? frontMatter.authors.join(", ") : frontMatter.authors}</div>}
        {frontMatter?.date && <div className="meta-line">{frontMatter.date}</div>}
        {frontMatter?.tags && <div className="meta-line">Tags: {Array.isArray(frontMatter.tags) ? frontMatter.tags.join(", ") : frontMatter.tags}</div>}
      </div>

      <div className="doc-content">
        {children}
        <div className="doc-footer-note" style={{ marginTop: "2rem", fontStyle: "italic", color: "var(--text-soft)" }}>
          Citations coming soon — references will be displayed here when available.
        </div>
      </div>
    </article>
  );
}
