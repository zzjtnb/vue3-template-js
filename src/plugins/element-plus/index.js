import {
  ElIcon,
  // 指令
  ElLoading,
} from 'element-plus';

const components = [ElIcon];

// Directives
const plugins = [ElLoading];

// https://element-plus.org/zh-CN/component/icon.html
import {Menu} from '@element-plus/icons-vue';

// Icon
export const iconComponents = [Menu];

export function useElementPlus(app) {
  // // 注册组件
  // components.forEach((component) => {
  //   app.component(component.name || '', component);
  // });
  // // 注册指令
  // plugins.forEach((plugin) => {
  //   app.use(plugin);
  // });
  // 注册图标
  iconComponents.forEach((component) => {
    app.component(component.name || '', component);
  });
}
