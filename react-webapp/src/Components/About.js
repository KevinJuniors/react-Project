import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">

        <div className="infoWrap">
          <div className="row row-cols-lg-3" id="firstwrap">
            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>사용자 친화적인 UI</h2>
                </div>

                <div className="card-body">
                  <p>
                    React를 활용하여 사용자 친화적인 <br /> 
                    UI 구현
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>CSS를 활용한 웹 디자인 구성</h2>
                </div>

                <div className="card-body">
                  <p>
                    CSS를 활용하여 보다 다채롭고<br />
                    보기 좋은 웹 페이지를 구현
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>Bootscrap를 활용하여 심플한 <br /> 레이아웃 구성</h2>
                </div>

                <div className="card-body">
                  <p>
                    Bootscrap를 활용하여 보다 심플하고 <br />
                    감각적인 레이아웃 구성
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-lg-3" id="secondwrap">
            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>타 웹 사이트들에 비해 빠른 속도</h2>
                </div>

                <div className="card-body">
                  <p>
                    React로 개발되어 타 웹 사이트에 비해
                    더욱 빠르게 반응합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>
                    단일 페이지로 구성되어 페이지 <br /> 
                    이동하는 번거러움은 이제 그만...
                  </h2>
                </div>

                <div className="card-body">
                  <p>
                    한 페이지에서 모든 웹 컨텐츠를 <br /> 이용 할 수 있습니다..!!
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card text-dark bg-info lg-3">
                <div className="card-header">
                  <h2>별도의 로그인/회원가입 없이도 <br /> 이용 가능</h2>
                </div>

                <div className="card-body">
                  <p>
                  로그인 및 회원가입 없이 누구나<br />
                  자유롭게 저희 웹 서비스에 접속하셔서<br />
                  카페 위치를 찾아 보실 수 있습니다..
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="photowrap">
            <img src="images/testimonials-bg.jpg" alt="cafe-images" />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
