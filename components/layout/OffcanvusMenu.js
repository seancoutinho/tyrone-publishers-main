import Link from "next/link"

export default function OffcanvusMenu({ isOffcanvus, handleOffcanvus }) {
    return (
        <>
            <div className={`extra-info ${isOffcanvus ? "active" : ""}`}>
                <div className="close-icon menu-close" onClick={handleOffcanvus}>
                    <button><i className="far fa-window-close" /></button>
                </div>
                <div className="logo-side mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                </div>
                <div className="side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Office Address</h4>
                        <p>No.6 ,Room 11.Lucky Street, Kopje,
                            <br />  Harare Zimbabwe</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Phone Numbers</h4>
                        <p>+263 775 349 085</p>
                        <p>+263 716 512 799</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>tyronepublishers@gmail.com</p>
                    </div>
                </div>
                {/* <ul className="side-instagram list-wrap">
                    <li><Link href="#"><img src="/assets/img/images/osonto.jpeg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/1.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/2.jpeg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/3.jpeg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/2jpeg.jpg" alt="" /></Link></li>
                    <li><Link href="#"><img src="/assets/img/images/sb_insta06.jpg" alt="" /></Link></li>
                </ul> */}
                <div className="social-icon-right mt-30">
                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                    <Link href="#"><i className="fab fa-twitter" /></Link>
                    <Link href="#"><i className="fab fa-google-plus-g" /></Link>
                    <Link href="#"><i className="fab fa-instagram" /></Link>
                </div>
            </div>
            <div className={`offcanvas-overly ${isOffcanvus ? "active" : ""}`} onClick={handleOffcanvus} />
        </>
    )
}
