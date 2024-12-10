import { ThemeConfig } from 'antd';
import muiTheme from './mui';

const theme: ThemeConfig = {
  token: {
    fontFamily: muiTheme.typography.fontFamily,
    borderRadius: muiTheme.shape.borderRadius,
    colorBgBase: muiTheme.palette.background.default,
    colorBorder: muiTheme.palette.divider,
    colorPrimary: muiTheme.palette.primary.main,
    colorPrimaryBg: muiTheme.palette.action.selected,
    colorLink: muiTheme.palette.info.main,
    colorLinkHover: muiTheme.palette.info.light,
    colorLinkActive: muiTheme.palette.info.dark,
  },
};

export default theme;
