import * as React from "react";
import {
  InputAdornment,
  IconButton,
  Typography,
  Input,
  MenuItem,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";

import Downshift from "downshift";
import { matchSorter } from "match-sorter";
import { DisplayItem, DisplayMenuItemsProps } from "./Common";

const ClearInput = (clearSelection: any) => {
  return (
    <InputAdornment position="start">
      <IconButton
        aria-label="Clear Input"
        onClick={() => {
          clearSelection();
        }}
        onMouseDown={() => {}}
      >
        {" "}
        <Close />{" "}
      </IconButton>
    </InputAdornment>
  );
};

const ShowMenuItem = (
  getItemProps: any,
  item: DisplayItem,
  index: number,
  highlightedIndex: number | null,
  selectedItem: DisplayItem
) => {
  return (
    <MenuItem
      {...getItemProps({
        key: item.value,
        index,
        item,
        style: {
          backgroundColor: highlightedIndex === index ? "lightgray" : "white",
          fontWeight: selectedItem === item ? "bold" : "normal",
        },
      })}
    >
      {item.label}
    </MenuItem>
  );
};

const DisplayMenuItems = (props: DisplayMenuItemsProps) => {
  const {
    getMenuProps,
    getItemProps,
    isOpen,
    items,
    inputValue,
    highlightedIndex,
    selectedItem,
  } = props;
  return (
    <div {...getMenuProps()}>
      {isOpen
        ? matchSorter(items, inputValue ?? "", {
            keys: ["value"],
          }).map((item, index) =>
            ShowMenuItem(
              getItemProps,
              item,
              index,
              highlightedIndex,
              selectedItem
            )
          )
        : null}
    </div>
  );
};

const AutoComplete = ({
  items = [] as { label: string; value: string }[],
  onSelect = (selection: {}) => {},
}) => {
  return (
    <Downshift
      itemToString={(item) => (item ? item.label : "")}
      onChange={(selection) => {
        onSelect(selection);
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        clearSelection,
      }) => {
        return (
          <div style={{ width: "100%" }}>
            <Typography {...getLabelProps()}>Search</Typography>
            <Input
              fullWidth
              type={"text"}
              style={{ width: "100%" }}
              endAdornment={ClearInput(clearSelection)}
              {...getInputProps()}
            ></Input>
            <DisplayMenuItems
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              isOpen={isOpen}
              items={items}
              inputValue={inputValue}
              highlightedIndex={highlightedIndex}
              selectedItem={selectedItem}
            />
          </div>
        );
      }}
    </Downshift>
  );
};

export default AutoComplete;
