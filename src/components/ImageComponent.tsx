import { useState } from "react";

type PropType = {
  src: string;
  alt: string;
  imageClass: string;
};

function ImageComponent({ src, alt = "image", imageClass = "" }: PropType) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="imagePlaceholder" data-testid="loading-spinner">
          <div className="loadingSpinner"></div>
        </div>
      )}
      <div className={`imageContainer ${isLoading && "visibilityHidden"}`}>
        <img
          src={src}
          alt={alt}
          className={imageClass}
          onLoad={handleImageLoad}
        />
      </div>
    </>
  );
}

export default ImageComponent;
