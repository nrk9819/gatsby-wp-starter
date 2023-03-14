import {Helmet} from 'react-helmet'
import useSiteMetadata from '../../hooks/use-site-metadata'
import {isValidUrl} from "../../utils/functions/is-valid-url.mjs"
export const Seo = ({title, description, pathname, image, children}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image
      ? (isValidUrl(image)? image : new URL(image,siteUrl).href)
      : (isValidUrl(defaultImage)? defaultImage : new URL(defaultImage,siteUrl).href),
    url: pathname
      ? new URL(pathname,siteUrl).href
      : ""
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />

      {/*For facebook (https://ogp.me/) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {image && <meta property="og:image" content={seo.image} />}

      {/* For twitter (https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {children}
    </Helmet>
  )
}