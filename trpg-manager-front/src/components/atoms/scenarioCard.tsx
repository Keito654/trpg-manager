import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import iguanaImage from "../../../public/contemplative-reptile.jpg";

export const ScenarioCard: FC = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "21rem",
        height: "18.5rem",
        borderColor: "#7d7d7d",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia
          sx={{ height: "10rem", position: "relative", mt: 1, mr: 2, ml: 2 }}
          title="green iguana"
        >
          <Image
            src={iguanaImage}
            alt="iguana"
            fill
            style={{ objectFit: "cover" }}
          />
        </CardMedia>
        <CardContent>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              WebkitLineClamp: 3,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            あああああああああああああああああうううううううううううういいいいいいいいいいいいいいいいい
            えええええええおおおおおお
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
