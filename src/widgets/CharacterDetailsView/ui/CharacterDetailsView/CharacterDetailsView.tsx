import {FC, useState} from 'react'
import type {CharacterDetailsViewProps} from './CharacterDetailsView.types'
import {Button, Skeleton, Stack} from "@mui/material";
import {CharacterCard} from "@/entities/character/ui";
import {EditCharacterForm, type EditCharacterFormProps} from "@/features/character/EditCharacter/ui/EditCharacterForm";
import {useEditCharacter} from "@/features/character/EditCharacter/api";
import {useGetCharacter} from "@/entities/character/api";

const CharacterDetailsView: FC<CharacterDetailsViewProps> = ({
  characterId,
}) => {
  const [editMode, setEditMode] = useState(false);
  const {patch} = useEditCharacter(characterId);

  const {
    isLoading,
    data: character,
  } = useGetCharacter(characterId);

  const turnOnEditMode = () => setEditMode(true);
  const turnOffEditMode = () => setEditMode(false);

  const handleFormSubmit: EditCharacterFormProps['onFormSubmit'] = (payload) => {
    patch(payload).then(() => {
      turnOffEditMode();
    });
  }

  return (
    <Stack spacing={2}>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width='100%'
          height={800}
        />
      )}

      {!editMode && !isLoading && !!character && (
        <CharacterCard
          character={character}
          actions={(
            <Button
              onClick={turnOnEditMode}
              size="small">
              Edit
            </Button>
          )}
        />
      )}

      {editMode && !isLoading && !!character && (
        <EditCharacterForm
          disabled={false}
          initialFormData={character}
          onCancelButtonClick={turnOffEditMode}
          onFormSubmit={handleFormSubmit}
        />
      )}
    </Stack>
  )
}

export default CharacterDetailsView
