import Link from "next/link"
import MobileMenu from "../MobileMenu"
import SearchPopup from "../SearchPopup"

export default function Header6({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
    return (
        <>
            <div id="header-fixed-height" className={scroll ? "active-height" : ""} />
            <header className="header-style-six">
                <div className="heder-top-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li><i className="flaticon-location" />No.6 ,Room 11.Lucky Street, Kopje ,
                                            Harare Zimbabwe</li>
                                        <li><i className="flaticon-mail" /><Link href="mailto:tyronepublishers18@gmail.com">tyronepublishers18@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="header-top-right">
                                    <div className="header-contact">
                                        <Link href="tel:263775349085"><i className="flaticon-phone-call" />+263 775 349 085</Link>
                                    </div>
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="active"><Link href="/">Home</Link>
                                                </li>
                                                <li className=""><Link href="/about">About Us</Link>
                                                </li>
                                                <li className=""><Link href="/services">Services</Link>
                                                </li>
                                                <li className=""><Link href="/gallery">Gallery</Link>
                                                </li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-search" onClick={handleSearch}><Link href="#"><i className="flaticon-search" /></Link></li>
                                                <li className="header-btn"><Link href="/contact" className="btn btn-two">Get a Quote</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>

                                        <div className="menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                            </div>
                        </div>
                    </div>
                </div>
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
            </header>
        </>
    )
}
