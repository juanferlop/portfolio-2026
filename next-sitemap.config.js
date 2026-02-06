// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://juanferlop.dev',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404', '/500', '/api/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/*.json$', '/admin/'],
                crawlDelay: 1,
            },
        ],
        additionalSitemaps: ['https://juanferlop.dev/sitemap.xml'],
    },
};
