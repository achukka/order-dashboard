import * as React from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import "firebase/database";
import AutoComplete from "./AutoComplete";
import { isNullOrUndefined } from "./Common";
import { AutoCompleteLink, DatabaseLink } from "./Types";

const toAutoCompleteItems = (values: DatabaseLink[]): AutoCompleteLink[] => {
  return Object.entries(values).map(([k, v]) => ({
    id: k,
    link_url: v.link_url,
    link_description: v.link_description,
  }));
};

const Search = () => {
  return (
    <FirebaseDatabaseNode path="user_bookmarks/">
      {(data) => {
        const { value } = data;
        if (isNullOrUndefined(value)) {
          return null;
        }
        return <AutoComplete items={toAutoCompleteItems(value)} />;
      }}
    </FirebaseDatabaseNode>
  );
};

export default Search;
