import type {FC} from "react";
import type {MediaCardProps} from "./MediaCard.types.tsx";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const MediaCard: FC<MediaCardProps> = ({
  imageUrl,
  imageTitle,
  content,
  actions
}) => {
  return (
    <Card>
      {imageUrl && (
        <CardMedia
          sx={{height: 140}}
          image={imageUrl}
          title={imageTitle}
        />
      )}

      {content && (
        <CardContent>
          {content}
        </CardContent>
      )}

      {actions && (
        <CardActions>
          {actions}
        </CardActions>
      )}
    </Card>
  );
}

export default MediaCard;