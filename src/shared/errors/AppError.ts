export class AppError {
  public statusCode: number;
  public message: string;
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}