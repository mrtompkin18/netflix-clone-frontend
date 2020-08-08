import styled, { keyframes } from "styled-components";

export const Header = styled.h2`
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${(props) => props.mb || ""};
    margin-top: ${(props) => props.mt || ""};
    margin-left: ${(props) => props.ml || ""};
    margin-right: ${(props) => props.mr || ""};
`;

export const Overview = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  opacity: ${props => props.opacity || 1};
  font-size: ${props => props.size || "16px"};
  font-weight : ${props => props.weight || "normal"};
  margin : ${props => props.margin || "auto"}
`;

export const Button = styled.button`
    cursor: pointer;
    height: 40px;
    padding: 0px 25px;
    margin-top: 20px;
    margin-right: 10px;
    font-weight: bold;
    font-size: 16px;
    border: 0px;
    border-radius: 4px;
    vertical-align: middle;
    background: ${props => props.playBtn ? `#fff` : `rgba(109, 109, 110, 0.7)`};
    color: ${props => props.playBtn ? `#000` : `#fff`};
    transition: all 0.4s;
    &:hover {
        opacity :0.7;
    }
`;

export const Body = styled.div`
  background-color: ${props => props.theme.body};
  transition: background-color 0.5s ease-in-out;
  font-family: "Inter";
  font-size: 16px;
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
