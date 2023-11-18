"use server";
import { db } from "@/lib";
import { revalidatePath } from "next/cache";

export const deleteBoard = async (id: string) => {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_2YEAXWcq1mPECsSzthstUQm8W62");
};
