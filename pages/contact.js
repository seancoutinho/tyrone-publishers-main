import Layout from "@/components/layout/Layout"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={2} breadcrumbTitle="Contact Us">
                <div>
                    <section className="inner-contact-area pt-120 pb-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="inner-contact-img">
                                        <img src="/assets/img/images/contact_img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="inner-contact-info">
                                        <h2 className="title">Our Office Address</h2>
                                        <div className="contact-info-item">
                                            <h5 className="title-two">USA Office</h5>
                                            <ul className="list-wrap">
                                                <li>No.6 ,Room 11.Lucky Street, Kopje ,<br /> Harare, Zimbabwe</li>
                                                <li>+263 775 349 085</li>
                                              
                                                <li>tyronepublishers@gmail.com</li>
                                            </ul>
                                        </div>
                                        {/* <div className="contact-info-item">
                                            <h5 className="title-two">Australia Office</h5>
                                            <ul className="list-wrap">
                                                <li>Harare Zimbabwe<br /> Monica, CA 90401, USA</li>
                                                <li>+1 (310) 620-8565</li>
                                                <li>info@gmail.com</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.121449441889!2d31.03519018073089!3d-17.832940739639806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4fa3f3b45a5%3A0x14fece5c1e8bf33d!2s6%2C%2011%20Luck%20St%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szm!4v1725635274099!5m2!1sen!2szm" allowFullScreen loading="lazy" />
                    </div>
                </div>
            </Layout>
        </>
    )
}