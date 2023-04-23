import styled from "@emotion/styled";

export const Item = styled.li`
  position: relative;

  width: 380px;
  height: 460px;

  text-align: center;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ItemsImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 28px;
  margin-bottom: 18px;
`;

export const DecorateLine = styled.div`
  width: 100%;
  height: 8px;

  margin-bottom: 62px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const DecorateAvatar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -64%);

  width: 62px;
  height: 62px;

  border: 9px solid #ebd8ff;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px 0.19582px 4.39163px #ae7be3, inset 0px 0.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;

export const ItemsButton = styled.button`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;

  padding: 14px 56px;

  border: none;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;
`;
