/// <reference types="vite/client" />

//  可以编写一些项目环境变量的类型描述
interface ImportMetaEnv {
  VITE_HELLO: string
  VITE_API: string
}





declare module "*.vue" {
  import type {DefineComponent} from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}