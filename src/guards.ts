type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "example.txt",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "mongodb://localhost:27017",
};

type Source = FileSource | DBSource;

function loadData(source: Source): void {
  if (source.type === "file") {
    console.log(`Loading data from file at ${source.path}`);
  } else if (source.type === "db") {
    console.log(`Connecting to database at ${source.connectionUrl}`);
  } else {
    throw new Error("Unknown source type");
  }
}
