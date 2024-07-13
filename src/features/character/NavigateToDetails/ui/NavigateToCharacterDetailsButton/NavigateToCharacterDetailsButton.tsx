import type {FC} from 'react'
import {NavigateToCharacterDetailsButtonProps} from './NavigateToCharacterDetailsButton.types'
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';
import {generateCharacterDetailsUrlPath} from "@/features/character/NavigateToDetails/lib";

const NavigateToCharacterDetailsButton: FC<NavigateToCharacterDetailsButtonProps> = ({
  character: c
}) => {
  return (
    <Button
      component={Link}
      to={generateCharacterDetailsUrlPath(c.id)}
      size="small"
    >
      Learn More
    </Button>
  )
}

export default NavigateToCharacterDetailsButton
