import * as React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Button, MenuItem, TextField, Fab } from "@material-ui/core";
import {
  getButtonStyleProps,
  getCenterChildrenStyle,
  getFormStyleProps,
  getMenuListStyleProps,
  HeaderProps,
  RowWithRightAlignedContext as RowWithRightAlignedContent,
} from "./Common";
import Search from "./Search";

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

class Authenticated extends React.Component<
  {},
  { linkText: string; linkMetadata: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      linkText: "",
      linkMetadata: "",
    };
    this.linkTextChanged = this.linkTextChanged.bind(this);
    this.linkMetadataChanged = this.linkMetadataChanged.bind(this);
  }

  linkTextChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      linkText: e.target.value,
    });
  }

  linkMetadataChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      linkMetadata: e.target.value,
    });
  }

  render() {
    const { linkText, linkMetadata } = this.state;
    return (
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
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </div>
        </RowWithRightAlignedContent>
        <RowWithRightAlignedContent>
          <form
            {...getFormStyleProps()}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(linkText, linkMetadata);
            }}
          >
            <div style={{ paddingTop: 20, paddingBottom: 20 }}>
              <div>
                <TextField
                  label="New Link URL"
                  onChange={this.linkTextChanged}
                />
              </div>
              <div>
                <TextField
                  label="New Link Metadata"
                  onChange={this.linkMetadataChanged}
                />
              </div>
            </div>
            <Fab {...getButtonStyleProps("round")} type="submit">
              +
            </Fab>
          </form>
        </RowWithRightAlignedContent>
      </div>
    );
  }
}

export default Authenticated;
