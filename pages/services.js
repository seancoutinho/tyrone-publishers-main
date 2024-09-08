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
                                    <h2 className="title">Spotlight some most important features We have</h2>
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
                                            <h2 className="title">Printing and Photocopying</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/printers.webp" alt="" />
                                            
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Business Cards | Flyers | Posters</li>
                                            <li>Brochures | Company Profiles | Letterheads</li>
                                            <li>Calendars | Pamphlets</li>
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
                                            <h2 className="title">Bannners</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/services_img01.jpg" alt="service 2" />
                                            
                                        </div>
                                        <ul className="list-wrap">
                                            <li>PullUp Banners | XFrame Banners | Teardrop Banners</li>
                                            <li>Telescopic Banners | Pop Banners | Backdrop Banners</li>
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
                                            <h2 className="title">Promotional Advertising</h2>
                                        </div>
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/service-1/x-frame.jpg" alt="" />
                                            
                                        </div>
                                        <ul className="list-wrap">
                                            <li>Gazebos</li>
                                            <li>Promotional Stands | Signage | </li>
                                            <li>Vehicle Branding | Shop Branding</li>
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