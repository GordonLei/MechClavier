//test
//const bookQueries = require("../GraphQL_queries/Books/booksQueries");

const keyboardQueries = require("../GraphQL_queries/Keyboards/keyboardsQueries");

function Keyboards() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Keyboards</h2>
      <h1>{keyboardQueries.getAllKeyboards_AllFields()}</h1>
    </main>
  );
}

export default Keyboards;
