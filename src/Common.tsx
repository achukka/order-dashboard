import { ReactNode } from "react";

export const getButtonStyleProps = (variant: string) => {
  return {
    variant: variant as any,
    style: {
      width: 50,
      height: 50,
      alignSelf: "center",
      background: "#039BE5",
      color: "white",
    },
  };
};

export const getCenterChildrenStyle = () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
};

export const RowWithRightAlignedContext = ({ children }: any) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {children}
    </div>
  );
};

export const getMenuListStyleProps = () => {
  return {
    style: {
      width: "30%",
      height: 300,
      maxHeight: 300,
      background: "white",
    },
  };
};

export const getFormStyleProps = () => {
  return {
    style: {
      width: "30%",
      height: 300,
      maxHeight: 300,
    },
  };
};

export type HeaderProps = {
  renderLogout: () => ReactNode;
  renderSearch: () => ReactNode;
};

export type DisplayItem = {
  label: string;
  value: string;
};

export type DisplayMenuItemsProps = {
  getMenuProps: any;
  items: DisplayItem[];
  inputValue: string | null;
  isOpen: boolean;
  getItemProps: any;
  highlightedIndex: number | null;
  selectedItem: DisplayItem;
};
