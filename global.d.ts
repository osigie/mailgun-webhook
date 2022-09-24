declare global {
  namespace NodeJS {
    interface Global {
      mongoUri: string;
      mongoServer: string;
    }
  }
}
