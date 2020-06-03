import { FormHandles, SubmitHandler } from '@unform/core';
import { observer } from 'mobx-react-lite';
import { Modal } from 'portal-modals';
import React, { useContext, useRef, useState } from 'react';

import { RootStoreContext } from '../../stores';
import { NodeEditFormData } from '../../types/Node';
import Button from '../Button';
import Select from '../Select';
import { Space } from '../Space';
import TextArea from '../TextArea';
import {
  Body,
  BoxContainer,
  Center,
  Container,
  ContentContainer,
  DeleteIcon,
  EditIcon,
  Form,
  Header,
  ModalContainer,
  ModalContent,
  ModalTitle,
  Title,
} from './styles';

interface DialogueNodeProps {
  identifier: string;
}

const DialogueNode: React.FC<DialogueNodeProps> = observer(({ identifier }) => {
  const { nodesStore, connectionsStore } = useContext(RootStoreContext);
  const [nodeBody, setNodeBody] = useState(nodesStore.nodes[identifier].text);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const editNodeFormRef = useRef<FormHandles>(null);

  const deleteNode = (id: string) => {
    nodesStore.deleteNode(id);
    connectionsStore.removeConnnection(id);
  };

  const renderDeleteModal = () => (
    <Modal
      isVisible={showDeleteModal}
      onBackdropClick={() => setShowDeleteModal(false)}
    >
      <ModalContainer>
        <ModalTitle>Are you sure you want to delete this node?</ModalTitle>
        <ModalContent>
          <Button
            onClick={() => {
              deleteNode(identifier);
            }}
          >
            Yes
          </Button>
          <Space width="100%" height={20} />
          <Button
            onClick={() => {
              setShowDeleteModal(false);
            }}
          >
            No
          </Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );

  const handleEditFormSubmit: SubmitHandler<NodeEditFormData> = (data) => {
    // console.log(data);
    const { inConnections, outConnections, text, type } = data;

    const node = nodesStore.nodes[identifier];

    node.text = text;
    node.dialogueType = type;

    outConnections.forEach((connection) => {
      connectionsStore.addConnection(node.id, connection.value);
    });

    if (node.id !== 'id:rootNode') {
      inConnections.forEach((connection) => {
        connectionsStore.addConnection(connection.value, node.id);
      });
    }

    setShowEditModal(false);
  };

  const handleGetInitialConnections = (id: string) => {
    const tempIn: { label: string; value: string }[] = [];
    const tempOut: { label: string; value: string }[] = [];

    connectionsStore.connectionsKeys.forEach((key) => {
      if (connectionsStore.connections[key].fromId === id) {
        tempOut.push({
          label: connectionsStore.connections[key].toId,
          value: connectionsStore.connections[key].toId,
        });
      }

      if (connectionsStore.connections[key].toId === id) {
        tempIn.push({
          label: connectionsStore.connections[key].fromId,
          value: connectionsStore.connections[key].fromId,
        });
      }
    });

    return {
      inConnections: tempIn,
      outConnections: tempOut,
    };
  };

  const renderEditModal = () => {
    const node = nodesStore.nodes[identifier];
    const initialText = node.text;
    const initialDialogueType = node.dialogueType;

    const { inConnections, outConnections } = handleGetInitialConnections(
      node.id,
    );

    const connectionOptions = nodesStore.nodesKeys
      .filter((key) => key !== identifier)
      .map((key) => ({ label: key, value: key }));

    return (
      <Modal
        isVisible={showEditModal}
        onBackdropClick={() => setShowEditModal(false)}
      >
        <ModalContainer width={1024} height={800}>
          <ModalTitle>{`Editing ${identifier}`}</ModalTitle>
          <ModalContent>
            <Form
              ref={editNodeFormRef}
              onSubmit={handleEditFormSubmit}
              initialData={{
                text: initialText,
                inConnections,
                outConnections,
                type: initialDialogueType,
              }}
            >
              <BoxContainer>
                {node.id === 'id:rootNode' ? null : (
                  <Select
                    name="inConnections"
                    label="In Connections"
                    multiple
                    options={connectionOptions}
                  />
                )}
                <Select
                  name="outConnections"
                  label="Out Connections"
                  multiple
                  options={connectionOptions}
                />
                <Select
                  name="type"
                  label="Dialogue Type"
                  options={[
                    {
                      label: 'Select Dialogue Type...',
                      value: 'None',
                    },
                    {
                      label: 'Player',
                      value: 'Player',
                    },
                    {
                      label: 'AICharacter',
                      value: 'AICharacter',
                    },
                  ]}
                />
              </BoxContainer>
              <Space width="100%" height={20} />
              <Center>
                <TextArea
                  name="text"
                  autoFocus
                  placeholder="Dialogue text..."
                  width={960}
                />
              </Center>
              <Space width="100%" height={30} />
              <Center>
                <Button onClick={() => editNodeFormRef.current?.submitForm()}>
                  Save
                </Button>
              </Center>
            </Form>
          </ModalContent>
        </ModalContainer>
      </Modal>
    );
  };

  return (
    <Container>
      <Header>
        <Title>{identifier.replace('id:', '')}</Title>
        <EditIcon fontSize="small" onClick={() => setShowEditModal(true)} />
        {identifier === 'id:rootNode' ? null : (
          <DeleteIcon
            fontSize="small"
            onClick={() => setShowDeleteModal(true)}
          />
        )}
      </Header>
      <ContentContainer>
        <Body
          defaultValue={nodeBody}
          placeholder="Dialogue Text..."
          onDoubleClick={() => setShowEditModal(true)}
          onChange={(event) => setNodeBody(event.target.value)}
          onBlur={() => {
            nodesStore.nodes[identifier].text = nodeBody;
          }}
        />
      </ContentContainer>
      {renderDeleteModal()}
      {renderEditModal()}
    </Container>
  );
});

export default DialogueNode;
