import '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ProductPage.css';
import { useState } from 'react';

const ProductInformation = () => {
    const [color, setColor] = useState('');

    const changeColor = (e) => {
        if (color === e.target.value) {
            setColor('');
        } else {
            setColor(e.target.value);
        }
    };

    return (
        <div id="product-information">
            <div className="information-container">
                <div className="product-information">
                    <div className="product-detail">
                        <strong>AMOMENTO X OROR</strong>
                        <br />
                        <br />
                        빈티지 클래식 무드의 타원형 쉐입 선글라스. 외경과 내경의
                        쉐입이 다른 프론트 디테일을 더해 클래식한 디자인에
                        유니크하고 빈티지한 무드를 더한 아이웨어입니다. 섬세한
                        디자인적 가치를 추구하는 아이웨어 브랜드 OROR 와 만나
                        AMOMENTO의 23SS 시즌 컨셉을 볼륨감 있는 실루엣과 포인트
                        컬러로 담아낸 완성도 높은 아이템입니다. 위아래로 둥근
                        곡선을 이루는 템플 쉐입으로 디자인하여 아이템의 전체적인
                        라운드 실루엣의 통일감을 더했습니다. 99.9% UV 차단이
                        되는 기능성 렌즈를 사용하여 자외선이 강한 여름철에
                        활용하기 좋은 악세사리입니다.
                        <br />
                        <br />
                        유니섹스
                        <br />
                        타원형 쉐입
                        <br />
                        빈티지 클래식 무드
                        <br />
                        볼륨감 있는 실루엣
                        <br />
                        UV 차단 렌즈 사용
                        <br />
                        <br />
                        *고온에 장시간 노출 시 프레임 변형이 생길 수 있으니 이
                        점 유의하시길 바랍니다.
                        <br /> *실제 컬러는 상세 이미지와 가장 유사합니다.
                        <br />
                    </div>
                    <div className="product-name-price">
                        <h5 className="product-name">OV SUNGLASSES (BLACK)</h5>
                        <div className="product-price">289,000</div>
                    </div>
                    <div className="color-option">
                        <div className="color-label">
                            <label>Color</label>
                            <label className="selected-color">{color}</label>
                        </div>
                        <button
                            type="button"
                            class="btn btn-secondary"
                            value={'GRAY'}
                            onClick={changeColor}
                        ></button>
                    </div>
                    <div className="size-option">
                        <label className="size-label">Size</label>
                        <button className="size-button">One Size</button>
                    </div>
                    <div className="add-cart">
                        <button className="add-to-cart-button">
                            ADD TO CART
                        </button>
                    </div>
                    <div className="naver-pay">
                        <button className="naver-pay-button">NAVER PAY</button>
                    </div>
                    <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                    >
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                >
                                    SIZE GUIDE
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div class="accordion-body">사이즈 기입</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                >
                                    FABRIC & CARE
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div class="accordion-body">
                                    뭐쓰는지 모르겠지만 일단 기입
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                >
                                    SHIPPING & RETURNS
                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div class="accordion-body">
                                    " SHIPPING"
                                    <br />- 아모멘토는 CJ대한통운과 배송대행
                                    계약이 체결되어 있습니다.
                                    <br />- 배송비
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information-empty-space"></div>
                </div>
                <div className="product-image">
                    <div className="total">
                        <div
                            id="carouselExampleDark"
                            class="carousel carousel-dark slide"
                        >
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div class="carousel-inner">
                                <div
                                    class="carousel-item active"
                                    data-bs-interval="10000"
                                >
                                    <div className="image-container">
                                        <img
                                            src="//amomento.co/web/product/small/202306/c7806ee4a4ea5a556394903a379ab56a.jpg"
                                            class="d-block w-100"
                                            alt="..."
                                        ></img>
                                    </div>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>
                                            Some representative placeholder
                                            content for the first slide.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="carousel-item"
                                    data-bs-interval="2000"
                                >
                                    <div className="image-container">
                                        <img
                                            src="//amomento.co/web/product/extra/small/202306/3fd5db95ee170c8179ff0ac839e4ff7f.jpg"
                                            class="d-block w-100"
                                            alt="..."
                                        ></img>
                                    </div>

                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>
                                            Some representative placeholder
                                            content for the second slide.
                                        </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="..."
                                        class="d-block w-100"
                                        alt="..."
                                    ></img>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>
                                            Some representative placeholder
                                            content for the third slide.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="right-empty-space"></div>
            </div>
        </div>
    );
};

export default ProductInformation;
