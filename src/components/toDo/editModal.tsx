import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { ProFormText, ProFormTextArea } from '@ant-design/pro-components';

// Redux
import { useAppDispatch } from '../../store/store';
import { editToDo } from '../../store/slices/toDoList';

// Interfaces
import type { FC } from 'react';
import type { ModalFormProps } from '@ant-design/pro-components';
import type { FormData, ToDo } from '../../store/slices/toDoList';
import DraggableModal from '../modal';

const MODAL_PROPS = {
  width: 600,
  centered: true,
  okText: 'Edit',
  cancelText: 'Cancel',
  destroyOnClose: true,
} as ModalFormProps['modalProps'];

const TRIGGER = <Button type='link' icon={<EditFilled />} />;

export const EditModal: FC<{ toDo: ToDo }> = ({ toDo }) => {
  const dispatch = useAppDispatch();

  const onFinish = async (values: FormData) => {
    dispatch(
      editToDo({
        id: toDo.id,
        title: values.title,
        summary: values.summary,
      })
    );
    return true;
  };

  return (
    <DraggableModal
      title='Edit Task'
      trigger={TRIGGER}
      onFinish={onFinish}
      modalProps={MODAL_PROPS}
      initialValues={{
        title: toDo.title,
        summary: toDo.summary,
      }}
    >
      <ProFormText
        required
        name='title'
        label='Title'
        placeholder='Task title'
        rules={[{ required: true, message: 'Please enter a title.' }]}
      />

      <ProFormTextArea label='Summary' name='summary' placeholder='Task summary' />
    </DraggableModal>
  );
};
