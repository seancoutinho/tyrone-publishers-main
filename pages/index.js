import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Counter from "@/components/sections/home2/Counter"
import Cta from "@/components/sections/home2/Cta"
import Features from "@/components/sections/home2/Features"
import Overview from "@/components/sections/home2/Overview"
import Project from "@/components/sections/home2/Project"


export default function Home2() {
    return (
        <>
            <Layout headerTitle='Tyrone Publishers' headerStyle={2} footerStyle={2}>
                <Banner />
                {/* <Brand /> */}
                <Features />
                <About />
                <Overview />
                <Project />
                <Counter />
                <Cta />
            </Layout>
        </>
    )
}