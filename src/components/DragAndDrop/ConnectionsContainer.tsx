import { observer } from 'mobx-react-lite';
import React, { memo, useContext } from 'react';

import { RootStoreContext } from '../../stores';
import { dark } from '../../styles/themes/dark';
import { Connection as ConnectionLine } from '../Nodes';

// import { Container } from './styles';
const ConnectionsContainer: React.FC = memo(
  observer(() => {
    const { nodesStore, connectionsStore } = useContext(RootStoreContext);

    return (
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
            fill={dark.colors.textSecondary}
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>

        {connectionsStore.connectionsKeys.length > 0
          ? connectionsStore.connectionsKeys.map((key) => {
              const connection = connectionsStore.connections[key];

              const fromNode = nodesStore.nodes[connection.fromId];
              const toNode = nodesStore.nodes[connection.toId];

              if (fromNode === undefined || toNode === undefined) {
                return null;
              }

              const from = {
                x: fromNode.left,

                y: fromNode.top,
              };

              const to = {
                x: toNode.left,

                y: toNode.top,
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
    );
  }),
);

export default ConnectionsContainer;
