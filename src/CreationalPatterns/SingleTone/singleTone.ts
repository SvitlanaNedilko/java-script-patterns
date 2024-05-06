class Database {
  private static instance: Database;
  private static exists: boolean;
  private data: any;

  private constructor(data: any) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  static getInstance(data: any): Database {
    if (!Database.instance) {
      Database.instance = new Database(data);
    }
    return Database.instance;
  }

  getData(): any {
    return this.data;
  }
}

const db1 = Database.getInstance({ name: 'example' });

const db2 = Database.getInstance({ name: 'another example' });

export const singleTone = () => {
  console.log('-----Singletone----');
  console.log(db1.getData());
  console.log(db2.getData());
};
