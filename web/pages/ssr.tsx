import type { NextPage } from "next";
import { Hello } from "@/components/Hello";
import styled from "styled-components";
import hello from "@/graphql/queries/hello.graphql";
import { addApolloState, initializeApollo } from "@/client";

const HomeSSR: NextPage = () => {
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

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: hello,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default HomeSSR;
