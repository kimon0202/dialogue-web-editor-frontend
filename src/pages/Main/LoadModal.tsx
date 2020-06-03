import { observer } from 'mobx-react-lite';
import { Modal } from 'portal-modals';
import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';

import { RootStoreContext } from '../../stores';
import { ModalContainer, ModalContent, ModalTitle } from './styles';

// import PortalModal from '../../components/Modal/PortalModal';
const LoadModal: React.FC = observer(() => {
  const { filesStore } = useContext(RootStoreContext);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('Read aborted');
      reader.onerror = () => console.log('Read failed');
      reader.onload = () => {
        const content = reader.result?.toString();
        const json = content !== undefined && JSON.parse(content);

        filesStore.file = json;
        filesStore.loadFileContent();
        filesStore.setModal(false);
      };

      reader.readAsText(acceptedFiles[0]);
    },
    [filesStore],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/json',
    multiple: false,
  });

  return (
    <Modal
      isVisible={filesStore.loadFileModal}
      onBackdropClick={() => filesStore.setModal(false)}
    >
      <ModalContainer>
        <ModalTitle>Load File</ModalTitle>
        <ModalContent>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <p>Drag and drop files / Click here</p>
            )}
          </div>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
});

export default LoadModal;
