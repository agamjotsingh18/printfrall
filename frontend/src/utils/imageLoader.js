export const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/printfrall/assets";

export const getCdnImage = (fileName, transforms = {}) => {
  if (!fileName) return "";
  
  const cleanFileName = fileName.replace(/^\//, "");
  
  let url = `${IMAGEKIT_BASE_URL}/${cleanFileName}`;
  
  const params = [];
  
  if (transforms.width) params.push(`w-${transforms.width}`);
  if (transforms.height) params.push(`h-${transforms.height}`);
  
  const quality = transforms.quality || 80;
  params.push(`q-${quality}`);
  
  params.push("f-auto");

  if (params.length > 0) {
    url += `?tr=${params.join(",")}`;
  }
  
  return url;
};