import React, { FunctionComponent } from 'react';

interface IProps {
  name: string;
}

const Home: FunctionComponent<IProps> = ({ name }) => {
  return <div>{name}</div>;
};
