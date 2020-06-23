module.exports = {
  siteMetadata: {
    title: `Medikiosk`,
    description: `Medikiosk`,
    author: `Medikiosk`,
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
        name: `Medikiosk`,
        short_name: `Medikiosk`,
        start_url: `/?source=pwa`,
        background_color: `#f4e7df`,
        theme_color: `#265c4f`,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
