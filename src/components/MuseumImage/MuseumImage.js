//import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "../MuseumImage/MuseumImage.css";

const BASE_URL = "https://harvardartmuseums.org/browse";
const BASE_URL2 =
  "https://harvardartmuseums.org/browse?load_amount=30&offset=12";

const renderRecords = (records) => {
  return (
    <div>
      {records.map(
        (
          { primaryimageurl, title, division, culture, copyright, id },
          index
        ) => {
          return (
            <div key={id}>
              <img width="90" alt={title} src={primaryimageurl} />
              <div>M{id}</div>
              <h5>{title}</h5>
              <div>Culture {culture}</div>
              <div>{copyright}</div>
              <div>{division}</div>
              <div>{index + 1}</div>
              <br />
            </div>
          );
        }
      )}
    </div>
  );
};
// works only first page
function MuseumImage() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalRecordsPerQuery, setTotalRecordsPerQuery] = useState(10);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch(BASE_URL2)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records);
        console.log(data.info);

        let pages = Math.ceil(data.info.pages / data.info.totalrecordsperquery); //totalrecordsperquery: 30

        setPageCount(pages);
        setTotalRecordsPerQuery(data.info.totalrecordsperquery);
        setPrev(data.info.prev);
        setNext(data.info.next);
        setIsLoading(false);
      });
  }, []);

  const handlePageCahnge = (event) => {
    const pageNumber = Number(event.target.id);
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => prev;
  const handleNextPage = () => next;

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const indexOfLastRecords = currentPage * totalRecordsPerQuery;
  const indexOfFirstRecords = indexOfLastRecords - totalRecordsPerQuery;
  const currentRecords = records.slice(indexOfFirstRecords, indexOfLastRecords);

  const renderPageNumber = pages.map((elem) => {
    return (
      <span
        key={elem}
        id={elem}
        className={currentPage === elem ? "active" : ""}
        onClick={handlePageCahnge}
      >
        {elem}
      </span>
    );
  });

  return (
    <div>
      <h2>Harvard art museums</h2>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        renderRecords(currentRecords)
      )}
      <ul className="pagination">{renderPageNumber}</ul>
      <div>
        <button onClick={handlePreviousPage} className="prev-button">Prev</button>
        <button onClick={handleNextPage}className="next-button">Next</button>
      </div>
    </div>
  );
}



//the second way solution only 3 pages per page 10 records
// function MuseumImage() {
//   const [records, setRecords] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalRecordsPerQuery, setTotalRecordsPerQuery] = useState(10);

//   const handlePageCahnge = (event) => {
//     const pageNumber = Number(event.target.id);
//     setCurrentPage(pageNumber);
//   };

//   const pages = [];
//   for (let i = 1; i <= Math.ceil(records.length / totalRecordsPerQuery); i++) {
//     pages.push(i);
//   }

//   const indexOfLastRecords = currentPage * totalRecordsPerQuery;
//   const indexOfFirstRecords = indexOfLastRecords - totalRecordsPerQuery;
//   const currentRecords = records.slice(indexOfFirstRecords, indexOfLastRecords);

//   const renderPageNumber = pages.map((elem) => {
//     return (
//       <span
//         key={elem}
//         id={elem}
//         className={currentPage === elem ? "active" : null}
//         onClick={handlePageCahnge}
//       >
//         {elem}
//       </span>
//     );
//   });

//   useEffect(() => {
//     setIsLoading(true);

//     fetch(BASE_URL2)
//       .then((response) => response.json())
//       .then((data) => {
//         setRecords(data.records);
//         setIsLoading(false);
//       });
//   }, []);


//   const  handlePreviousPage = () => {
//     setCurrentPage(currentPage - 1);
//   }

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   }

//   return (
//     <div>
//       <h2>Harvard art museums</h2>
//       {isLoading ? (
//         <p className="loading">Loading...</p>
//       ) : (
//         renderRecords(currentRecords)
//       )}
//       <ul className="pagination">{renderPageNumber}</ul>
//       <div>
//         <button onClick={handlePreviousPage} className="prev-button">
//           Prev
//         </button>
//         <button onClick={handleNextPage} className="next-button">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
export default MuseumImage;
