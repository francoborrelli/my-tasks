import { Button } from 'antd';
import { LaptopOutlined, MoonFilled, SunFilled } from '@ant-design/icons';

// Redux
import { ThemeState, switchTheme } from '../../store/slices/theme';
import { useAppDispatch, useAppSelector } from '../../store/store';

// Interfaces
import { memo, type ReactElement } from 'react';
// import type { MenuProps } from 'antd/lib';

const icons = {
  light: <SunFilled />,
  dark: <MoonFilled />,
  system: <LaptopOutlined />,
} as Record<ThemeState['selectedTheme'], ReactElement>;

export const ThemeSwitch = memo(() => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.selectedTheme);

  //   const items: MenuProps['items'] = [
  //     {
  //       key: '1',
  //       icon: icons.light,
  //       label: 'Light mode',
  //       onClick: () => dispatch(setTheme('light')),
  //     },
  //     {
  //       key: '2',
  //       icon: icons.dark,
  //       label: 'Dark mode',
  //       onClick: () => dispatch(setTheme('dark')),
  //     },
  //     {
  //       key: '3',
  //       icon: icons.system,
  //       label: 'System mode',
  //       onClick: () => dispatch(setTheme('system')),
  //     },
  //   ];

  return (
    // <Dropdown menu={{ items }}>
    <Button
      type='link'
      size='large'
      icon={icons[theme]}
      style={{ marginTop: 15 }}
      onClick={() => dispatch(switchTheme())}
    ></Button>
    // </Dropdown>
  );
});
