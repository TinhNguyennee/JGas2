const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-contact">
              <h5 data-lang="contact">Liên hệ</h5>
              <p data-lang="address">Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
              <p data-lang="email">Email: support@jgas.com</p>
              <p data-lang="phone">Số điện thoại: (+84) 123 456 789</p>
            </div>

            <div className="footer-social">
              <h5 data-lang="connect">Kết nối với chúng tôi</h5>
              <div className="d-flex-icon d-flex justify-content-center">
                <a
                  href="https://www.facebook.com/nt.tinhng"
                  className="social-icon fs-4 mx-3"
                  target="_blank"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-icon fs-4 mx-3" target="_blank">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="social-icon fs-4 mx-3" target="_blank">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h5 data-lang="info">Thông tin</h5>
              <a href="#" data-lang="warranty-policy">
                Chính sách bảo hành
              </a>
              <a href="#" data-lang="terms-of-use">
                Điều khoản sử dụng
              </a>
            </div>

            <div className="footer-links">
              <h5 data-lang="contact-us">Liên hệ với chúng tôi</h5>
              <div className="form-email d-flex justify-content-center">
                {/* <!-- From Uiverse.io by satyamchaudharydev --> */}
                <div className="email-card">
                  <span className="email-card__title" data-lang="subscribe">
                    Đăng ký
                  </span>
                  <p
                    className="email-card__content text-black"
                    data-lang="subscribe-description"
                  >
                    Bạn sẽ nhận được
                  </p>
                  <div className="email-card__form">
                    <input
                      id="user_email"
                      placeholder="Email của bạn"
                      type="text"
                      data-lang-placeholder="email-placeholder"
                    />
                    <button className="email-sign-up" data-lang="subscribe-btn">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="footer-copyright">© 2025 JGas. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
