export {}; // make the file a module, to get rid of the warning

declare global {
  namespace NodeJS {
    interface Global {
      mongoUri: string;
      mongoServer: string;
    }
  }
}
