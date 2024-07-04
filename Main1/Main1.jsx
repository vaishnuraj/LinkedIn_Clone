import React, { useState } from 'react';
import styled from 'styled-components';

const Main1 = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [likesCount, setLikesCount] = useState(75);
  const [commentsCount, setCommentsCount] = useState(2);
  const [sharedCount, setSharedCount] = useState(10); // Example count for shared posts
  const [sentCount, setSentCount] = useState(5); // Example count for sent posts

  const handleStartPost = () => {
    setShowPostModal(true);
  };

  const handleClosePost = () => {
    setShowPostModal(false);
  };

  const handleLike = () => {
    setLikesCount(likesCount + 1);
  };

  const handleComment = () => {
    setCommentsCount(commentsCount + 1);
  };

  const handleShare = () => {
    setSharedCount(sharedCount + 1);
  };

  const handleSend = () => {
    setSentCount(sentCount + 1);
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <img src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/trgfl7cfsz6m113fb2el/edit-your-photo-for-your-linkedin-profile-picture.png
          " alt="User" />
          <button onClick={handleStartPost}>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.png" alt="Photo" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video.png" alt="Video" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event.png" alt="Event" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/helo.png" alt="Write article" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5tI3KJAWlEtk1ph4PmL2LB6xn0HXyhGhww&s" alt="User" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.png" alt="Options" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/img1.webp" alt="Shared" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button onClick={handleLike}>
                <img src="/images/like.png" alt="Like" />
                <img src="/images/clapping.png" alt="Clap" id="two" />
                <span>{likesCount}</span>
              </button>
            </li>
            <li>
              <a>{commentsCount} comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button onClick={handleLike}>
              <img src="/images/likedd.png" alt="Like" />
              <span>Like</span>
            </button>
            <button onClick={handleComment}>
              <img src="/images/comment.png" alt="Comment" />
              <span>Comment</span>
            </button>
            <button onClick={handleShare}>
              <img src="/images/share.png" alt="Share" />
              <span>Share</span>
            </button>
            <button onClick={handleSend}>
              <img src="/images/mail.png" alt="Send" id="send" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      {showPostModal && <PostModal onClose={handleClosePost} />}
    </Container>
  );
};

const PostModal = ({ onClose }) => {
  const handlePost = (event) => {
    event.preventDefault();
    // Handle the post creation logic here
    onClose();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Create a post</h2>
        <form onSubmit={handlePost}>
          <textarea placeholder="What do you want to talk about?" required></textarea>
          <div>
            <button type="submit">Post</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      img {
        margin: 0 4px 0 -2px;
        width: 4rem;
      }
      span {
        color: #70b5f9;
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 18px;
  align-items: center;
  display: flex;
  font-weight: 600;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 16px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img {
      width: 26px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    a {
      margin-left: 7px;
      position: relative;
      top: 3px;
      color: blue;
      font-weight: 600;
    }
  }
  li {
    margin-right: 5px;
    font-size: 16px;
    button {
      display: flex;
      font-weight: 600;
      span {
        margin-top: 5px;
        margin-left: 4px;
      }
    }
  }
  #two {
    width: 25px;
    border-radius: 50%;
    background-color: lightgreen;
    margin-top: 2px;
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  #send {
    width: 30px;
  }
  img {
    width: 35px;
  }
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 500px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    textarea {
      min-height: 100px;
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      resize: none;
    }
    div {
      display: flex;
      justify-content: flex-end;
      button {
        padding: 10px 20px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:first-child {
          background-color: #0a66c2;
          color: white;
        }
        &:last-child {
          background-color: #e0e0e0;
        }
      }
    }
  }
`;

export default Main1;
