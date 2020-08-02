import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Header2 = styled.h2`
    color: ${props => props.theme.colors.primary};
`;

export const Body = styled.div`
  background-color: ${props => props.theme.body};
  transition: background-color 0.5s ease-in-out;
`;

const pulse = keyframes`
	0% {
		background-position: 0% 0%;
	}

	100% {
		background-position: -135% 0%;
	}
`;

const SkeletonPulse = styled.div`
  display: block;
  background: linear-gradient(-90deg,#141414 0%,#353535 50%,#141414 100%);
  background-size: 400% 400%;
  animation: ${pulse} 1s linear infinite;
`;

export const Skeleton = styled(SkeletonPulse)`
  margin-bottom: ${(props) => props.mb || ""};
  margin-top: ${(props) => props.mt || ""};
  margin-left: ${(props) => props.ml || ""};
  margin-right: ${(props) => props.mr || ""};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`;
