import { FC, memo } from 'react';

import './toDo.scss';

import { EditModal } from './editModal';
import { DeleteFilled } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Button, Space, Tooltip, Typography } from 'antd';

// Stores
import { useAppDispatch } from '../../store/store';
import { removeToDo, type ToDo } from '../../store/slices/toDoList';

export const ToDoCard: FC<{ toDo: ToDo }> = memo(({ toDo }) => {
  const dispatch = useAppDispatch();
  return (
    <ProCard
      bordered
      headerBordered={false}
      title={toDo.title}
      extra={
        <Space>
          <Tooltip arrow={false} title='Edit'>
            <EditModal toDo={toDo} />
          </Tooltip>

          <Tooltip arrow={false} title='Delete'>
            <Button
              danger
              type='link'
              icon={<DeleteFilled />}
              onClick={() => {
                dispatch(removeToDo(toDo.id));
              }}
            />
          </Tooltip>
        </Space>
      }
    >
      <Typography.Text>{toDo.summary}</Typography.Text>
    </ProCard>
  );
});

export default ToDoCard;

ToDoCard.displayName = 'ToDoCard';
