import { Button } from 'antd';
import DraggableModal from '../modal';
import { PlusOutlined } from '@ant-design/icons';
import { ModalFormProps, ProFormText, ProFormTextArea } from '@ant-design/pro-components';

// Redux
import { useAppDispatch } from '../../store/store';
import { FormData, addToDo } from '../../store/slices/toDoList';

const MODAL_PROPS = {
  width: 600,
  centered: true,
  okText: 'Create',
  cancelText: 'Cancel',
  destroyOnClose: true,
} as ModalFormProps['modalProps'];

const TRIGGER = (
  <div style={{ marginTop: 10 }}>
    <Button size='large' icon={<PlusOutlined />} type='primary' style={{ width: '100%' }}>
      New Task
    </Button>
  </div>
);

export const NewModal = () => {
  const dispatch = useAppDispatch();

  const onFinish = async (values: FormData) => {
    dispatch(
      addToDo({
        title: values.title,
        summary: values.summary,
        id: new Date().getTime(),
      })
    );
    return true;
  };

  return (
    <DraggableModal title='New Task' trigger={TRIGGER} onFinish={onFinish} modalProps={MODAL_PROPS}>
      <ProFormText
        required
        label='Title'
        name='title'
        placeholder='Task title'
        rules={[{ required: true, message: 'Please enter a title.' }]}
      />

      <ProFormTextArea label='Summary' name='summary' placeholder='Task summary' />
    </DraggableModal>
  );
};
