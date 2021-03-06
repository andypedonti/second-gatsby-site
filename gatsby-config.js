module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "second-gatsby-site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};
