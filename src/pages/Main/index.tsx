import { FormHandles, SubmitHandler } from '@unform/core';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useRef } from 'react';
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

  useEffect(() => {
    console.log('Version 1.2');
  }, []);

  const deleteNode = (id: string) => {
    nodesStore.deleteNode(id);
  };

  const handleEditFormSubmit: SubmitHandler<NodeEditFormData> = (data) => {
    // console.log(data);
    const { inConnections, outConnections, text, type } = data;

    const node = nodesStore.activeNode;

    node.text = text;
    node.dialogueType = type;
    node.inConnections = inConnections.map((connection) => connection.value);
    node.outConnections = outConnections.map((connection) => connection.value);

    outConnections.forEach((connection) => {
      if (!nodesStore.nodes[connection.value].inConnections) {
        nodesStore.nodes[connection.value].inConnections = [];
      }

      if (
        !nodesStore.nodes[connection.value].inConnections?.includes(node.id)
      ) {
        // eslint-disable-next-line no-unused-expressions
        nodesStore.nodes[connection.value].inConnections?.push(node.id);
      }

      connectionsStore.addConnection(node.id, connection.value);
    });

    inConnections.forEach((connection) => {
      if (!nodesStore.nodes[connection.value].outConnections) {
        nodesStore.nodes[connection.value].outConnections = [];
      }

      if (
        !nodesStore.nodes[connection.value].outConnections?.includes(node.id)
      ) {
        // eslint-disable-next-line no-unused-expressions
        nodesStore.nodes[connection.value].outConnections?.push(node.id);
      }
      connectionsStore.addConnection(connection.value, node.id);
    });

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

      const tempIn = [];
      const tempOut = [];

      if (node.inConnections !== undefined) {
        for (let i = 0; i < node.inConnections?.length; i += 1) {
          tempIn.push({
            label: node.inConnections[i],
            value: node.inConnections[i],
          });
        }
      }

      if (node.outConnections !== undefined) {
        for (let i = 0; i < node.outConnections?.length; i += 1) {
          tempOut.push({
            label: node.outConnections[i],
            value: node.outConnections[i],
          });
        }
      }

      const initialInConnections = tempIn;
      const initialOutConnections = tempOut;

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
                  <Select
                    name="inConnections"
                    label="In Connections"
                    multiple
                    options={nodesStore.activeNodeOptions}
                  />
                  <Select
                    name="outConnections"
                    label="Out Connections"
                    multiple
                    options={nodesStore.activeNodeOptions}
                  />
                  <Select
                    name="type"
                    label="Dialogue Type"
                    options={nodesStore.dialogueTypeOptions}
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
