import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import BrandSlider from "@/components/slider/BrandSlider"
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"
import Link from "next/link"

export default function About2() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    {/* about-area */}
                    <section className="about-area-eight pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9">
                                    <div className="about-img-eight">
                                        <img src="/assets/img/images/about-1.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content-eight">
                                        <div className="section-title-two mb-30">
                                            <span className="sub-title">Get To Know More</span>
                                            <h2 className="title">We Have More Than 20+ Years Of Practical Knowledge in The Printing Industry</h2>
                                        </div>
                                        <p></p>
                                        <div className="about-content-inner">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-business-presentation" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Graphic Design</h4>
                                                        <p>Hire us for digital marketing and graphic design services in Zimbabwe.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-investment" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Photocopying & Printing</h4>
                                                        <p>We do printing and photocopying services for companies and individuals across the country.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="right-slide-img">
                                                <img src="/assets/img/images/inner_about_img04.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="about-content-bottom">
                                            <div className="services-btn">
                                                <Link href="/services" className="btn">Our Services</Link>
                                            </div>
                                            <div className="about-author-info">
                                                <div className="content">
                                                    <h2 className="title">Tatenda Mawaro</h2>
                                                    <span>CEO, Tyrone Publishers Finance</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* choose-area */}
                    <section className="choose-area-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="choose-content-three">
                                        <div className="section-title-two white-title mb-30">
                                            <span className="sub-title">FAQs</span>
                                            <h2 className="title">Some of the most frequently asked questions by our clients</h2>
                                        </div>
                                        <div className="accordion-wrap-two">
                                            <Accordion />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="choose-img-three">
                                        <img src="/assets/img/images/inner_choose_img.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* choose-area-end */}
                    {/* team-area */}
                    <section className="team-area team-bg" data-background="/assets/img/bg/team_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="section-title text-center mb-50">
                                        <span className="sub-title">Skilled Team Members</span>
                                        <h2 className="title">Meet Our Dedicated Team</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <img src="/assets/img/team/team_img01.jpg" alt="" />
                                            <div className="team-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2 className="title"><Link href="/team-details">Tatenda Mawaro</Link></h2>
                                            <span>CEO / Marketing Executive</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-9">
                                    <div className="team-item">
                                        <div className="team-thumb">
                                            <img src="/assets/img/team/team_img04.jpg" alt="" />
                                            <div className="team-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <h2 className="title"><Link href="/team-details">Tafadzwa S.Bande</Link></h2>
                                            <span>Managing Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="brand-area-six pt-80 pb-80">
                        <div className="container">
                            <BrandSlider />
                        </div>
                    </div>
                    {/* brand-area-end */}
                </div>

            </Layout>
        </>
    )
}