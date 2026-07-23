
'use client'
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContex";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const {lang} = useLanguage();
  const pathname = usePathname();
  const showBackButton = pathname !== "/";
  const resumeFiles = {
    es: "/CV - Victor Maximiliano Herrera_(SP).pdf",
    en: "/CV - Victor Maximiliano Herrera.pdf",
  };

  
  return (
    <nav className="navbar">
      {showBackButton && (
        <Link className="back-home" href="/" aria-label={lang === "en" ? "Back to home" : "Volver al inicio"}>
          <span aria-hidden="true">&larr;</span>
        </Link>
      )}

      <div className="navbar-bottom">
        <div className="download-menu">
          <button className="nav-link download-trigger" type="button" aria-haspopup="true">
            {lang === 'en'? 'Download Resume': 'Descargar CV'}
          </button>
          <div className="download-options" role="menu">
            <a className="download-option" href={resumeFiles.es} download role="menuitem">
                {lang === 'en'? 'Spanish': 'Español'}
            </a>
            <a className="download-option" href={resumeFiles.en} download role="menuitem">
              {lang === 'en'? 'English': 'Ingles'}
            </a>
          </div>
        </div>
        <span className="divider"></span>

        <Link className="nav-link" href="/contact">
        {lang === 'en' ? 'Contact me' : 'Contáctame'}
        </Link>
        <span className="divider"></span>

        <Link className="nav-link" href="/projects">
        {lang === 'en'? "My Projects": "Mis Proyectos"}
        </Link>
      </div>
    </nav>
  );
}
