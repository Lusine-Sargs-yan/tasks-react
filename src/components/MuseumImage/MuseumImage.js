//import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "../MuseumImage/MuseumImage.css";

const BASE_URL = "https://harvardartmuseums.org/browse";
const BASE_URL2 =
  "https://harvardartmuseums.org/browse?load_amount=30&offset=12";

function MuseumImage() {
  const [records, setRecords] = useState([]);
  const [info, setInfo] = useState({
    pageCount: 0,
    currentPage: 1,
    totalRecordsPerQuery: 15,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(BASE_URL2)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records);

        console.log(data.info);
        console.log(data.info.pages);

        let pages = Math.ceil(data.info.pages / data.info.totalrecordsperquery); //totalrecordsperquery: 30

        setInfo({
          pageCount: pages,
          currentPage: 1,
          totalRecordsPerQuery: data.info.totalrecordsperquery,
        });

        setIsLoading(false);
      });
  }, []);

  console.log(info.totalRecordsPerQuery, "per recording");

  const handleClick = (event) => {
    setInfo({
      currentPage: Number(event.target.id),
    });
  };

  const pages = [];
  for (let number = 1; number <= info.pageCount; number++) {
    pages.push(number);
  }


  const indexOfLastRecords = info.pageCount * info.totalRecordsPerQuery;
  console.log(indexOfLastRecords, "aaa");
  const indexOfFirstRecords = indexOfLastRecords - info.totalRecordsPerQuery;
  console.log(indexOfFirstRecords, "hhh");

  const getCurrentPageOfRecord = records.slice(indexOfFirstRecords, indexOfLastRecords);
  console.log(getCurrentPageOfRecord , 'jjj');

  return (
    <div>
      <h2>Harvard art museums</h2>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        records.map(
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
        )
      )}
      <div>All pages {info.pageCount}</div>
      <ul className="pagination">{pages.map((elem) => {
        return (
          <span key={elem} id={elem} onClick={handleClick}>
            {elem}
          </span>
        )

      })}
      </ul>
    </div>
  );
}


export default MuseumImage;
