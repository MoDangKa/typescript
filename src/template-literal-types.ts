type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

type FilePermissions = `${ReadPermissions}-${WritePermissions}`; // "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write"

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventNames =
  | `${keyof DataFile}Changed`
  | `${keyof DataFile}Updated`
  | `${keyof DataFile}Deleted`;
// "dataChanged" | "dataUpdated" | "dataDeleted" | "permissionsChanged" | "permissionsUpdated" | "permissionsDeleted"

type DataFileEvents = {
  [K in DataFileEventNames]: (data: DataFile) => void;
};
// dataChanged: (data: DataFile) => void;
// permissionsChanged: (data: DataFile) => void;
// dataUpdated: (data: DataFile) => void;
// permissionsUpdated: (data: DataFile) => void;
// dataDeleted: (data: DataFile) => void;
// permissionsDeleted: (data: DataFile) => void;
