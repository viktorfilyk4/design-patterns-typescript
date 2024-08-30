import { Database } from 'sqlite3';
import { logger } from '../../utils/logger';

// Simple proxy that logs run statements and caches already run sqls

export default class SQLite3Proxy extends Database {
  private alreadyRunStatements: string[] = [];

  checkIsRunStatementAlreadyUsed(statement: string): boolean {
    const sql = statement.trim().toLowerCase();
    return this.alreadyRunStatements.includes(sql);
  }

  run(sql: string): this {
    if (this.checkIsRunStatementAlreadyUsed(sql)) {
      logger.blue(
        `* Statement '${sql}' was already run. Skipping run of this statement...`
      );
      return this;
    }

    logger.green(`* Running '${sql}' statement`);
    this.alreadyRunStatements.push(sql.trim().toLowerCase());
    return super.run(sql);
  }
}
