import React from 'react';

import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const SearchInput = () => {
  return (
    <Space>
      <Input size="large" placeholder="Search 642,916 games" prefix={<SearchOutlined />} />
    </Space>
  );
};

export default SearchInput;
