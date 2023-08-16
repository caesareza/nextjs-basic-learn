import Head from 'next/head'

export default function MetaHead(props) {
    return(
        <Head>
            <title>{props.title} - lalaland.com</title>
            <meta name="description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />
            <meta property="og:url" content={props.url} />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="id_ID" />
            <meta name="twitter:card" content={props.description} />
            <meta name="twitter:site" content="@nytimesbits" />
            <meta name="twitter:creator" content="@nickbilton" />
        </Head>
    )
}