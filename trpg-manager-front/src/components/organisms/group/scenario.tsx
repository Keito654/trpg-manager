import { TextField } from "@mui/material";
import { ScenarioCard } from "components/atoms/scenarioCard";
import { SearchButton } from "components/atoms/searchButton";
import { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const Scenario: FC = () => {
  return (
    <>
      <TextField
        label="検索"
        fullWidth
        InputProps={{ endAdornment: <SearchButton /> }}
        sx={{ mb: 3 }}
      />
      <Grid container rowSpacing={5} columnSpacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
          <Grid key={x}>
            <ScenarioCard
              title={
                "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
