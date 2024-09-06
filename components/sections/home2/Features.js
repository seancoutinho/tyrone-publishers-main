import Link from "next/link"
import { GiClothes } from "react-icons/gi";
import { ImPrinter } from "react-icons/im";
import { SiTaichigraphics } from "react-icons/si";

export default function Features() {
    return (
        <>
            <section className="features-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title-two text-center mb-40 tg-heading-subheading animation-style1">
                                <span className="sub-title tg-element-title">What We Do For You</span>
                                <h2 className="title tg-element-title">Here Are Some Services That We Can Offer You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="features-item-wrap-two">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <SiTaichigraphics />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Graphic Design</h2>
                                        <p>Work with our dedicated team to roll out your designs into a concept from logos, business cards, brochures, pamphlets, posters, fliers, letterheads, etc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <ImPrinter />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Printing</h2>
                                        <p>We do large format printing which includes Tear drop banners, roll-up banners, x-frame banners, promotional stands, gazebos, backdrop banners, billboards etc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <GiClothes />

                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">Corporate Clothing</h2>
                                        <p>We do branded corporate and promotional clothing. We provide companies with an opportunity to get some of the best branded clothing. get your company logo printed on your work clothes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features-item-three">
                                    <div className="features-icon-three">
                                        <i className="flaticon-investment" />
                                    </div>
                                    <div className="features-content-three">
                                        <h2 className="title">3D Printing</h2>
                                        <p>Experience the future with our 3D printing services. We can bring your ideas to life by creating custom 3D models and prototypes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
