import React from "react";

function NavBar() {
  return (
    <div className="w-full h-[10vh] bg-[black] text-[white] flex items-center justify-evenly">
      <div>
        <h1 className="text-[34pt]">React Books App</h1>
      </div>
      <div>Your Favorites</div>
    </div>
  );
}

export default NavBar;
