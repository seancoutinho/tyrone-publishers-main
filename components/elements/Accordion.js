
import { useState } from 'react'

export default function Accordion() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button">
                            What types of printing services do you offer?
                        </button>
                    </h2>
                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>We offer a wide range of printing services, including digital printing, offset printing, large format printing, and specialty printing. This encompasses business cards, brochures, flyers, banners, posters, labels, and custom packaging. If you have a specific project in mind, feel free to contact us, and we can discuss how we can meet your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button">
                            How do I prepare my files for printing?
                        </button>
                    </h2>
                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>To ensure the best quality print, please follow these guidelines when preparing your files:
                                File Format: Use high-resolution files in formats like PDF, TIFF, or EPS. JPEGs are acceptable but ensure they are high resolution (300 dpi).
                                Bleed and Margins: Include a 0.125-inch bleed around your design and ensure no important elements are within 0.25 inches of the edge.
                                Color Mode: Use CMYK color mode for accurate color representation in print. RGB is typically used for digital screens.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button">
                            What is the turnaround time for printing projects?
                        </button>
                    </h2>
                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>Turnaround time can vary based on the complexity and size of your project. Typically, standard printing jobs are completed within 3 to 7 business days. For more urgent needs, we offer expedited services. Please provide us with details about your project and deadline, and we’ll give you a more accurate timeframe.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                            Can you help with graphic design, or do I need to provide my own designs?
                        </button>
                    </h2>
                    <div id="collapseThree" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p>Yes, we offer graphic design services as part of our printing solutions. Whether you need a logo, branding materials, or a custom design for your print job, our talented designers can help bring your vision to life. If you already have a design, we can work with your files to ensure they are print-ready. Just let us know what you need, and we'll guide you through the process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
