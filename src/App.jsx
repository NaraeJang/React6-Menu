import { useState } from "react";
import Titile from "./Titile";
import menu from "./data";
import Menu from "./Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <section className="menu">
        <Titile text="Our Menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
