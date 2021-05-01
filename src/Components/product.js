import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
    items: 1,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    autoplayTimeout:5000,
    dots: true,
    dotsEach:true,
    dotData:true,
    navText: ["<span><i class='fa fa-chevron-circle-left caro-left' aria-hidden='true'></i></span>","<span><i class='fa fa-chevron-circle-right caro-right' aria-hidden='true'></i></span>"],
    smartSpeed: 2000,
    loop:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 1
      },
      700: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };
export default class product extends Component {
    render() {
        return (
        <div>
        <Header></Header>
        <section>
        <div className="container-fluid p-0">
          <div className="row mt-3 justify-content-between menu p-0 ml-0 mr-0">
            <div className="col-md-3  menu-back"></div>
            <div></div>
            <div className="col-md-2 col-6 fnt menu-back">Know Your Skin</div>
            <div></div>
            <div className="col-md-2 col-6 fnt menu-back">Past Recommendation</div>
            <div></div>
            <div className="col-md-3  menu-back"></div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-1"></div>
            <div className="col-sm-12 col-md-5 ">
                <div className="card cardback text-white p-5 skincard">
                    <div className="card-text  text-left pb-5">
                        <h3>Loremipsum Loremipsum Loremipsum  Loremipsumipsum ?</h3>
                    </div>
                    <div className="card-text text-left mb-5">
                        <p>Loremipsum Loremipsum Loremipsum</p>
                        <p> Loremipsum Loremipsum Loremipsum</p>
                        <p> Loremipsum Loremipsum</p>
                    </div>
                    <div className="card-text text-left my-5 ">
                        <button className="btn btn-light">Start Diagnosis <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i></button>
                    </div>
                    <div>
                        <img className="skinimg" src="\Image\face-skin-check-before-plastic-260nw-1564436914 2.png"/>
                    </div>
                </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-sm-12 col-md-4 ">   
                <div className="card last-visited mb-5" >
                    <div className="card-text text-white visited-head py-3 text-left pl-5">Last Visited</div>
                    <div className="card-text text-left pl-5 py-3">March 2021</div>
                    <div className="card-text mt-2">
                        <div className="row jusify-content-center pl-5 mb-3">
                            <div className="col col-sm text-center">
                                <div className="row ml-0 mb-2">S</div>
                                <div className="row ml-0 mb-2">29</div>
                            </div>
                            <div className="col col-sm">
                                <div className="row ml-0 mb-2">M</div>
                                <div className="row ml-0 mb-2">30</div>
                            </div>
                            <div className="col col-sm">
                                <div className="row ml-0 mb-2">T</div>
                                <div className="row ml-0 mb-2">1</div>
                            </div>
                            <div className="col col-sm dt-clr pr-0">
                                <div className="row ml-0 mr-0 mb-2">W</div>
                                <div className="row ml-0 mr-0 mb-2">2</div>
                            </div>
                            <div className="col col-sm">
                                <div className="row ml-0 mb-2">T</div>
                                <div className="row ml-0 mb-2">3</div>
                            </div>
                            <div className="col col-sm">
                                <div className="row ml-0 mb-2">F</div>
                                <div className="row ml-0 mb-2">4</div>
                            </div>
                            <div className="col col-sm">
                                <div className="row ml-0 mb-2">S</div>
                                <div className="row ml-0 mb-2">5</div>
                            </div>
                        </div>
                    
                </div>
                </div>
                <div className="card last-visited mt-5" >
                    <div className="card-text text-white visited-head py-3 text-left pl-5">Last Diagnosed Report</div>
                    <div className="card-text mt-2">
                        <div className="row jusify-content-center my-4 mx-0">
                            <div className="col-md-4 col-4">
                              
                                <div className="diagnose-box py-3 px-2">
                                <div className="col-md-12 col-12 col-sm-12">
                                <img src="\Image\img.png" width="50px"></img>
                                    <button className="btn btn-view mt-3">View Report</button>
                              </div>
                                    
                                </div>
                            </div>
                            <div></div>
                            <div className="col-md-4  col-sm-4 col-4">
                            <div className="diagnose-box py-3 px-2">
                            <div className="col-md-12 col-12">
                                    <img src="\Image\img.png" width="50px"></img>
                                    <button className="btn btn-view mt-3">View Report</button>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div className="col-md-4 col-4 col-sm-4">
                            <div className="diagnose-box py-3 px-2">
                            <div className="col-md-12 col-12">
                                    <img src="\Image\img.png" width="50px"></img>
                                    <button className="btn btn-view mt-3">View Report</button>
                                </div>
                                </div>
                            </div>
                </div>
                </div>
                
            </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        <div className="row my-5 justigy-content-center ml-0">
          <div className="col-md-1"></div>
        <h4>Recommended Products for your Oily Skin</h4>
        </div>
        <div className="row my-5">
          <div className="col-md-1"></div>
          <div className="col-md col-6">
            <div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-product btn-lg">View Product</button></div>
            </div>
          </div>
          <div className="col-md col-6"><div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-product btn-lg">View Product</button></div>
            </div>
          </div>
          <div className="col-md col-6"><div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-product btn-lg">View Product</button></div>
            </div>
          </div>
          <div className="col-md col-6"><div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-product btn-lg">View Product</button></div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row block-back">
          <div className="col-md-1"></div>
          <h4 className="mt-4 text-white md-txt">Recommended Loremipsum</h4>
        </div>
        <div className="row block-back py-5">
         
        <div className="col-md-1"></div>
          <div className="col-md col-6">
            <div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-secondary   ">View Product</button></div>
            </div>
          </div>
          <div className="col-md col-6"><div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-secondary ">View Product</button></div>
            </div>
          </div>
          <div className="col-md col-6"><div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-secondary ">View Product</button></div>
            </div>
          </div>
          <div className="col-md col-6"><div className="card last-visited py-3">
              <div className="card-text py-3"> <img src="\Image\img.png" width="100px"></img></div>
              <div className="card-text py-3">Product Name</div>
              <div className="card-text py-3"><button className="btn btn-secondary ">View Product</button></div>
            </div>
          </div>
          <div className="col-md-1"></div>
          </div>
        <div className="row my-5">
        <OwlCarousel className="owl-carousel" {...options}>
          <div className="carosul-back">
            <div className="line"></div>
            <img className="carosul-img" src="\Image\screen.png"></img>
            <img className="pc-screen" src="\Image\pcscreen.png"></img>
            <img className="carousel-left" src="\Image\carso-right.png"></img>
            <button className="btn carousel-btn">Start Diagnosis&nbsp;&nbsp; <i className="fa fa-chevron-right"></i></button>
            <div className="cir"></div>
          </div>
          <div className="carosul-back">
            <div className="line"></div>
            <img className="carosul-img" src="\Image\screen2.png"></img>
            <img className="pc-screen" src="\Image\pcscreen2.png"></img>
            <div className="carousel-left">
              <img  src="\Image\carso-right2.png"></img>
              <img className="upload" src="\Image\upload-mg.png"></img>
              <div className="txt"><p className="upload-hd">Drag or drop image here</p><p className="upload-p">Supported formats: JPG, PNG, JPEG</p></div>
            </div>
            </div>
            <div className="carosul-back">
            <div className="line"></div>
            <img className="carosul-img" src="\Image\screen.png"></img>
            <img className="pc-screen" src="\Image\pcscreen.png"></img>
            <img className="carousel-left" src="\Image\carso-right.png"></img>
            <button className="btn carousel-btn">Start Diagnosis&nbsp;&nbsp; <i className="fa fa-chevron-right"></i></button>
            <div className="cir"></div>
          </div>
          <div className="carosul-back">
                       <div className="line"></div>
            <img className="carosul-img" src="\Image\screen2.png"></img>
            <img className="pc-screen" src="\Image\pcscreen2.png"></img>
            <div className="carousel-left">
              <img  src="\Image\carso-right2.png"></img>
              <img className="upload" src="\Image\upload-mg.png"></img>
              <div className="txt"><p className="upload-hd">Drag or drop image here</p><p className="upload-p">Supported formats: JPG, PNG, JPEG</p></div>
            </div>
            </div>
          </OwlCarousel>
        </div>
        <div>
          
        </div>
        <Footer></Footer>
      </section>
            </div>
        )
    }
}
