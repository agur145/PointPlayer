import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { PropsType, MenuItem } from "../../../../types/workspace";
import "./index.scss";

function Header(props: PropsType) {
  const { menu } = props;

  const [currentMenu, setCurrentMenu] = useState<string | null>(null);

  function renderMenuItem(item: MenuItem) {
    return (
      <Link
        key={item?.path}
        className={classNames("menu-item", {
          "menu-item-active": currentMenu === item?.code,
        })}
        to={item?.path || ""}
        onClick={() => {
          setCurrentMenu(item?.code);
        }}
      >
        {item?.name || ""}
      </Link>
    );
  }

  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-nav-left">
          <div className="header-nav-left-logo">
            <img src="../../../../../public/images/favicon.png" />
          </div>
          <div className="header-nav-left-controls">
            <LeftOutlined className="icon" />
            <RightOutlined className="icon" />
          </div>
        </div>
        <div className="header-nav-center">
          {menu?.map((item) => {
            if (item?.children) {
              return (
                <Dropdown
                  placement="bottom"
                  menu={{
                    items: item.children?.map((childItem) => ({
                      key: childItem?.path,
                      label: renderMenuItem(childItem),
                    })),
                  }}
                >
                  {renderMenuItem(item)}
                </Dropdown>
              );
            }
            return renderMenuItem(item);
          })}
        </div>
      </div>
    </div>
  );
}
export default Header;
