import React, { useEffect, useState } from "react";
import { CardContainer, CardCoverContainer, CardQuote } from "../styles/styles";
import { Image } from "cloudinary-react";

export const Card = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [image, setImage] = useState("");

  const fileUpload = async (file) => {
    const url = "https://api.cloudinary.com/v1_1/dtp6uf9vc/upload";
    const formData = new FormData();
    formData.append("upload_preset", "agendas-digitales");
    formData.append("file", imageSelected);

    const resp = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const urlCloud = await resp.json();
    console.log(urlCloud.secure_url);
    setImage(urlCloud.secure_url);
  };

  useEffect(() => {}, [image]);

  return (
    <>
      <CardContainer>
        <CardQuote>
          Escoge la imágen que más te guste para que te acompañe e inspire en tu
          dia a dia
        </CardQuote>

        {!image ? (
          <CardCoverContainer>
            <input
              type="file"
              onChange={(e) => {
                setImageSelected(e.target.files[0]);
              }}
              required
            />
            <button type="button" onClick={fileUpload}>
              Cargar imagen
            </button>
          </CardCoverContainer>
        ) : (
          <CardCoverContainer>
            <Image
              cloudName="dtp6uf9vc"
              publicId={`${image}`}
              style={{ width: "225px", height: "100%", opacity: "0.9" }}
            />
          </CardCoverContainer>
        )}
      </CardContainer>
    </>
  );
};
