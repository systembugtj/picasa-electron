export default function aspectRatio(image, designer_width, designer_height) {
  const  original_width = image.width;
  const  original_height = image.height;

  const original_ratio = original_width / original_height
  const designer_ratio = designer_width / designer_height
  if (original_ratio > designer_ratio) {
    designer_height = designer_width / original_ratio;
  } else {
    designer_width = designer_height * original_ratio;
  }
  return {
    width: designer_width,
    height: designer_height
  }
}
