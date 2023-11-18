"use client"
import { Button } from "@/components/ui";
import React from "react";
import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      Create
    </Button>
  );
};

export default FormButton;
