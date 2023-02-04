const db = require("./db");

function insertRow() {
  const [name, color, weight] = process.argv.slice(2);
  db.run(
    `INSERT INTO user (username, password) VALUES (?,?)`,
    [un,pw],
    
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
    }
  );
}
insertRow();