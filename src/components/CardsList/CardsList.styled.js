import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  gap: 20px;

  margin-bottom: 40px;
`;

export const LoadMore = styled.button`
  display: block;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;

  padding: 14px 56px;
  margin: 0 auto;

  border: none;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;
`;
