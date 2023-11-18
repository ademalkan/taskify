import { deleteBoard } from "@/actions";
import React from "react";
import FormDelete from "./form-delete";

type Board = {
  id: string;
  title: string;
};

const Board = ({ id, title }: Board) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title : {title}</p>
      <FormDelete />
    </form>
  );
};

export default Board;
