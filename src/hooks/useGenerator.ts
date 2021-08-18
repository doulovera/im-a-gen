import { useEffect, useState } from "react";

interface Props {
  widthInput: any;
  heightInput: any;
  grayscaleInput: any;
  blurInput: any;
  imageUrl: string;
}

export const useGenerator = ({
  widthInput,
  heightInput,
  grayscaleInput,
  blurInput,
  imageUrl,
}: Props) => {
  const [generateUrl, setGenerateUrl] = useState("");

  // Values
  const width = Number(widthInput.value);
  const height = Number(heightInput.value);
  const grayscale = grayscaleInput.value;
  const blur = Number(blurInput.value);

  useEffect(() => {
    // Get a random ID
    const randomId = Math.floor(Math.random() * (1085 - 0) + 0);
    // Round the size
    const roundSize = (size: number) => Math.floor(size);
    // Generates blur in the link if it exists
    const isBlur = blur ? `?blur=${blur}&` : "?";
    // Detects if grayscale is true or false
    const isGrayscale = grayscale ? "grayscale" : "";

    /* prettier-ignore */
    const URL = `https://picsum.photos/id/${randomId}/${roundSize(width)}/${roundSize(height)}${isBlur}${isGrayscale}`;

    setGenerateUrl(URL);
  }, [width, height, grayscale, blur, imageUrl]);

  return { generateUrl, width, height, grayscale, blur };
};
