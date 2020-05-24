import { observer } from 'mobx-react-lite';
import React, { useCallback, useContext, useState } from 'react';
import { useDrop } from 'react-dnd';

import { RootStoreContext } from '../../stores';
import { ItemTypes } from '../../types/ItemTypes';
import { Node } from '../../types/Node';
import ContextMenu from '../ContextMenu';
import { Connection as ConnectionLine, DraggableDialogueNode } from '../Nodes';
import { Container } from './styles';

const DragAndDropContainerGlobal: React.FC = observer(() => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const { nodesStore, connectionsStore, filesStore } = useContext(
    RootStoreContext,
  );

  const moveNode = useCallback(
    (id: string, left: number, top: number) => {
      nodesStore.updateNodePosition(id, left, top);
    },
    [nodesStore],
  );

  const addNode = (id: string, left: number, top: number) => {
    nodesStore.addNode(id, left, top);
  };

  const handleAddNode = (event: React.MouseEvent<any, MouseEvent>) => {
    const numberOfNodes = nodesStore.nodesKeys.length;
    const identifier = `id:node${numberOfNodes}`;

    addNode(identifier, event.clientX, event.clientY);
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

  if (nodesStore.showModal || filesStore.loadFileModal) {
    return null;
  }

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
        <svg
          width="100%"
          height="100%"
          style={{
            zIndex: 400,
          }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          {connectionsStore.connections.length > 0
            ? connectionsStore.connections.map((connection) => {
                const from = {
                  x: nodesStore.nodes[connection.fromId].left,
                  y: nodesStore.nodes[connection.fromId].top,
                };

                const to = {
                  x: nodesStore.nodes[connection.toId].left,
                  y: nodesStore.nodes[connection.toId].top,
                };

                return (
                  <ConnectionLine
                    key={`${connection.fromId}${connection.toId}`}
                    from={from}
                    to={to}
                    markerMid="url(#arrowhead)"
                  />
                );
              })
            : null}
        </svg>
      </Container>
    </>
  );
});

export default DragAndDropContainerGlobal;
