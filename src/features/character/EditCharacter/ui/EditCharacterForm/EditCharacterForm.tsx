import type { ChangeEvent, FC } from 'react';
import { EditCharacterFormProps } from './EditCharacterForm.types';
import { Button, FormControl, Stack, TextField } from '@mui/material';
import { useEditCharacterForm } from '@/features/character/EditCharacter/model';
import { Form } from '@/shared/ui';

const EditCharacterForm: FC<EditCharacterFormProps> = ({
  disabled,
  initialFormData,
  onCancelButtonClick,
  onFormSubmit,
}) => {
  const {
    formData,
    onNameInputChange,
    onHeightInputChange,
    onMassInputChange,
    onHairColorInputChange,
    onSkinColorInputChange,
    onEyeColorInputChange,
    onBirthYearInputChange,
    onGenderInputChange,
    resetForm,
  } = useEditCharacterForm(initialFormData);

  const handleTextInputChange =
    (callback: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
      callback(event.target.value);
    };

  const handleCancelButtonClick = () => {
    resetForm();
    onCancelButtonClick();
  };

  const handleFormSubmit = () => {
    onFormSubmit({ ...formData });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormControl>
        <Stack spacing={2} width="100%">
          <TextField
            disabled={disabled}
            id="name-input"
            label="Name"
            value={formData.name}
            onChange={handleTextInputChange(onNameInputChange)}
          />

          <TextField
            type="number"
            disabled={disabled}
            id="height-input"
            label="Height"
            value={formData.height}
            onChange={handleTextInputChange(onHeightInputChange)}
          />

          <TextField
            type="number"
            disabled={disabled}
            id="mass-input"
            label="Mass"
            value={formData.mass}
            onChange={handleTextInputChange(onMassInputChange)}
          />

          <TextField
            disabled={disabled}
            id="hair-color-input"
            label="Hair Color"
            value={formData.hairColor}
            onChange={handleTextInputChange(onHairColorInputChange)}
          />

          <TextField
            disabled={disabled}
            id="skin-color-input"
            label="Skin Color"
            value={formData.skinColor}
            onChange={handleTextInputChange(onSkinColorInputChange)}
          />

          <TextField
            disabled={disabled}
            id="eye-color-input"
            label="Eye Color"
            value={formData.eyeColor}
            onChange={handleTextInputChange(onEyeColorInputChange)}
          />

          <TextField
            type="number"
            disabled={disabled}
            id="birth-year-input"
            label="Birth Year"
            value={formData.birthYear}
            onChange={handleTextInputChange(onBirthYearInputChange)}
          />

          <TextField
            disabled={disabled}
            id="gender-input"
            label="Gender"
            value={formData.gender}
            onChange={handleTextInputChange(onGenderInputChange)}
          />

          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="error" onClick={handleCancelButtonClick}>
              Cancel
            </Button>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </Stack>
        </Stack>
      </FormControl>
    </Form>
  );
};

export default EditCharacterForm;
