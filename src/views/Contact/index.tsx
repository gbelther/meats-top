import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";

import "./styles.scss";

interface IField {
  value: string;
  isValid: boolean;
  hasSubmitted: boolean;
  errorMessage: string;
}

interface IFormFields {
  name: IField;
  email: IField;
}

const formFieldsInitial = {
  name: {
    value: "",
    isValid: true,
    hasSubmitted: false,
    errorMessage: "",
  },
  email: {
    value: "",
    isValid: true,
    hasSubmitted: false,
    errorMessage: "",
  },
};

let schemaName = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
});

let schemaEmail = yup.object().shape({
  email: yup.string().email("Campo inválido").required("Campo obrigatório"),
});

const Contact = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [formFields, setFormFields] = useState<IFormFields>(formFieldsInitial);

  const handleChangeName = async (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((prevState) => ({
      ...prevState,
      name: {
        ...prevState.name,
        value: event.target.value,
      },
    }));
  };

  const handleChangeEmail = async (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        value: event.target.value,
      },
    }));
  };

  const errorMessageName = useMemo(() => {
    const { isValid, hasSubmitted, errorMessage } = formFields.name;

    if (!isValid && hasSubmitted && !!errorMessage) {
      return errorMessage;
    }

    return "";
  }, [formFields]);

  const errorMessageEmail = useMemo(() => {
    const { isValid, hasSubmitted, errorMessage } = formFields.email;

    if (!isValid && hasSubmitted && !!errorMessage) {
      return errorMessage;
    }

    return "";
  }, [formFields]);

  const validateFields = async () => {
    try {
      await schemaName.validate({ name: formFields.name.value });

      setFormFields((prevState) => ({
        ...prevState,
        name: {
          ...prevState.name,
          isValid: true,
          errorMessage: "",
          hasSubmitted: true,
        },
      }));
    } catch (error: any) {
      setFormFields((prevState) => ({
        ...prevState,
        name: {
          ...prevState.name,
          isValid: false,
          errorMessage: error.message,
          hasSubmitted: true,
        },
      }));
    }

    try {
      await schemaEmail.validate({ email: formFields.email.value });

      setFormFields((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          isValid: true,
          errorMessage: "",
          hasSubmitted: true,
        },
      }));
    } catch (error: any) {
      setFormFields((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          isValid: false,
          errorMessage: error.message,
          hasSubmitted: true,
        },
      }));
    }
  };

  const handleSaveContact = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        alert("Formulário enviado com sucesso!");
        resolve("");
      }, 2000);
    });
  };

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await validateFields();

    const formIsValid = Object.values(formFields).every(
      (field) => field.isValid
    );

    if (formIsValid) {
      setLoadingSubmit(true);
      await handleSaveContact();
      setLoadingSubmit(false);
    }
  };

  const clearForm = () => {
    setFormFields(formFieldsInitial);
  };

  return (
    <main id="p-about">
      <form onSubmit={handleSubmitForm} noValidate className="p-about__form">
        <section className="p-about__form__input-wrapper">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="p-about__form__input-wrapper--input-field"
            value={formFields.name.value}
            onChange={handleChangeName}
          />
          <label className="p-about__form__input-wrapper--validation">
            {errorMessageName}
          </label>
        </section>
        <section className="p-about__form__input-wrapper">
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            placeholder="Seu E-mail"
            className="p-about__form__input-wrapper--input-field"
            value={formFields.email.value}
            onChange={handleChangeEmail}
          />
          <label
            className="p-about__form__input-wrapper--validation"
            htmlFor=""
          >
            {errorMessageEmail}
          </label>
        </section>
        <section className="p-about__form__footer">
          <button
            type="button"
            className="p-about__form__footer--button"
            onClick={() => clearForm()}
          >
            LIMPAR
          </button>
          <button type="submit" className="p-about__form__footer--button">
            {loadingSubmit ? <ClipLoader size={16} /> : "ENVIAR"}
          </button>
        </section>
      </form>
    </main>
  );
};

export default Contact;
