const bookQueries = require("../GraphQL_queries/Books/booksQueries");

function Keyboards() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Keyboards</h2>
      <h1>{bookQueries.getAllBooks_AllFields()}</h1>
    </main>
  );
}

export default Keyboards;
