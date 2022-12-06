/**
 *
 * SidePanel
 *
 */

import React, { useEffect } from 'react';
import { useStoreState } from '../../hooks';
import { SidePanelProps } from '../../interfaces';
import { StyledSidePanel } from './styledComponents';

function SidePanel(_props: SidePanelProps): JSX.Element {
  const {
    ui: {
      sideBar: { isOpen },
    },
  } = useStoreState((state) => state);

  return <StyledSidePanel isSidePanelOpen={isOpen}></StyledSidePanel>;
}

export default SidePanel;
