import React, { useState } from 'react';
import { IMAGE_PLACEHOLDER } from '@/lib/assets';

/**
 * Image that degrades gracefully.
 *
 * If the source fails to load — missing file, dead third-party URL, offline —
 * the browser's broken-image icon is replaced by an on-brand placeholder of
 * the same shape, so the layout never collapses and the page never renders as
 * broken. Photographs live on external hosts that expire eventually, so every
 * image on the site goes through this component.
 */
const SmartImage = ({ src, alt = '', className = '', ...rest }) => {
  const [hasFailed, setHasFailed] = useState(false);
  const resolvedSrc = hasFailed || !src ? IMAGE_PLACEHOLDER : src;

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={() => setHasFailed(true)}
      {...rest}
    />
  );
};

export default SmartImage;

export { SmartImage };
