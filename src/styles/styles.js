import styled from "styled-components";

export const SectionImage = styled.img`
      width: 250px;
      height: 250px;
`;

export const SectionImageLogin = styled.img`
      width: 240px;
      height: 230px;
`;
export const SectionImageRegister = styled.img`
      width: 160px;
      height: 160px;
`;

export const SectionTitle = styled.h1`
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      text-align: start;
`;

export const ButtonContainer = styled.div`
      display: flex;
      flex-direction: column;

`

export const ButtonBlue = styled.button`
  background-color: #0a8791;
  height: 60px;
  width: 280px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 15px;
  color: white;
  border: 1px solid #0a8791;
  margin-bottom: 8px;
`;

export const ButtonOrange = styled.button`
  background-color: white;
  border: 2px solid #fba83c;
  height: 60px;
  width: 280px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 15px;
  color: #fba83c;
  z-index: 2;
  margin-bottom: 8px;

  &&:hover {
    color: white;
    background-color: #fba83c;
  }
`;

export const SuccessInfo = styled.h4`
  font-size: 12px;
  color: green;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;

export const ErrorInfo = styled.h4`
  font-size: 10px;
  color: red;
  margin-left: 10px;
  margin-top: -15px;
  font-weight: 600;
  line-height: 24px;
  text-align: start;
`;

export const Menu = styled.nav`
      background-color:rgba(10, 135, 145, 0.6);
      max-width: 425px;
      width: 100%;
      height: 85px;
      position: fixed;
      bottom: -10px;
      border-radius: 10px;
`;

export const MenuList = styled.ul`
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin-top: 20px;
     padding-left: 0;
`;

export const MenuListItem = styled.li`
     text-decoration: none;
     list-style: none;
`;

export const ContainerHome = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 425px;
  max-height: 900px;
  height: 100vh;
  width: 100vw;
  background-image: url(https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370993/Agendas%20Digitales/fondo-home_qkmvah.png);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  `;

export const CardWelcomeContainer = styled.div`
  width: 280px;
  height: 59px;
  background: #ffffff;
  margin: 25px 0 25px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 15px 15px 0px;
  padding: 5px 0 5px 20px;
`;

export const CardWelcomeText = styled.h4`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #0a8791;
`;
export const CardWelcomeQuestion = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #0e122b;
  letter-spacing: 0.04em;
`;

export const CardContainer = styled.div`
  padding: 25px ;
  margin: 0 auto;
  height: 95%;
  width: 280px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const CardCoverContainer = styled.div`
  width: 225px;
  height: 80%;
  border: 1px dashed #969b9b;
  border-radius: 10px;
  overflow: hidden;
`;


export const CardQuote = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.04em;
  margin-bottom: 25px;
  color: black;
`;

export const CardsContainer = styled.div`
  padding: 0px 25px;
  margin: 0 auto;
  width: auto;
  height: 70vh;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 425px;
  width: 100vw;
  scrollbar-color: grey;

  &&::-webkit-scrollbar {
    width: 1px;
  }

  &&::-webkit-scrollbar-track {
    background: transparent;
    opacity: 0.8;
    border-radius: 10px;
  }

  &&::-webkit-scrollbar-thumb {
    background: rgba(240, 240, 240, 0.3);
    border-radius: 30px;
    border: 1px solid rgba(162, 162, 162, 0.4);
    opacity: 0.8;
  }

  &&::-webkit-scrollbar-thumb:hover {
    background: rgba(240, 240, 240, 0.5);
  }

  &&::-webkit-scrollbar-thumb:active {
    background: rgba(240, 240, 240, 0.5);
  }
`;

export const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 425px;
  max-height: 900px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const ButtonBlack = styled.button`
  background-color: black;
  border: 1px solid black;
  height: 35px;
  width: 140px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 15px;
  color: white;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const ContainerProfile = styled.div`
  margin: 0 auto;
  max-width: 425px;
  max-height: 900px;
  overflow-y: scroll;
  height: 88vh;
  width: 100vw;
  background-image: url(https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370993/Agendas%20Digitales/fondo-home_qkmvah.png);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const ButtonProfileContainer = styled.div`
  display: flex;
`;

export const CardImage = styled.img`
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/checklist-cover_erbtmk.png");
  width: 100%;
  object-fit: cover;
  height: 95%;
  border-radius: 10px;
  z-index: 1;
`;

export const ButtonOrangeCards = styled.button`
  color: white;
  background-color: #fba83c;
  border: 2px solid #fba83c;
  height: 60px;
  width: 250px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 15px;

  z-index: 2;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  &&:hover {
    color: #fba83c;
    background-color: white;
  }
`;

export const CardListContainer = styled.div`
  position: relative;
  height: 95%;
  width: 480px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/checklist-cover_erbtmk.png");
`;

export const CardCoverListContainer = styled.div`
  width: 280px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  `;


export const ContainerSections = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 425px;
  max-height: 900px;
  height: 100vh;
  width: 100vw;
  background-image: url(https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370993/Agendas%20Digitales/fondo-home_qkmvah.png);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;

`;

export const HeaderSections = styled.div`
  position: absolute;
  top: 0%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: left;
  align-items: center;

`;

export const ButtonBack = styled.button`
  width: 50px;
  height: 50px;
  background: #e5e6e7;
  border-radius: 15px;
  border: none;
  margin: 0 15px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWelcomeText = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #0a8791;
`;
export const HeaderWelcomeQuestion = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #0A8791;
`;

export const ContainerSectionHero = styled.div`
  position: relative;
  margin-top: 120px;
  max-width: 425px;
  max-height: 900px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;

export const CardMetasContainer = styled.div`
  position: relative;
  height: 95%;
  width: 480px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/metas-anuales_qctb2j.png");
`;

export const ContainerCalendar = styled.div`
  margin: 0 auto;
  max-width: 425px;
  max-height: 900px;
  overflow-y: scroll;
  height: 88vh;
  width: 100vw;
  background-image: url(https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370993/Agendas%20Digitales/fondo-home_qkmvah.png);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`

export const CardAgendaContainer = styled.div`
  position: relative;
  height: 95%;
  width: 480px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/agenda-cover_foqazi.png");
`;

export const CardHorariosContainer = styled.div`
  position: relative;
  height: 95%;
  width: 480px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/horarios-cover_p8nhbb.png");
`;

export const CardCalificacionesContainer = styled.div`
  position: relative;
  height: 95%;
  width: 480px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/calificaciones-cover_lzkxqr.png");
`;

export const CardContrasenasContainer = styled.div`
  position: relative;
  height: 95%;
  width: 480px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/contrase%C3%B1as-cover_ip7coi.png");
`;

export const CardViajesContainer = styled.div`
  position: relative;
  height: 95%;
  width: 480px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-image: url("https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638975417/Agendas%20Digitales/viajes-cover_bkzcqz.png");
`;

export const ButtonCalification = styled.button`
  width: 90%;
  height: 60px;
  background: #ffffff;
  border: 1px solid #0a8791;
  box-sizing: border-box;
  border-radius: 15px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #0a8791;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

