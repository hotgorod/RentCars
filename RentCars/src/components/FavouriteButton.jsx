import { useState } from "react";

import ToggleButton from "react-bootstrap/ToggleButton";

const FavouriteButton = () => {
  const [checked, setChecked] = useState(false);
 
  return (
    <div>
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Favourite
      </ToggleButton>
     
    </div>
  );
};

export default FavouriteButton;
