import {
  EditCharacterFormActions,
  EditCharacterFormData,
} from '@/features/character/EditCharacter/model';
import { useForm } from '@/shared/lib';

interface UseEditCharacterFormReturnType extends EditCharacterFormActions {
  formData: EditCharacterFormData;
  resetForm: () => void;
}

export const useEditCharacterForm = (
  initFormData: EditCharacterFormData,
): UseEditCharacterFormReturnType => {
  const { form, setFormField, resetForm } = useForm(initFormData);

  const onNameInputChange = (name: string) => {
    setFormField('name', name);
  };

  const onHeightInputChange = (height: string) => {
    setFormField('height', height);
  };

  const onMassInputChange = (mass: string) => {
    setFormField('mass', mass);
  };

  const onHairColorInputChange = (hairColor: string) => {
    setFormField('hairColor', hairColor);
  };

  const onSkinColorInputChange = (skinColor: string) => {
    setFormField('skinColor', skinColor);
  };

  const onEyeColorInputChange = (eyeColor: string) => {
    setFormField('eyeColor', eyeColor);
  };

  const onBirthYearInputChange = (birthYear: string) => {
    setFormField('birthYear', birthYear);
  };

  const onGenderInputChange = (gender: string) => {
    setFormField('gender', gender);
  };

  return {
    formData: form,
    onNameInputChange,
    onHeightInputChange,
    onMassInputChange,
    onHairColorInputChange,
    onSkinColorInputChange,
    onEyeColorInputChange,
    onBirthYearInputChange,
    onGenderInputChange,
    resetForm,
  };
};
