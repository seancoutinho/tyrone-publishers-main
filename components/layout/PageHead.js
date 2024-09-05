import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Tyrone Publishers - Bringing Your Designs To Life!"}
                </title>
            </Head>
        </>
    )
}

export default PageHead