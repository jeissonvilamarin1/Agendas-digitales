import React, { useEffect, useState } from "react";
import { CardContainer, CardCoverContainer, CardQuote, ButtonOrangeCards } from "../styles/styles";
import { Image } from "cloudinary-react";
import { useDispatch } from "react-redux";
import { registerportada } from "../actions/tasksAction";
import { getFirestore, getDoc, doc, setDoc } from "@firebase/firestore";



const firestore = getFirestore();

export const Card = ({ id }) => {

  async function obtenerimagen() {
    const docuRef = doc(firestore, `usuarios/${id}`);
    const consulta = await getDoc(docuRef);
    console.log(consulta)
    if (consulta.exists()) {
      const infoDocu = consulta.data();
      const urlimage = infoDocu.portada;
      console.log(urlimage);
      return urlimage;
    } else {
      await setDoc(docuRef, { portada: "" });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      const urlimage = infoDocu.portada;
      console.log(urlimage);
      return urlimage;
    }
  }

  const [image, setImage] = useState("");

  useEffect(async () => {
    const obtimagen = await obtenerimagen()
    setImage(obtimagen)
    console.log(obtimagen)
  }, []);

  console.log(image)

  const [imageSelected, setImageSelected] = useState("");

  const dispatch = useDispatch();
  const fileUpload = async (file) => {
    const url = "https://api.cloudinary.com/v1_1/dtp6uf9vc/upload";
    const formData = new FormData();
    formData.append("upload_preset", "agendas-digitales");
    formData.append("file", file);

    const resp = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const urlCloud = await resp.json();
    console.log(urlCloud.secure_url);
    setImage(urlCloud.secure_url);
  };

  const handlePictureClick = () => {
    setImage("");
  }

  useEffect(() => {
    if (image) {
      dispatch(registerportada(image, id))
    };
  }, [image]);
  console.log(image)
  return (
    <>
      {!image ? (
        <CardContainer>
          <>
            <CardQuote>
              Escoge la imágen que más te guste para que te acompañe e inspire
              en tu dia a dia
            </CardQuote>
            <CardCoverContainer>
              <input
                id="fileSelector"
                type="file"
                onChange={(e) => {
                  fileUpload(e.target.files[0]);
                }}
                required
              />
            </CardCoverContainer>
          </>
        </CardContainer>
      ) : (
        <CardContainer>
          <Image
            cloudName="dtp6uf9vc"
            publicId={`${image}`}
            style={{ width: "225px", height: "100%", opacity: "0.9" }}
          />
          <ButtonOrangeCards type="button"
            style={{ width: "225px", height: "7%", opacity: "0.9", cursor: "pointer" }}
            onClick={handlePictureClick}
          >Editar</ButtonOrangeCards>
        </CardContainer>
      )}

    </>
  );
};
