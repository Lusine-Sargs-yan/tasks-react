import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const BASE_URL = "https://harvardartmuseums.org/browse";
const BASE_URL2 = "https://harvardartmuseums.org/browse?load_amount=30&offset=12";

function MuseumImage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(BASE_URL2)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records);
        console.log(data.info);
      });
  }, []);

  console.log(records);

  return (
    <div>
      <h2>Harvard art museums</h2>
      {records.map(({ primaryimageurl, title, division, culture,copyright, id }, index) => {
    
        return (
          <div key={id}>
            <img width="90" src={primaryimageurl} />
            <div>M{id}</div>
            <h5>{title}</h5>
            <div>Culture {culture}</div>
            <div>{copyright}</div>
            <div>{division}</div>
            <div>{index + 1}</div>
            <br />
          </div>
        );
      })}
      <div>{records.length}</div>
    </div>
  );
}

// class MuseumImage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       records: []

//     }
//   }
//   componentDidMount() {
//     this.getImagePosts();
//   }

//   getImagePosts = () => {
//     fetch(BASE_URL)
//     .then((response) => response.json())
//     .then(({records, info}) => {
//       console.log(records, "images:::");
//       //console.log(info, "info:::");
//       console.log(records.title, 'title:::');

//       this.setState({
//         records,
//       })
//     })
//   }

//   render() {
//     console.log(this.state, 'this state::::');
//     return (
//       <div>
//         <h2>Harvard art museums</h2>
//         {
//           this.state.records.map(({images, title, division}, index) => {

//             let image = images.map(({baseimageurl}) => {

//               return baseimageurl;
//             })

//             return (
//               <div key={index}>
//                 <img width="90" src={image} />
//                 <h4>{title}</h4>
//                 <div>{division}</div>
//               </div>
//             )
//           })
//         }
//       </div>

//     )
//   }

// }

export default MuseumImage;
