import { Card, CardActionArea, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GroupCard } from "components/atoms/groupCard";
import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";
import { GroupCardContainer } from "Container/atoms/groupCard";

export const GroupList: FC = () => {
  return (
    <Grid container rowSpacing={5} columnSpacing={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
        <Grid key={x}>
          <GroupCardContainer title={"テスト" + x} description={"aaaaa"} />
        </Grid>
      ))}
      <Grid>
        <Card
          sx={{ width: "20rem", height: "12rem", borderColor: "#7d7d7d" }}
          variant="outlined"
        >
          <CardActionArea sx={{ height: "100%" }}>
            <CardContent
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <AddIcon fontSize="large" sx={{ margin: "auto" }} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};