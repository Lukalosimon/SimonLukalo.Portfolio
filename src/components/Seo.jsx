import React from 'react';
import { Helmet } from 'react-helmet';

// Keep literal page titles/descriptions in the page files for the build step.
const Seo = ({ title, description, image, url, siteName, type = 'website', jsonLd, author }) => {
    const baseUrl =
        import.meta.env.VITE_SITE_URL ||
        (typeof window !== 'undefined' ? window.location.origin : '');

    const canonical = (() => {
        if (url) {
            try {
                return baseUrl ? new URL(url, baseUrl).href : new URL(url).href;
            } catch {
                return url;
            }
        }

        if (typeof window !== 'undefined') {
            return window.location.href.split('#')[0];
        }

        return baseUrl;
    })();

    // Social crawlers require an absolute URL for preview images.
    const absoluteImage = (() => {
        if (!image) return undefined;
        try {
            return new URL(image, baseUrl || 'https://simonlukalo.github.io').href;
        } catch {
            return image;
        }
    })();

    return (
        <Helmet>
            <meta name="robots" content="index,follow" />
            {author && <meta name="author" content={author} />}
            <link rel="canonical" href={canonical} />
            <meta property="og:url" content={canonical} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={type} />
            {siteName && <meta property="og:site_name" content={siteName} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {absoluteImage && <meta property="og:image" content={absoluteImage} />}
            {image && <meta property="og:image:alt" content={title || siteName || 'Open Graph image'} />}
            <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
            {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
        </Helmet>
    );
}

export default Seo;

export { Seo };
