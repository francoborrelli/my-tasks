import { Typography } from 'antd';
import { ThemeSwitch } from '../themeSwitch';

export const NewSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography.Title level={1}>My Tasks</Typography.Title>
      <ThemeSwitch />
    </div>
  );
};

export default NewSection;
