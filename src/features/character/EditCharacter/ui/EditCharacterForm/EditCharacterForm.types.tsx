import {EditCharacterFormData} from "@/features/character/EditCharacter/model";
import {Character} from "@/entities/character/model";

export type EditCharacterFormProps = {
  initialFormData: EditCharacterFormData;
  disabled: boolean;
  onCancelButtonClick: () => void;
  onFormSubmit: (payload: Partial<Character>) => void;
}