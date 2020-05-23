import React from 'react';

import { CustomDragLayer, DragAndDropContainerGlobal } from '.';

// import { Container } from './styles';

const DragAroundCustomLayer: React.FC = () => {
  return (
    <>
      <DragAndDropContainerGlobal />
      <CustomDragLayer />
    </>
  );
};

export default DragAroundCustomLayer;
