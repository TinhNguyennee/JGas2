const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title" data-lang="hero-title">
            Khám phá các sản phẩm bếp gas an toàn
          </h1>
          <p className="hero-description" data-lang="hero-description">
            JGas - Đồng hành cùng mọi bữa ăn của bạn
          </p>
          <a href="#" className="hero-btn" data-lang="hero-btn">
            Xem sản phẩm
          </a>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <h2 className="section-title" data-lang="recent-posts">
            Bài viết gần đây
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-scale">
                <img
                  src="/image/bepgas1.jpg"
                  className="card-img-top"
                  alt="Bếp gas"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    <h5
                      className="card-title card-title-custom fw-bold"
                      data-lang="card1-title"
                    >
                      Bếp gas an toàn
                    </h5>
                  </a>
                  <p className="card-text-2-line" data-lang="card1-description">
                    Tìm hiểu các loại bếp gas an toàn cho gia đình bạn.
                  </p>
                  <a href="#" className="btn btn-primary" data-lang="card1-btn">
                    Xem thêm
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-scale">
                <img
                  src="/image/meonauan.webp"
                  className="card-img-top"
                  alt="Nấu ăn"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    <h5
                      className="card-title card-title-custom fw-bold"
                      data-lang="card2-title"
                    >
                      Mẹo nấu ăn nhanh
                    </h5>
                  </a>
                  <p className="card-text-2-line" data-lang="card2-description">
                    Những mẹo nhỏ giúp bạn nấu ăn nhanh chóng và hiệu quả.
                  </p>
                  <a href="#" className="btn btn-primary" data-lang="card2-btn">
                    Xem thêm
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-scale">
                <img
                  src="/image/giadinhancom.jpg"
                  className="card-img-top"
                  alt="Món ăn"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    <h5
                      className="card-title card-title-custom fw-bold"
                      data-lang="card3-title"
                    >
                      Món ăn gia đình
                    </h5>
                  </a>
                  <p className="card-text-2-line" data-lang="card3-description">
                    Khám phá các món ăn truyền thống cho bữa cơm gia đình.
                  </p>
                  <a href="#" className="btn btn-primary" data-lang="card3-btn">
                    Xem thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
