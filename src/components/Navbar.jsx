function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Binita Pithakote Magar<span>.</span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>
    </nav>
  )
}

export default Navbar