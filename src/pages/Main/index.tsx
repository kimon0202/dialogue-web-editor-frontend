import { FormHandles, SubmitHandler } from '@unform/core';
import { observer } from 'mobx-react-lite';
import React, { useContext, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import backend from 'react-dnd-html5-backend';

import Button from '../../components/Button';
import { DragAroundCustomLayer } from '../../components/DragAndDrop';
import Modal from '../../components/Modal';
import Select from '../../components/Select';
import { Space } from '../../components/Space';
import TextArea from '../../components/TextArea';
import { RootStoreContext } from '../../stores';
import LoadModal from './LoadModal';
import {
  BoxContainer,
  Center,
  Form,
  ModalContainer,
  ModalContent,
  ModalTitle,
} from './styles';

// Add three+ character dialogue option

type DialogueType = 'player' | 'ai-character';

interface NodeEditFormData {
  text: string;
  inConnections: { label: string; value: string }[];
  outConnections: { label: string; value: string }[];
  type: DialogueType;
}

const Main: React.FC = observer(() => {
  const { nodesStore, connectionsStore } = useContext(RootStoreContext);
  const editNodeFormRef = useRef<FormHandles>(null);

  const deleteNode = (id: string) => {
    nodesStore.deleteNode(id);
    connectionsStore.removeConnnections(id);
  };

  const handleEditFormSubmit: SubmitHandler<NodeEditFormData> = (data) => {
    // console.log(data);
    const { inConnections, outConnections, text, type } = data;

    const node = nodesStore.activeNode;

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

    nodesStore.setActiveNode('', null);
  };

  const renderModal = () => {
    if (nodesStore.activeNodeModal.mode === 'delete') {
      return (
        <Modal
          show={nodesStore.showModal}
          onBackdropClick={() => nodesStore.setActiveNode('', null)}
        >
          <ModalContainer>
            <ModalTitle>Are you sure you want to delete this node?</ModalTitle>
            <ModalContent>
              <Button
                onClick={() => {
                  deleteNode(nodesStore.activeNodeModal.id);
                  nodesStore.setActiveNode('', null);
                }}
              >
                Yes
              </Button>
              <Space width="100%" height={20} />
              <Button onClick={() => nodesStore.setActiveNode('', null)}>
                No
              </Button>
            </ModalContent>
          </ModalContainer>
        </Modal>
      );
    }
    if (nodesStore.activeNodeModal.mode === 'edit') {
      const node = nodesStore.activeNode;
      const initialText = node.text;
      const initialDialogueType = node.dialogueType;

      const initialInConnections = [];
      const initialOutConnections = [];

      for (let i = 0; i < connectionsStore.connections.length; i += 1) {
        if (connectionsStore.connections[i].toId === node.id) {
          if (
            nodesStore.nodes[connectionsStore.connections[i].fromId] !==
            undefined
          ) {
            initialInConnections.push({
              label: connectionsStore.connections[i].fromId,
              value: connectionsStore.connections[i].fromId,
            });
          }
        }
      }

      for (let i = 0; i < connectionsStore.connections.length; i += 1) {
        if (connectionsStore.connections[i].fromId === node.id) {
          if (
            nodesStore.nodes[connectionsStore.connections[i].fromId] !==
            undefined
          ) {
            initialOutConnections.push({
              label: connectionsStore.connections[i].toId,
              value: connectionsStore.connections[i].toId,
            });
          }
        }
      }

      return (
        <Modal
          show={nodesStore.showModal}
          onBackdropClick={() => nodesStore.setActiveNode('', null)}
        >
          <ModalContainer width={1000} height={800}>
            <ModalTitle>
              {`Editing ${nodesStore.activeNodeModal.id}`}
            </ModalTitle>
            <ModalContent>
              <Form
                ref={editNodeFormRef}
                onSubmit={handleEditFormSubmit}
                initialData={{
                  text: initialText,
                  inConnections: initialInConnections,
                  outConnections: initialOutConnections,
                  type: initialDialogueType,
                }}
              >
                <BoxContainer>
                  {node.id === 'id:rootNode' ? null : (
                    <Select
                      name="inConnections"
                      label="In Connections"
                      multiple
                      options={nodesStore.activeNodeOptions}
                    />
                  )}
                  <Select
                    name="outConnections"
                    label="Out Connections"
                    multiple
                    options={nodesStore.activeNodeOptions}
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
                <BoxContainer>
                  <TextArea
                    name="text"
                    autoFocus
                    placeholder="Dialogue text"
                    width={800}
                  />
                </BoxContainer>
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
    }

    return null;
  };

  return (
    <>
      {renderModal()}
      <LoadModal />
      <DndProvider backend={backend}>
        <DragAroundCustomLayer />
      </DndProvider>
    </>
  );
});

export default Main;
