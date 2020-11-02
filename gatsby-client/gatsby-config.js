module.exports = {
  siteMetadata: {
    title: `Alkonost X7`,
    description: `Alkonost X7 website is a library of ambient/instrumental tunes and music generated through 
    trained data models using using a pipeline on Pachyderm Hub and the Magenta Project Music Transformer.`,
    author: `@osman144`,
    siteUrl: `https://gatsby-starter-fresh.netlify.app`,
    keywords: [
      "osman144",
      "Salah Osman",
      "Alkonost",
      "X7",
      "Gatsby",
      "Offgrid Labs",
      "ambient music",
      "psybient",
      "space", 
      "PWA", 
      "Google Analytics", 
      "markdown", 
      "code highlighting",
      "SEO",
      "social media",
      "sitemap",
      "contact form"
    ],
    social: {
      twitter: ``,
      facebook: ``,
      github: ``,
      email: ``,
      linkedin: ``,
      formspree: ''
    },
    image: '/fresh.png',
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
        name: `Fresh Theme`,
        short_name: `fresh`,
        start_url: `/`,
        background_color: `#2d2a2a`,
        theme_color: `#2d2a2a`,
        display: `minimal-ui`,
        icon: `src/images/fresh-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<GA Code>",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `fresh`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
