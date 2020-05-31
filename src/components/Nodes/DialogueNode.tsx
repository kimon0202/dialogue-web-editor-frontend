import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';

import { RootStoreContext } from '../../stores';
import {
  Body,
  Container,
  ContentContainer,
  DeleteIcon,
  EditIcon,
  Header,
  Title,
} from './styles';

interface DialogueNodeProps {
  identifier: string;
}

const DialogueNode: React.FC<DialogueNodeProps> = observer(({ identifier }) => {
  const { nodesStore } = useContext(RootStoreContext);
  const [nodeBody, setNodeBody] = useState(nodesStore.nodes[identifier].text);

  const deleteNode = () => {
    nodesStore.setActiveNode(identifier, 'delete');
  };

  const editNode = () => {
    nodesStore.setActiveNode(identifier, 'edit');
  };

  return (
    <Container>
      <Header>
        <Title>{identifier.replace('id:', '')}</Title>
        <EditIcon fontSize="small" onClick={editNode} />
        <DeleteIcon fontSize="small" onClick={deleteNode} />
      </Header>
      <ContentContainer>
        <Body
          defaultValue={nodeBody}
          placeholder="Dialogue Text..."
          onDoubleClick={editNode}
          onChange={(event) => setNodeBody(event.target.value)}
          onBlur={() => {
            nodesStore.nodes[identifier].text = nodeBody;
          }}
        />
      </ContentContainer>
    </Container>
  );
});

export default DialogueNode;
