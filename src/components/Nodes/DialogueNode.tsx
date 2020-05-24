import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { RootStoreContext } from '../../stores';
import {
  Container,
  ContentContainer,
  DeleteIcon,
  EditIcon,
  IconsContainer,
} from './styles';

interface DialogueNodeProps {
  identifier: string;
}

const DialogueNode: React.FC<DialogueNodeProps> = observer(({ identifier }) => {
  const { nodesStore } = useContext(RootStoreContext);

  const deleteNode = () => {
    nodesStore.setActiveNode(identifier, 'delete');
  };

  const editNode = () => {
    nodesStore.setActiveNode(identifier, 'edit');
  };

  return (
    <Container>
      <IconsContainer>
        {identifier === 'id:rootNode' ? null : (
          <DeleteIcon onClick={deleteNode} />
        )}
        <EditIcon onClick={editNode} />
      </IconsContainer>
      <ContentContainer>{identifier}</ContentContainer>
    </Container>
  );
});

export default DialogueNode;
