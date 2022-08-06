
const loggers = require("./logger");

export class GBLog {
  public static getLogger() { return loggers; }
  public static error(params): void {
    loggers[0].error(params);
    loggers[1].error(params);
  }
  public static warn(params): void {
    loggers[0].warn(params);
    loggers[1].warn(params);
  }
  public static info(params): void {
    loggers[0].info(params);
    loggers[1].info(params);
  }
  public static debug(params): void {
    loggers[0].debug(params);
    loggers[1].debug(params);
  }
  public static verbose(params): void {
    loggers[0].verbose(params);
    loggers[1].verbose(params);
  }
  public static silly(params): void {
    loggers[0].silly(params);
    loggers[1].silly(params);
  }
}