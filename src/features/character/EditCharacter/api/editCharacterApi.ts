import {Character} from "@/entities/character/model";
import {usePatchCharacter} from "@/entities/character/api";
import {toast} from "react-toastify";

const editCharacterApi = {
  useEditCharacter: (id: number) => {
    const { patch } = usePatchCharacter(id);

    return {
      patch: (payload: Partial<Character>) => patch(payload).then(() => {
        toast.success('Character edited!');
      })
    }
  },
}

export const { useEditCharacter } = editCharacterApi;