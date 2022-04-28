import Head from 'next/head'

interface MetaProps {
  keywords?: string
  description?: string
  title?: string
}

const Meta = (props: MetaProps) => {
  const { keywords, description, title } = props

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords || "craftworldofwar"} />
      <meta name="description" content={description || "play craftworldofwar free"} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title || "Craftworldofwar"}</title>
    </Head>
  )
}

export default Meta
