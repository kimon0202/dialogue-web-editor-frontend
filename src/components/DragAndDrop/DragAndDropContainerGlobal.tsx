import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext, useState } from 'react';
import { useDrop } from 'react-dnd';

import { RootStoreContext } from '../../stores';
import { ItemTypes } from '../../types/ItemTypes';
import { Node } from '../../types/Node';
import ContextMenu from '../ContextMenu';
import { DraggableDialogueNode } from '../Nodes';
import ConnectionsContainer from './ConnectionsContainer';
import { Container } from './styles';

const DragAndDropContainerGlobal: React.FC = observer(() => {
  const { nodesStore, filesStore } = useContext(RootStoreContext);

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [nodeCount, setNodeCount] = useState(nodesStore.nodesKeys.length);

  const moveNode = useCallback(
    (id: string, left: number, top: number) => {
      nodesStore.updateNodePosition(id, left, top);
    },
    [nodesStore],
  );

  const addNode = (id: string, left: number, top: number) => {
    setNodeCount(nodeCount + 1);
    nodesStore.addNode(id, left, top);
  };

  const handleAddNode = (event: React.MouseEvent<any, MouseEvent>) => {
    const identifier = `id:node${nodeCount}`;

    const xPos = event.clientX - 100;
    const yPos = event.clientY - 75;

    addNode(identifier, xPos, yPos);
  };

  const loadFileClick = () => {
    filesStore.setModal(true);
  };

  const [, drop] = useDrop({
    accept: ItemTypes.NODE,
    drop(item: Node, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };

      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      moveNode(item.id, left, top);
      return undefined;
    },
  });

  const renderNode = (item: any, key: string) => {
    return <DraggableDialogueNode key={key} id={key} {...item} />;
  };

  // if (nodesStore.showModal || filesStore.loadFileModal) {
  //   return null;
  // }

  return (
    <>
      <ContextMenu
        options={[
          { label: 'New Node', callback: handleAddNode },
          { label: 'Load File', callback: loadFileClick },
          { label: 'Close' },
        ]}
        visible={showContextMenu}
        changeVisibility={setShowContextMenu}
      />

      <Container
        ref={drop}
        onContextMenu={() => setShowContextMenu(true)}
        onClick={() => setShowContextMenu(false)}
      >
        {nodesStore.nodesKeys.map((key) =>
          renderNode(nodesStore.nodes[key], key),
        )}
        <ConnectionsContainer />
      </Container>
    </>
  );
});

export default DragAndDropContainerGlobal;
