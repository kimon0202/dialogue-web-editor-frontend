import React from 'react';
import { useDragLayer } from 'react-dnd';

import { ItemTypes } from '../../types/ItemTypes';
import { Node } from '../../types/Node';
import { getItemStyles } from '../../utils/getStyles';
import { DialogueNodeDragPreview } from '../Nodes';
import { DragLayer } from './styles';

const CustomDragLayer: React.FC = () => {
  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem() as Node,
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const renderItem = () => {
    switch (itemType) {
      case ItemTypes.NODE:
        return <DialogueNodeDragPreview identifier={item.id} />;
      default:
        return null;
    }
  };

  if (!isDragging) {
    return null;
  }

  return (
    <DragLayer>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </DragLayer>
  );
};

export default CustomDragLayer;
