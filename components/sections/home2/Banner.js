export default function Banner() {
    return (
        <>
            <section className="banner-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9 order-0 order-lg-2">
                            <div className="banner-img-three" data-aos="fade-left" data-aos-delay={300}>
                                <img src="/assets/img/banner/h3_banner_img03.jpg" alt="" className="main-img" />
                                <img src="/assets/img/banner/h3_banner_img02.jpg" alt="" className="img-two" data-parallax="{&quot;y&quot; : 100 }" />
                                {/* <img src="/assets/img/banner/h3_banner_img03.jpg" alt="" className="img-three" data-parallax="{&quot;x&quot; : -100 }" /> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-content-three">
                                <h2 className="title" data-aos="fade-right" data-aos-delay={0}>Bring Your Vision to Life with Premium Printing Services</h2>
                                <p data-aos="fade-right" data-aos-delay={300}>At Tyrone Publishers, we turn your ideas into stunning prints that make a lasting impression. Whether it’s business cards, brochures, banners, or custom merchandise, we deliver high-quality results with vibrant colors and crisp details</p>
                                <form action="#" className="banner-form" data-aos="fade-right" data-aos-delay={600}>
                                    <input type="text" placeholder="e-mail address" />
                                    <button type="submit"><i className="flaticon-right-arrow" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap-three">
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" />
                    <img src="/assets/img/banner/h3_banner_shape02.png" alt="" />
                </div>
            </section>
        </>
    )
}
