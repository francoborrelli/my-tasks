import React, { useRef, useState } from 'react';

import Draggable from 'react-draggable';
import { ModalForm } from '@ant-design/pro-components';

import type { FormData } from '../../store/slices/toDoList';
import type { ModalFormProps } from '@ant-design/pro-components';
import type { DraggableData, DraggableEvent } from 'react-draggable';

export const DraggableModal: React.FC<ModalFormProps<FormData>> = (props) => {
  const draggleRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <>
      <ModalForm
        {...props}
        modalProps={{
          ...(props.modalProps || {}),
          modalRender: (modal) => (
            <Draggable
              bounds={bounds}
              nodeRef={draggleRef}
              onStart={(event, uiData) => onStart(event, uiData)}
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          ),
        }}
      ></ModalForm>
    </>
  );
};

export default DraggableModal;
