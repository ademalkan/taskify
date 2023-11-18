"use client";
import { createBoard } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";
import FormInput from "./form-input";
import FormButton from "./form-button";

const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBoard, initialState);
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};

export default Form;
