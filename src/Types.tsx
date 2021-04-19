/* 
This module consists of Types used in our react components
*/

import { ReactNode } from "react";

export type HeaderProps = {
  renderLogout: () => ReactNode;
  renderSearch: () => ReactNode;
};

export type CardProps = {
  getMenuProps: any;
  items: AutoCompleteLink[];
  inputValue: string | null;
  isOpen: boolean;
  getItemProps: any;
  highlightedIndex: number | null;
  selectedItem: AutoCompleteLink;
};

export type DatabaseLink = {
  link_url: string;
  link_description: string;
};

export type AutoCompleteLink = {
  id: string;
  link_url: string;
  link_description: string;
};
