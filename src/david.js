import React from 'react'

const david = () => {
    return (
        <>
          <section className="main-card--cointainer">
            {menuData.map((curElem) => {
              const { id, name, category, image, description } = curElem;
    
              return (
                <>
                  <div className="card-container" >
                    <div className="card ">
                      <div className="card-body">
                        <span className="card-number card-circle subtle"></span>
                        <span className="card-author subtle"> </span>
                        <h2 className="card-title"> </h2>
                        <span className="card-description subtle">
                        </span>
                        <div className="card-read">Read</div>
                      </div>
                      <img src="" alt="images" className="card-media" />
    
                      <span className="card-tag  subtle">Order Now</span>
                    </div>
                  </div>
                </>
              );
            })}  
          </section>
        </>
      );
}

export default david;
