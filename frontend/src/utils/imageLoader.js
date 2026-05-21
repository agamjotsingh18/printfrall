// src/utils/imageLoader.js

/**
 * The base endpoint path pointing directly to your ImageKit media dashboard container.
 */
export const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/printfrall/assets";

/**
 * High-performance helper engine that builds optimized, transformed CDN asset strings.
 * * @param {string} fileName - The name of the file (e.g., 'jacket-2.png')
 * @param {object} transforms - Optimization preferences (width, height, quality)
 * @returns {string} Fully optimized ImageKit CDN URL string
 */
export const getCdnImage = (fileName, transforms = {}) => {
  if (!fileName) return "";
  
  // Clean up any accidental leading or trailing slashes in the path name
  const cleanFileName = fileName.replace(/^\//, "");
  
  let url = `${IMAGEKIT_BASE_URL}/${cleanFileName}`;
  
  // Build ImageKit transformation parameters array
  const params = [];
  
  if (transforms.width) params.push(`w-${transforms.width}`);
  if (transforms.height) params.push(`h-${transforms.height}`);
  
  // Set smart quality control (defaults to auto-optimal 80 if not specified)
  const quality = transforms.quality || 80;
  params.push(`q-${quality}`);
  
  // Enable auto-formatting (turns PNGs into lightweight WebP/AVIF formats automatically)
  params.push("f-auto");

  if (params.length > 0) {
    url += `?tr=${params.join(",")}`;
  }
  
  return url;
};
