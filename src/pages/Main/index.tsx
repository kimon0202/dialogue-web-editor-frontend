import { FormHandles, SubmitHandler } from '@unform/core';
import { observer } from 'mobx-react-lite';
import React, { useContext, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import backend from 'react-dnd-html5-backend';

import Button from '../../components/Button';
import { DragAroundCustomLayer } from '../../components/DragAndDrop';
import Modal from '../../components/Modal';
import Select from '../../components/Select';
import Sidebar from '../../components/Sidebar';
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
    connectionsStore.removeConnnection(id);
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

      const { inConnections, outConnections } = handleGetInitialConnections(
        node.id,
      );

      return (
        <Modal
          show={nodesStore.showModal}
          onBackdropClick={() => nodesStore.setActiveNode('', null)}
        >
          <ModalContainer width={1024} height={800}>
            <ModalTitle>
              {`Editing ${nodesStore.activeNodeModal.id}`}
            </ModalTitle>
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
                <Center>
                  <TextArea
                    name="text"
                    autoFocus
                    placeholder="Dialogue text"
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
    }

    return null;
  };

  return (
    <>
      <Sidebar />
      {renderModal()}
      <LoadModal />
      <DndProvider backend={backend}>
        <DragAroundCustomLayer />
      </DndProvider>
    </>
  );
});

export default Main;
