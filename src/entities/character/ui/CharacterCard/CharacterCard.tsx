import type {FC} from 'react'
import {CharacterCardProps} from './CharacterCard.types'
import {DenseTable, MediaCard} from "@/shared/ui";
import {Stack, Typography} from "@mui/material";
import {formatDistanceToNow} from 'date-fns'

const CharacterCard: FC<CharacterCardProps> = ({character: c, actions}) => {
  return (
    <MediaCard
      content={(
        <Stack spacing={2}>
          <Typography variant="h5" component="div">
            {c.name}
          </Typography>

          <DenseTable
            ariaLabel={'character parameters table'}
            rows={[
              ['Gender', c.gender],
              ['Height', c.height],
              ['Mass', c.mass],
              ['Hair Color', c.hairColor],
              ['Skin Color', c.skinColor],
              ['Eye Color', c.eyeColor],
              ['Birth Year', c.birthYear],
            ]}
          />

          <Stack spacing={0}>
            <Typography variant="caption">
              {`Created: ${formatDistanceToNow(c.created)}`}
            </Typography>

            <Typography variant="caption">
              {`Edited: ${formatDistanceToNow(c.edited)}`}
            </Typography>
          </Stack>
        </Stack>
      )}
      actions={actions}
    />
  )
}

export default CharacterCard
