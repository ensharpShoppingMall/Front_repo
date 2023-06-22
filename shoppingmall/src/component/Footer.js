import '../css/WomenProductPage.css';

const Footer = () => {
    return (
        <div id="footer">
            <div className="company-information">
                상호: 주식회사 스튜디오에이엠티 대표자(성명): 이미경, 이명수
                사업자등록번호: 522-86-01478 통신판매업신고번호:
                2020-서울종로-0896 전화: 02-6929-1383 주소: 서울특별시 종로구
                자하문로 67, 5층 이메일: MYEONGSOO.LEE@AMOMENTO.KR
            </div>
            <div className="contact-information-container">
                <p>© 2022 AMOMENTO</p>
                <ul>
                    <li>Contact</li>
                    <li>Legal</li>
                    <li>Order Tracking</li>
                    <li>Career</li>
                </ul>
                <p>WEBSITE BY W/COWORKERS</p>
            </div>
        </div>
    );
};
export default Footer;
