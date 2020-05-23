import React, { useEffect } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { ItemTypes } from '../../types/ItemTypes';
import { Node } from '../../types/Node';
import { getStyles } from '../../utils/getStyles';
import DialogueNode from './DialogueNode';

// import { Container } from './styles';
const DraggableDialogueNode: React.FC<Node> = ({ id, left, top }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.NODE, id, left, top },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
      <DialogueNode identifier={id} />
    </div>
  );
};

export default DraggableDialogueNode;
