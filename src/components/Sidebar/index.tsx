import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { RootStoreContext } from '../../stores';
import { FileData } from '../../types/FileData';
import Button from '../Button';
import { Space } from '../Space';
import { ButtonsContainer, Container, TitleContainer } from './styles';

const Sidebar: React.FC = observer(() => {
  const { nodesStore, connectionsStore, filesStore } = useContext(
    RootStoreContext,
  );

  const handleSave = () => {
    const file: FileData = {
      name: 'NewFile',
      createdAt: Date.now(),
      nodes: nodesStore.nodes,
      connections: connectionsStore.connections,
    };

    filesStore.file = file;
  };

  const handleFileDownload = async () => {
    const json = JSON.stringify(filesStore.file);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.download = filesStore.file.name + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <TitleContainer>Dialogue Editor</TitleContainer>
      <Space width="100%" height={30} />
      <ButtonsContainer>
        <Button
          onClick={() => {
            nodesStore.reset();
            nodesStore.setActiveNode('', null);
          }}
        >
          Clear
        </Button>
        <Space width="100%" height={20} />
        <Button onClick={handleSave}>Save</Button>
        {filesStore.file.name && (
          <>
            <Space width="100%" height={20} />
            <Button onClick={() => handleFileDownload()}>Download File</Button>
          </>
        )}
      </ButtonsContainer>
    </Container>
  );
});

export default Sidebar;
