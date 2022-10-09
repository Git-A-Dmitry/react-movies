function Header() {
  return (
    <div>
      <nav className='indigo lighten-1'>
        <div className='nav-wrapper'>
          <a href='!#' className='brand-logo'>
            Movie Fans
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='badges.html'>Home</a>
            </li>
            <li>
              <a href='collapsible.html'>About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
