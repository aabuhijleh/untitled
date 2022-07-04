import { useHelloQuery } from "@/generated/graphql";
import React from "react";
import styled from "styled-components";

export const Hello: React.FC = () => {
  const { data, loading } = useHelloQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return <Header>🚀 Hello {data.hello}</Header>;
  }

  return null;
};

const Header = styled.h1`
  font-size: var(--fz-xxxxl);
`;
