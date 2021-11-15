export const getImageRect = file => {
  return new Promise((resolve, reject) => {
    const src = URL.createObjectURL(file);
    const image = new Image();
    image.src = src;

    image.onload = () => {
      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };

    image.onerror = reject;
  })
};
