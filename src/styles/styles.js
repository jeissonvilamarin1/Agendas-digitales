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
  margin-bottom: 15px;
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