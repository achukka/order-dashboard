import * as React from "react";
import {
  InputAdornment,
  IconButton,
  Typography,
  Input,
  Card,
  CardContent,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";

import Downshift from "downshift";
import { matchSorter } from "match-sorter";
import { CardProps } from "./Types";
import { AutoCompleteLink } from "./Types";

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

const ShowCard = (
  getItemProps: any,
  item: AutoCompleteLink,
  index: number,
  highlightedIndex: number | null,
  selectedItem: AutoCompleteLink
) => {
  return (
    <Card
      {...getItemProps({
        key: item.link_url,
        index,
        item,
        style: {
          backgroundColor: highlightedIndex === index ? "lightgray" : "white",
          fontWeight: selectedItem === item ? "bold" : "normal",
        },
      })}
    >
      <CardContent>
        <Typography variant="h6">{item.link_description}</Typography>
        <Typography component="p">{item.link_url}</Typography>
      </CardContent>
    </Card>
  );
};

const ShowCards = (props: CardProps) => {
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
        ? matchSorter(items, `${inputValue}`, {
            keys: ["link_description"],
          }).map((item, index) =>
            ShowCard(getItemProps, item, index, highlightedIndex, selectedItem)
          )
        : null}
    </div>
  );
};

const AutoComplete = ({
  items = [] as AutoCompleteLink[],
  onSelect = (selection: {}) => {},
}) => {
  return (
    <Downshift
      itemToString={(item) => (item ? item.link_description : "")}
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
          <div style={{ width: "100%", height: 50 }}>
            <Typography {...getLabelProps()}>Search</Typography>
            <Input
              fullWidth
              type={"text"}
              style={{ width: "100%" }}
              endAdornment={ClearInput(clearSelection)}
              {...getInputProps()}
            ></Input>
            <ShowCards
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
