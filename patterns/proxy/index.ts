import SQLite3Proxy from './SQLite3Proxy';

const db = new SQLite3Proxy(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE lorem (info TEXT)');
  db.run('CREATE TABLE lorem (info TEXT)');

  const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
  for (let i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i);
  }
  stmt.finalize();

  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(row);
  });
});

db.close();
