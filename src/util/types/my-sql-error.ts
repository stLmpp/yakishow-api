export interface MySQLError {
  message: string;
  code: string;
  errno: number;
  sqlMessage: string;
  sqlState: string;
  index: number;
  sql: string;
  name: string;
  query: string;
  parameters: any[];
}

export interface MySQLErrorResponse {
  sqlMessage: string;
  sqlCode: string;
  sqlErrono: number;
  message?: string;
}
