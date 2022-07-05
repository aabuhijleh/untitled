import type { NextPage } from "next";
import { Hello } from "@/components/Hello";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Hello />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
