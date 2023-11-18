"use client";
import React from "react";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks";
import { createBoard } from "@/actions";
import { FormSubmit } from "@/components/form/form-submit";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data), "SUCCESS";
    },
    onError(data) {
      console.log(data);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" label="Board Title" errors={fieldErrors} />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};

export default Form;
