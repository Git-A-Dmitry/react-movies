function Header() {
  return (
    <div>
      <nav className="deep-purple lighten-1">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Avant-Garde
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
