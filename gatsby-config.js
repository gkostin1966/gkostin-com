module.exports = {
  siteMetadata: {
    title: `Greg Kostin`,
    description: `Applications Programmer`,
    author: `Greg Kostin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `www-gkostin-com`,
        short_name: `gkostin`,
        start_url: `/`,
        background_color: `#C0C0C0`,
        theme_color: `#C0C0C0`,
        display: `minimal-ui`,
        icon: `src/images/gkostin-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
