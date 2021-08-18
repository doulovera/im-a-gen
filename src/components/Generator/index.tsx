import React, { useState } from "react";
import { useField } from "../../hooks/useField";
import { useGenerator } from "../../hooks/useGenerator";
import {
  Div,
  LabelInput,
  InputSize,
  InputCheckbox,
  LabelBlurInput,
  InputBlur,
  Button,
} from "./styles";

interface Props {
  imageUrl: string;
  handleImageUrl: (url: string) => void;
  handleWarning: (content: string) => void;
}

export default function Settings({
  handleImageUrl,
  imageUrl,
  handleWarning,
}: Props) {
  const [isClicked, setIsClicked] = useState(false);

  // Creating inputs with custom useField hook
  const widthInput = useField("number", 300);
  const heightInput = useField("number", 300);
  const grayscaleInput = useField("checkbox", false);
  const blurInput = useField("range", 0);

  const { generateUrl, width, height, blur } = useGenerator({
    widthInput,
    heightInput,
    grayscaleInput,
    blurInput,
    imageUrl,
  });

  const onSubmit = () => {
    if (width > 5000 || width < 1)
      return handleWarning("The maximum Width is 5000");
    if (height > 5000 || height < 1)
      return handleWarning("The maximum Height is 5000");
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
    handleImageUrl(generateUrl);
    handleWarning("");
  };

  return (
    <section>
      <Div>
        <LabelInput title="Image Width" isWidth>
          <InputSize {...widthInput} min={1} max={5000} placeholder="Width" />
        </LabelInput>
        <LabelInput title="Image Height" isWidth={false}>
          <InputSize {...heightInput} min={1} max={5000} placeholder="Height" />
        </LabelInput>
        <label style={{ position: "relative" }} title="Gray filter">
          <InputCheckbox {...grayscaleInput} />
          <i className="drop-icon"></i>
        </label>
        <LabelBlurInput title="Blur level">
          <i className="blur-icon"></i>
          <InputBlur
            {...blurInput}
            min={0}
            max={10}
            thumbColor={
              blur === 0 ? "var(--blue-secondary)" : "var(--blue-primary)"
            }
          />
          <span>{blur}</span>
        </LabelBlurInput>
        <Button
          onClick={onSubmit}
          className={isClicked ? "disabled" : ""}
          disabled={isClicked}
        >
          <i className="eye-icon"></i>
        </Button>
      </Div>
    </section>
  );
}
