import React from "react";
import { Section, ImgContainer, Img, Download } from "./styles";

interface Props {
  imageUrl: string;
  warning: string;
  handleWarning: (content: string) => void;
}

export default function Result({ imageUrl, warning, handleWarning }: Props) {
  return (
    <Section>
      {warning && (
        <p style={{ color: "#f00", paddingBottom: "30px" }}>{warning}</p>
      )}

      {imageUrl && (
        <ImgContainer href={imageUrl} target="_blank" rel="noreferrer">
          <Img
            src={imageUrl}
            onError={() => handleWarning("Image not found. Try again 😬")}
            alt="Generated from Picsum"
          />
          <Download>
            Download image <i className="external-icon"></i>
          </Download>
        </ImgContainer>
      )}
    </Section>
  );
}
