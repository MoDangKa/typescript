type FileData = {
  path: string;
  content: string;
};

interface DatabaseData {
  connectionUrl: string;
  credentials: string;
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
interface AccessedDatabaseData extends DatabaseData, Status {}
