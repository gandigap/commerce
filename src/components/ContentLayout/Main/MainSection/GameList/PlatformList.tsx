import { IPlatform } from 'models/IPlatform';
import { platformAPI } from 'services/PlatformsService';

import styled from 'styled-components';
import 'styles/mixinsAndVars.scss';

const PlatformListContainer = styled.div``;

const PlatformList = () => {
  const { data: platforms, error, isLoading } = platformAPI.useFetchAllPlatformsQuery(35);
  return (
    <PlatformListContainer>
      {isLoading && <h3>Идет загрузка</h3>}
      {error && <h3>Fault</h3>}
      {platforms &&
        platforms.results.map((platform: IPlatform) => <p key={platform.id}>{platform.name}</p>)}
    </PlatformListContainer>
  );
};

export default PlatformList;
