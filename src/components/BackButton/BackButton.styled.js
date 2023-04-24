import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: inline-block;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  text-decoration: none;

  color: #373737;

  padding: 14px 56px;

  border: none;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;
`;

export const ButtonWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 20px 0;
`;
