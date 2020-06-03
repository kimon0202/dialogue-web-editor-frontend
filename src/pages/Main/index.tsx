import React from 'react';
import { DndProvider } from 'react-dnd';
import backend from 'react-dnd-html5-backend';

import { DragAroundCustomLayer } from '../../components/DragAndDrop';
import Sidebar from '../../components/Sidebar';
import LoadModal from './LoadModal';

// Add three+ character dialogue option

const Main: React.FC = () => {
  return (
    <>
      <Sidebar />
      <LoadModal />
      <DndProvider backend={backend}>
        <DragAroundCustomLayer />
      </DndProvider>
    </>
  );
};

export default Main;
