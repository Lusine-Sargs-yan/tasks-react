import React from 'react';

const BASE_URL = 'https://harvardartmuseums.org/browse';


class MuseumImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
   
    }
  }
  componentDidMount() {
    this.getImagePosts();
  }

  getImagePosts = () => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then(({records, info}) => {
      console.log(records, "images:::");
      //console.log(info, "info:::");
      console.log(records.title, 'title:::');


      this.setState({
        records,
      })
    })
  }

  render() {
    console.log(this.state, 'this state::::');
    return (
      <div>
        <h2>Harvard art museums</h2>
        {
          this.state.records.map(({images, title, division}, index) => {

            let image = images.map(({baseimageurl}) => {

              return baseimageurl;
            })

            return (
              <div key={index}>
                <img width="90" src={image} />
                <h4>{title}</h4>
                <div>{division}</div>
              </div>
            )
          })
        }
      </div>
      
    )
  }

}

export default MuseumImage;