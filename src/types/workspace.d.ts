export interface MenuItem {
  name: string;
  path: string;
  code: string;
  children?: MenuItem[] | null;
}
export interface PropsType {
  menu: MenuItem[];
}
