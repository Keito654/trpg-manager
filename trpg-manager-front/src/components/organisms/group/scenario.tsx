import { Box, TextField } from "@mui/material";
import { ScenarioCard } from "components/atoms/scenarioCard";
import { SearchButton } from "components/atoms/searchButton";
import { FC } from "react";

export const Scenario: FC = () => {
  return (
    <>
      <TextField
        label="検索"
        fullWidth
        InputProps={{ endAdornment: <SearchButton /> }}
        sx={{ mb: 3 }}
      />
      <Box>
        <ScenarioCard />
      </Box>
    </>
  );
};
