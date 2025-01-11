import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header-container">
          <div className="logo">JGas</div>
          <nav className="menu">
            <Link to="/" className="menu-item" data-link data-lang="home">
              Trang chủ
            </Link>
            <Link to="/about" className="menu-item" data-link data-lang="about">
              Giới thiệu
            </Link>
            <Link to="/posts" className="menu-item" data-lang="posts">
              Bài viết
            </Link>
            <Link to="/contact" className="menu-item" data-lang="contact">
              Liên hệ
            </Link>
          </nav>
          <div className="right-section">
            <input
              type="text"
              className="search-input"
              placeholder="Tìm kiếm..."
              data-lang-placeholder="search-placeholder"
            />
            <button className="lang-switch-btn">VN/EN</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
