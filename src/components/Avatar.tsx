import React from "react";

interface Props {
  img?: string;
  alt?: string;
  w?: number;
  h?: number;
}

const Avatar: React.FC<Props> = ({ alt, img, w, h }) => {
  return (
    <div className="flex items-center justify-around gap-2">
      <img
        className="img-avatar rounded-full"
        alt={alt}
        src={img}
        width={50 || w}
        height={50 || h}
      />
    </div>
  );
};

export default Avatar;
