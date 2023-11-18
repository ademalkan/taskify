"use client"
import { Button } from "@/components/ui";
import React from "react";
import { useFormStatus } from "react-dom";

const FormDelete = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      variant={"destructive"}
      size={"sm"}
    >
      Delete
    </Button>
  );
};

export default FormDelete;
