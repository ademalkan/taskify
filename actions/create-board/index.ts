"use server";

import { auth } from "@clerk/nextjs";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib";
import { revalidatePath } from "next/cache";
import { InputType, ReturnType } from "./types";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId) {
    return {
      error: "You must be logged in to create a board",
    };
  }

  const { title } = data;

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Something went wrong while creating the board",
    };
  }

  revalidatePath(`/board/${board.id}`);

  return {
    data: board,
  };
};

export const createBoard = createSafeAction(CreateBoard, handler);
