import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
            <section className="counter-area-two">
                <div className="container">
                    <div className="counter-item-wrap">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={95} />%</h2>
                                    <p>Success Rate</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={2} />k</h2>
                                    <p>Complete Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={219} /></h2>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="counter-item-two">
                                    <h2 className="count"><CounterUp count={15} /></h2>
                                    <p>Works Done For Zimbabwean Companies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
