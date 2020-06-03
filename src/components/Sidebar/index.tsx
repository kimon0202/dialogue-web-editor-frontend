import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { useTransition } from 'react-spring';

import { RootStoreContext } from '../../stores';
import { Connection } from '../../types/Connection';
import { FileData } from '../../types/FileData';
import Button from '../Button';
import { Space } from '../Space';
import {
  AnimatedIconContainer,
  ButtonsContainer,
  CloseIcon,
  Container,
  MenuIcon,
  Navbar,
  TitleContainer,
} from './styles';

const Sidebar: React.FC = observer(() => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const trnasitions = useTransition(sidebarOpen, null, {
    from: {
      position: 'absolute',
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  const { nodesStore, connectionsStore, filesStore } = useContext(
    RootStoreContext,
  );

  const handleSave = () => {
    const connections: Connection[] = [];

    connectionsStore.connectionsKeys.forEach((key) => {
      connections.push(toJS(connectionsStore.connections[key]));
    });

    const file: FileData = {
      name: 'NewFile',
      nodes: nodesStore.nodes,
      connections,
    };

    filesStore.file = file;
  };

  const handleFileDownload = async () => {
    handleSave();
    const json = JSON.stringify(filesStore.file);
    const blob = new Blob([json], {
      type: 'application/json',
    });
    const href = await URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.download = filesStore.file.name + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar>
        {trnasitions.map(({ item, key, props }) =>
          item ? (
            <AnimatedIconContainer key={key} style={props}>
              <CloseIcon fontSize="inherit" onClick={handleMenuClick} />
            </AnimatedIconContainer>
          ) : (
            <AnimatedIconContainer key={key} style={props}>
              <MenuIcon fontSize="inherit" onClick={handleMenuClick} />
            </AnimatedIconContainer>
          ),
        )}
        <Space width={32} height="100%" />
        <TitleContainer>Dialogue Editor</TitleContainer>
      </Navbar>
      <Container height={sidebarOpen ? 'auto' : 0} duration={400}>
        <ButtonsContainer>
          <Button
            onClick={() => {
              nodesStore.reset();
            }}
          >
            Clear
          </Button>
          <Space width="100%" height={20} />
          <Button onClick={handleFileDownload}>Download</Button>
          <Space width="100%" height={20} />
          <Button onClick={() => filesStore.setModal(true)}>Load File</Button>
        </ButtonsContainer>
      </Container>
    </>
  );
});

export default Sidebar;
