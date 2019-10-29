import React from 'react';

const Header = () => {
  return (
    <header>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <p>Meme Generator</p>
    </header>
  );
  // const date = new Date ();
  // const hours = date.getHours ();
  // let timeOfDay;
  // console.log (hours);
  // if (hours < '05') {
  //   timeOfDay = 'morning';
  // } else if (hours > '12') {
  //   timeOfDay = 'midday';
  // } else {
  //   timeOfDay = 'night';
  // }
  // return (
  //   <nav>
  //     <header className="navbar">Hello World {timeOfDay}</header>
  //   </nav>
  // );
};

export default Header;
