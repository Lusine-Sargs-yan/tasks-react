import React from 'react';

const BASE_URL = 'https://harvardartmuseums.org/browse';

class ImagePost extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getImagePosts();
  }

  getImagePosts = () => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((browse) => {
      console.log(browse, "images:::");
    })
  }

  render() {
    return (
      <div></div>
    )
  }

}
export default ImagePost;