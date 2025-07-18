import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import Cart from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    quantity: 1,
    size: 44,
  };
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = function () {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", window.document.documentElement.classList.contains("dark"));
  };
  const loadDarkModeState = function () {
    const isDarkMode = localStorage.getItem("isDarkMode");

    if (isDarkMode === "true") window.document.documentElement.classList.add("dark");
  };

  useEffect(loadDarkModeState, []);

  return (
    <div className="animate-fadeIn dark:bg-night p-10 xl:px-24">
      <Nav onClickShoppingButton={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
