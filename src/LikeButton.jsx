import React, { useState } from "react";

function LikeButton() {
  const [number, setNumber] = useState(100);
  const [like, setLike] = useState(false);
  return (
    <>
      <div>
        {like ? (
          <button className="like-button liked" onClick={e => setLike(false)}>
            Like |
            <span className="likes-counter">
              {number ? number + 1 : number}
            </span>
          </button>
        ) : (
          <button className="like-button" onClick={e => setLike(true)}>
            Like |<span className="likes-counter">{number}</span>
          </button>
        )}
      </div>
      <style>{`
                      .like-button {
                          font-size: 1rem;
                          padding: 5px 10px;
                          color:  #585858;
                      }
                     .liked {
                          font-weight: bold;
                          color: #1565c0;
                     }
                  `}</style>
    </>
  );
}
export default LikeButton;
