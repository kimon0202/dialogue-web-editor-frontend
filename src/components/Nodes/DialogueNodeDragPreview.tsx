import React from 'react';

import DialogueNode from './DialogueNode';

interface DialogueNodeDragPreviewProps {
  identifier: string;
}

const DialogueNodeDragPreview: React.FC<DialogueNodeDragPreviewProps> = ({
  identifier,
}) => {
  return (
    <div>
      <DialogueNode identifier={identifier} />
    </div>
  );
};

export default DialogueNodeDragPreview;
