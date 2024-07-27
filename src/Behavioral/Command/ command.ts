interface Command {
  execute(): void;
  rollback(): void;
}

class Database {
  private data: string[] = [];

  insert(record: string): void {
    this.data.push(record);
    console.log(`Inserted: ${record}`);
  }

  delete(record: string): void {
    this.data = this.data.filter((item) => item !== record);
    console.log(`Deleted: ${record}`);
  }

  showData(): void {
    console.log('Current Data:', this.data.join(', '));
  }
}

class InsertCommand implements Command {
  constructor(
    private db: Database,
    private record: string
  ) {}

  execute(): void {
    this.db.insert(this.record);
  }

  rollback(): void {
    this.db.delete(this.record);
  }
}

class DeleteCommand implements Command {
  constructor(
    private db: Database,
    private record: string
  ) {}

  execute(): void {
    this.db.delete(this.record);
  }

  rollback(): void {
    this.db.insert(this.record);
  }
}

const db = new Database();
const insertCommand = new InsertCommand(db, 'Record 1');
const deleteCommand = new DeleteCommand(db, 'Record 1');

insertCommand.execute(); // Outputs: Inserted: Record 1
db.showData(); // Outputs: Current Data: Record 1

deleteCommand.execute(); // Outputs: Deleted: Record 1
db.showData(); // Outputs: Current Data:

insertCommand.rollback(); // Outputs: Deleted: Record 1
db.showData(); // Outputs:
