import update from 'immutability-helper';
import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../../types/ItemTypes';
import { Node, NodeMap } from '../../types/Node';
import ContextMenu from '../ContextMenu';
import { DraggableDialogueNode } from '../Nodes';
import { Container } from './styles';

const DragAndDropContainer: React.FC = () => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [nodes, setNodes] = useState<NodeMap>({
    'id:rootNode': { top: 20, left: 80, id: 'id:rootNode' },
  });

  const moveNode = useCallback(
    (id: string, left: number, top: number) => {
      setNodes(
        update(nodes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
    },
    [nodes],
  );

  const addNode = (id: string, left: number, top: number) => {
    const newNodes = update(nodes, {
      [id]: {
        $set: {
          left,
          top,
          id,
        },
      },
    });

    setNodes(newNodes);
  };

  const handleAddNode = (event: React.MouseEvent<any, MouseEvent>) => {
    const numberOfNodes = Object.keys(nodes).length;
    const identifier = `id:node${numberOfNodes}`;

    addNode(identifier, event.clientX, event.clientY);
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

  // Change item type
  const renderNode = (item: any, key: string) => {
    return <DraggableDialogueNode key={key} id={key} {...item} />;
  };

  return (
    <>
      <ContextMenu
        options={[
          { label: 'New Node', callback: handleAddNode },
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
        {Object.keys(nodes).map((key) => renderNode(nodes[key], key))}
      </Container>
    </>
  );
};

export default DragAndDropContainer;
