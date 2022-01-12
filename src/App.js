import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">

      {/* {header} */}
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FInstagram-Logo-2010-2013.png&f=1&nofb=1"
          alt=""
        />
      </div>
      <h1>Hello let's build instagram clone @_@</h1>
      {/* {posts} */}
      <Post username="itsharshitb" caption="That's soo cool" imageUrl="https://naruto-shippuden-anime.com/wp-content/uploads/2020/01/006-157.jpg" />
      <Post username="Sangoku" caption="I am the Fire Hasira." imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yS8UMQWoP39uU-aAcE6hFQHaEk%26pid%3DApi&f=1" />
      <Post username="Nezuko" caption="Damn i am cute!" imageUrl="https://www.siliconera.com/wp-content/uploads/2021/02/Demon-Slayer-Hinokami-Kepputan-nezuko-xbox-series-x.jpg"/>
      <Post username="Hidden in the leaf" caption="We are so awesome" imageUrl="https://naruto-shippuden-anime.com/wp-content/uploads/2020/01/006-157.jpg"/>
    </div>
  );
}

export default App;
