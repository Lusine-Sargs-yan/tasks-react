import React from 'react';

const BASE_URL = 'https://harvardartmuseums.org/browse';

class ImagePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postsData: {
        posts: []
      }
    }
  }
  componentDidMount() {
    this.getImagePosts();
  }

  getImagePosts = () => {
    fetch(BASE_URL)
    .then((response) => {
      console.log(response.json());
      return response.json()
    })
    .then((imagePosts) => {
      console.log(imagePosts, "image posts")

      this.setState({
        postsData: {
          posts: imagePosts
        }
      });

    })
  }


  render() {
    // console.log(this.state);
    // console.log(this.state.postsData.posts);
    return (
      <div>
        {/* {this.state.postsData.posts.title} */}
      </div>
    )
  }

}
export default ImagePost;