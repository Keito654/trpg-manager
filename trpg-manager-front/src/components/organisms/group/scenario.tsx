import { TextField } from "@mui/material";
import { SearchButton } from "components/atoms/searchButton";
import { FC } from "react";

export const Scenario: FC = () => {
  return (
    <>
      <TextField
        label="検索"
        fullWidth
        InputProps={{ endAdornment: <SearchButton /> }}
      />
    </>
  );
};
