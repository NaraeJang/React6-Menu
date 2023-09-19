import { useState } from "react";
import Titile from "./Titile";
import menu from "./data";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

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
