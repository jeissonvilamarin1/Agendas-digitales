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
  margin: 0 auto;
  max-width: 425px;
  max-height: 900px;
  height: 100vh;
  width: 100vw;
  background-image: url(https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638370993/Agendas%20Digitales/fondo-home_qkmvah.png);
      display: flex;
      flex-direction: column;
  `;

export const CardWelcomeContainer = styled.div`
  width: 280px;
  height: 59px;
  background: #ffffff;
  margin: 35px 0 30px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 15px 15px 0px;
`;

export const CardWelcomeText = styled.h4`
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.04em;
  margin-bottom: 25px;
`;

export const CardContainer = styled.div`
  padding: 25px;
  margin: 0 auto;
  height: 60%;
  width: 280px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardCoverContainer = styled.div`
  width: 225px;
  height: 80%;
  border: 1px dashed #969b9b;
  border-radius: 10px;
`;


export const CardQuote = styled.h4`
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.04em;
  margin-bottom: 25px;
`;

