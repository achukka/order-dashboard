import * as React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Button, MenuItem, TextField, Fab } from "@material-ui/core";
import {
  getButtonStyleProps,
  getCenterChildrenStyle,
  getFormStyleProps,
  getMenuListStyleProps,
  RowWithRightAlignedContext as RowWithRightAlignedContent,
} from "./Styles";
import Search from "./Search";
import { DatabaseLink, HeaderProps } from "./Types";
import {
  FirebaseDatabaseMutation,
  FirebaseDatabaseNode,
  FirebaseDatabaseProvider,
} from "@react-firebase/database";
import { isNullOrUndefined } from "./Common";

import get from "lodash.get";
import set from "lodash.set";

const Header = ({
  renderLogout = () => null,
  renderSearch = () => null,
}: HeaderProps) => {
  return (
    <div
      style={{
        height: 100,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 200,
          width: "40%",
          alignSelf: "center",
          ...getCenterChildrenStyle(),
        }}
      >
        {renderSearch()}
      </div>
      <div style={{ height: 200, width: "30%", ...getCenterChildrenStyle() }}>
        {renderLogout()}
      </div>
    </div>
  );
};

const MenuItemList = (values: DatabaseLink[]) => {
  return Object.entries(values).map(([k, v]) => (
    <MenuItem key={k}>{v.link_description}</MenuItem>
  ));
};

class Authenticated extends React.Component<
  { config: {} },
  { linkText: string; linkMetadata: string; config: {} }
> {
  newLinkTextFieldRef = React.createRef();
  newLinkMetaTextFieldRef = React.createRef();
  render() {
    return (
      <FirebaseDatabaseProvider {...this.props.config} firebase={firebase}>
        <div style={{ width: "80%" }}>
          <div style={{ width: "100%" }}>
            <Header
              renderLogout={() => (
                <Button
                  {...getButtonStyleProps("contained")}
                  onClick={async () => {
                    await firebase.app().auth().signOut();
                  }}
                >
                  SignOut
                </Button>
              )}
              renderSearch={() => <Search />}
            />
          </div>
          <RowWithRightAlignedContent>
            <div {...getMenuListStyleProps()}>
              <FirebaseDatabaseNode path="user_bookmarks/">
                {({ value }) => {
                  if (isNullOrUndefined(value)) {
                    return null;
                  }
                  return <div>{MenuItemList(value)}</div>;
                }}
              </FirebaseDatabaseNode>
            </div>
          </RowWithRightAlignedContent>
          <RowWithRightAlignedContent>
            <FirebaseDatabaseMutation type="push" path="user_bookmarks/">
              {({ runMutation }) => (
                <form
                  {...getFormStyleProps()}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const newLink = get(
                      this.newLinkTextFieldRef,
                      "current.value",
                      ""
                    );
                    const newMeta = get(
                      this.newLinkMetaTextFieldRef,
                      "current.value",
                      ""
                    );
                    await runMutation({
                      link_url: newLink,
                      link_description: newMeta,
                      created_at: firebase.database.ServerValue.TIMESTAMP,
                      updated_at: firebase.database.ServerValue.TIMESTAMP,
                    });
                    set(this.newLinkTextFieldRef, "current.value", "");
                    set(this.newLinkMetaTextFieldRef, "current.value", "");
                  }}
                >
                  <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <div>
                      <TextField
                        label="New Link URL"
                        inputRef={this.newLinkTextFieldRef}
                      />
                    </div>
                    <div>
                      <TextField
                        label="New Link Metadata"
                        inputRef={this.newLinkMetaTextFieldRef}
                      />
                    </div>
                  </div>
                  <Fab {...getButtonStyleProps("round")} type="submit">
                    +
                  </Fab>
                </form>
              )}
            </FirebaseDatabaseMutation>
          </RowWithRightAlignedContent>
        </div>
      </FirebaseDatabaseProvider>
    );
  }
}

export default Authenticated;
