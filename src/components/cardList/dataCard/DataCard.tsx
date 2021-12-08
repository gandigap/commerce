import { IData } from 'interfaces/dataInterfaces';
import React from 'react';

type IProps = {
  info: IData;
};

const DataCard: React.FC<IProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default DataCard;
