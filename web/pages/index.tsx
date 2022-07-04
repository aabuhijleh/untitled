import type { NextPage } from "next";
import { Hello } from "@/components/Hello";
import styled from "styled-components";
import gql from "graphql-tag";

const Home: NextPage<{ hello: string }> = ({ hello }) => {
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
