import { useState, useCallback } from "react";

export const useForm = (submit) => {
  const [form, setForm] = useState({});

  const handleChange = useCallback(({ fieldName, value, isValid }) => {
    setForm((currentForm) => {
      return {
        ...currentForm,
        [fieldName]: { ...currentForm[fieldName], value, isValid },
      };
    });
  }, []);

  const handleSubmit = () => {
    applyDirtyForm();
    if (isValidForm()) {
      submit();
    }
  };

  const applyDirtyForm = () => {
    setForm((currentForm) => {
      const dirtyForm = {};
      Object.keys(currentForm).forEach((key) => {
        dirtyForm[key] = { ...currentForm[key], isDirty: true };
      });
      return dirtyForm;
    });
  };

  const isValidForm = () => {
    Object.values(form).forEach(({ isValid }) => {
      if (!isValid) {
        return false;
      }
    });
    return true;
  };

  return { form, handleChange, handleSubmit };
};
