import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  description: string | undefined;
};

export const GroupCard: FC<Props> = ({ title, description }) => {
  return (
    <Card
      sx={{ width: "20rem", height: "12rem", borderColor: "#7d7d7d" }}
      variant="outlined"
    >
      <CardActionArea sx={{ height: "100%" }}>
        <CardContent
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1.5,
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
