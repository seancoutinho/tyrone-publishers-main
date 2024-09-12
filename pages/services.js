import Layout from "@/components/layout/Layout"
import { LuPrinter } from "react-icons/lu";
import { PiFlagBannerDuotone } from "react-icons/pi";
import { IoClipboardSharp } from "react-icons/io5";

export default function Services() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="Our Services">
                <section className="services-area-five inner-services-bg" data-background="/assets/img/bg/inner_services_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="section-title-two text-center mb-50">
                                    <h2 className="title">Spotlight Some Services We Offer</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <LuPrinter />
                                            </div>
                                            <h2 className="title">Vehicle Branding</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/vehicle-branding.jpeg" alt="" />

                                        </div>
                                        <ul className="list-wrap">
                                            <p>At Tyrone Publishers, we specialize in transforming vehicles into mobile advertisements with high-quality, custom-designed branding. Whether for a single vehicle or an entire fleet, our expert team ensures your brand stands out on the road with eye-catching designs and durable, long-lasting materials.</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <PiFlagBannerDuotone />
                                            </div>
                                            <h2 className="title">Graphic Design</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/graphic-design.jpg" alt="service 2" />

                                        </div>
                                        <ul className="list-wrap">
                                            <p>Tyrone Publishers offers professional graphic design services tailored to elevate your brand. From logos and brochures to digital assets and more, our creative team delivers innovative designs that capture your vision and engage your audience, ensuring your brand stands out across all platforms."</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <IoClipboardSharp />
                                            </div>
                                            <h2 className="title">Banners and Billboards</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/banners.jpeg" alt="" />

                                        </div>
                                        <ul className="list-wrap">
                                            <p>Tyrone Publishers creates impactful banners and billboards that capture attention and promote your message. With bold designs and durable materials, we help you maximize visibility for your brand in both outdoor and indoor environments</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <LuPrinter />
                                            </div>
                                            <h2 className="title">Shop/Office Branding</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/office-branding.jpeg" alt="" />

                                        </div>
                                        <ul className="list-wrap">
                                            <p>Elevate your business space with customized shop and office branding from Tyrone Publishers. Our expert team designs and installs signage, window graphics, and more to create a cohesive, professional look that reflects your brand identity.</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <PiFlagBannerDuotone />
                                            </div>
                                            <h2 className="title">Corporate Clothing</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/coporate-clothing.jpeg" alt="service 2" />

                                        </div>
                                        <ul className="list-wrap">
                                            <p>Enhance your brand presence with Tyrone Publishers' corporate clothing solutions. We provide high-quality, branded apparel that ensures your team looks professional and unified, leaving a lasting impression on clients and customers.</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="services-item">
                                    <div className="services-content">
                                        <div className="content-top">
                                            <div className="icon">
                                                <IoClipboardSharp />
                                            </div>
                                            <h2 className="title">Digital Marketing</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/digital-marketing.jpeg" alt="" />

                                        </div>
                                        <ul className="list-wrap">
                                            <p>Boost your online presence with Tyrone Publishers' digital marketing services. From social media management to SEO and targeted campaigns, we help your brand reach and engage with the right audience to drive growth and success.</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}