import { db } from "@/lib";
import Board from "./board";
import Form from "./form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  const boardList = () => {
    return boards.map((board) => (
      <Board key={board.id} title={board.title} id={board.id} />
    ));
  };
  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">{boardList()}</div>
    </div>
  );
};

export default OrganizationIdPage;
