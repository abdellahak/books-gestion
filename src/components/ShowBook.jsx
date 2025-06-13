export default function ShowBook({ book, setBook}) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top : 0,
          left : 0,
        }}
      >
        <div style={{width : "fit-content", backgroundColor : "white", border : "1px black"}}>
          <ul>
            <li>
              <strong>ID :</strong>
              {book.id}
            </li>
            <li>
              <strong>Title :</strong>
              {book.title}
            </li>
            <li>
              <strong>Pages :</strong>
              {book.pages}
            </li>
            <li>
              <strong>Release Date :</strong>
              {book.releaseDate}
            </li>
          </ul>
          <button onClick={()=> setBook(null)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
