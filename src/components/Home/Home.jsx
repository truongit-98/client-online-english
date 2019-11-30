import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <main>
        <section className="benner-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12 col-sm-6">
                <div id="logo">
                  <h1 id="logoTitle">Online English</h1>
                  <p id="logoContent">Cùng bạn xóa bỏ rào cản anh ngữ.</p>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 col-sm-6">
                <div id="title-left-top">
                 <h1 id="title">Nền Tảng Học Tiếng Anh Thông Minh</h1>
                 <p id="content-title">Online EngLish là nền tảng ngôn ngữ, được xây dựng nhằm giúp học sinh, sinh viên Việt Nam xoá bỏ rào cản Anh ngữ.</p>
                 <Link to="/SigUp/" id="btn-start">Đăng ký thành viên</Link>
                 <p id="content-title-free"><Link to="/">Trải nghiệm miễn phí!</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div id="img-benner">
            <img src="/assets/img/travel-voca.png" alt="travel"/>
          </div>
        </section>
        {/* introduce start */}
        <section className="introduce-wrapper">
          <div className="container">
            <div id="introduct-title">
              <h2 id="introduce-Title-item">hệ thống tiếng anh toàn diện</h2>
              <p id="introduce-Title-content">Tại VOCA chúng tôi đã xây dựng nên 5 hệ thống học tiếng Anh để giúp người học phát triển toàn diện cả 4 kĩ năng tiếng Anh: <strong>Nghe – Nói – Đọc – Viết</strong>. Cụ thể là:</p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="card-icon">
                     <i className="fas fa-book"/>
                    </div>
                    <h3 className="card-Title">VOCABULARY</h3>
                    <p className="card-Content">Hệ thống học từ vựng tiếng Anh</p>
                    <hr className="hr-card"/>
                    <Link className="card-link" to="/vocabulary/">Xem</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="card-icon">
                     <i className="fas fa-book"/>
                    </div>
                    <h3 className="card-Title">VOCA GRAMMAR</h3>
                    <p className="card-Content">Hệ thống học ngữ pháp tiếng Anh</p>
                    <hr className="hr-card"/>
                    <Link className="card-link" to="/grammar/">Xem</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="card-icon">
                    <i className="fas fa-music"></i>
                    </div>
                    <h3 className="card-Title">VOCA MUSIC</h3>
                    <p className="card-Content">Hệ thống luyện nghe tiếng Anh</p>
                    <hr className="hr-card"/>
                    <Link className="card-link" to="/Music/">Xem</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <div className="card-icon">
                      <i className="fas fa-book-open"></i>
                    </div>
                    <h3 className="card-Title">Test TOEIC</h3>
                    <p className="card-Content">Hệ thống học phát âm tiếng Anh</p>
                    <hr className="hr-card"/>
                    <Link className="card-link" to="/TestToeic/">Xem</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* introduce end */}
        <section className="caurse-wrapper">
          <div className="container">
            <div id="caurse-title">
              <h5 id="caurse-title-one">THƯ VIỆN HỌC TIẾNG ANH</h5>
              <p id="caurse-title-tow">Với hơn 1000+ Khóa học, bài học tiếng Anh <br/>
              Dựa theo tiêu chuẩn quốc tế, đáp ứng mọi nhu cầu học tiếng Anh khác nhau (giao tiếp, thi tín chỉ, TOEIC, IELTS,..)
              </p>
            </div>
            <div className="caurse-content">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#home">Tất cả</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#menu1">Học từ vựng</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#menu3">Luyện ngữ pháp</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#menu4">Học tiếng anh qua bài hát</a>
                </li>
              </ul>
            <div className="tab-content">
              <div className="tab-pane container active" id="home">
                <div className="card-wrap">
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu1">
                <div className="card-wrap">
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu4">
                <div className="card-wrap">
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                  <div className="card i2">
                    <img src="https://natural.voca.vn/assets/imgs/products/natural-english-b2-2019-11557910845.jpeg" className="card-img-top" alt=""/>
                    <div className="card-body">
                      <div className="card-Title">NATURAL ENGLISH B2 (2019)</div>
                      <p className="card-text">Natural English B2 là khóa học tiếng Anh giao tiếp online dựa trên phương pháp tiếp cận tự nhiên, Natural English B2 phù hợp cho các bạn có trình độ tiếng Anh cao trung cấp.</p>
                      <a href="/" className="btn btn-primary">Xem thông tin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;