import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">

      {/* nav footer */}
      <div className="container-fluid bg-black d-flex justify-content-center footer-nav">
        <div className="container row my-5">
          <div className="col-5">
            <p className="me-5 pe-5 d-flex align-items-center logo-text" href="###">
              <span className="fs-1 pe-2">AR</span> 
                <img src={process.env.PUBLIC_URL+"logo-white.svg"} height="60" alt="Araktek Logo"/>
              <span className="fs-1 px-2">KTEK</span> 
            </p>
            <p className="fs-6 mb-4 pt-3">
              Araktek is the go-to shop for pre-built pc, games, gadgets, accessories and much more. With a wide range of quality products. Araktek has you covered for providing the latest and in-demand ones available in our store at a reasonable price tag.
            </p>

            <p className="fs-3 team m-0 pt-2">The Dev Team</p>
            <div className="d-flex justify-content-center mt-2">
              <a className="pe-3 d-flex align-items-center" href="###">
                  <img className="team_icon" src={process.env.PUBLIC_URL+"/img/team/John.jpg"} alt="Louie"/>
              </a>
              <a className="pe-3 d-flex align-items-center" href="###">
                  <img className="team_icon" src={process.env.PUBLIC_URL+"/img/team/romar.jpg"} alt="romar"/>
              </a>
              <a className="pe-3 d-flex align-items-center" href="###">
                  <img className="team_icon" src={process.env.PUBLIC_URL+"/img/team/Louie.jpg"} alt="louie"/>
              </a>
            </div>

          </div>

          <div className="col-3 ms-auto d-flex mt-2 flex-column">
            <h1 className="footer-title text-uppercase">Customer Support</h1>
            <a className="ps-4 py-3 fs-5 fw-bold" href="###">Return & Refund</a>
            <a className="ps-4 pb-3 fs-5 fw-bold" href="###">Order Cancellation</a>
            <a className="ps-4 pb-3 fs-5 fw-bold" href="###">Warranty</a>
            <a className="ps-4 pb-3 fs-5 fw-bold" href="###">FAQs</a>
          </div>
          
          <div className="col-3 ps-5 d-flex mt-2 flex-column">
            <h1 className="footer-title text-uppercase">About</h1>
            <a className="ps-4 py-3 fs-5 fw-bold" href="###">Company</a>
            <a className="ps-4 pb-3 fs-5 fw-bold" href="###">Promos</a>
            <a className="ps-4 pb-3 fs-5 fw-bold" href="###">Support</a>
            <a className="ps-4 pb-3 fs-5 fw-bold" href="###">Terms & Services</a>
          </div>
        </div>
      </div>
      
      {/* footer Sign */}
      <div className="container-fluid bg-light footer-contianer p-0">
        <div className="container py-3 d-flex justify-content-center">
          <p className="footer-sign"> © 2022 Araktek. All Rights Reserved <span className="mx-1">|</span> Handfully weaved by
          <a href="###"> Aracholō Group</a></p>

          <p className="footer-sign-mobile"> © 2022 Araktek. All Rights Reserved <span className="mx-1">|</span>
          <a href="###">Aracholō Group</a></p>
        </div>

      </div>
    </div>
  )
}

export default Footer