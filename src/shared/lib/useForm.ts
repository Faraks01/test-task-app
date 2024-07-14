import {useCallback, useReducer} from 'react';

interface IFormSetFieldAction<Form extends object> {
  type: 'set_field';
  field: keyof Form;
  value: Form[keyof Form];
}

interface IFormResetAction {
  type: 'reset_form';
}

type TReducer<Form extends object> = (state: Form, action: IFormSetFieldAction<Form> | IFormResetAction) => Form;

export const useForm = <Form extends object>(initialFormState: Form, onFormChange?: (formData: Form) => void) => {
  const formReducer = useCallback<TReducer<Form>>((currentForm, action) => {
    const handleAction = () => {
      switch (action.type) {
        case 'set_field':
          return {
            ...currentForm,
            [action.field]: action.value,
          };
        case 'reset_form':
          return {...initialFormState};
        default:
          return currentForm;
      }
    };

    const updatedState = handleAction();
    if (onFormChange) onFormChange(updatedState);
    return updatedState;
  }, []);

  const [form, dispatch] = useReducer<typeof formReducer>(formReducer, initialFormState);

  const setFormField = (field: IFormSetFieldAction<Form>['field'], value: IFormSetFieldAction<Form>['value']) => {
    dispatch({
      type: 'set_field',
      field,
      value,
    });
  };

  const resetForm = () => {
    dispatch({type: 'reset_form'});
  };

  return {
    form,
    setFormField,
    resetForm,
  };
};

export default useForm;