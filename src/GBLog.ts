
const logger = require("./logger");

export class GBLog {
  public static error(params): void {
    logger.error(params);
  }
  public static warn(params): void {
    logger.warn(params);
  }
  public static info(params): void {
    logger.info(params);
  }
  public static debug(params): void {
    logger.debug(params);
  }
  public static verbose(params): void {
    logger.verbose(params);
  }
  public static silly(params): void {
    logger.silly(params);
  }
}