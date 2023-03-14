/**
 @type {import('gatsby').GatsbyConfig}
 */
const config = {
  jsxRuntime: 'automatic',
  jsxImportSource: 'react',
  siteMetadata: {
    title: `Gatsby-Wordpress Template`,
    description: `My amazing blog :)`,
    image: `https://source.unsplash.com/ePpaQC2c1xA`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    /**
     * Plugin to get data from Wordpress CMS
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://tech-blog.local/graphql`,
      },
    }
  ]
}

export default config