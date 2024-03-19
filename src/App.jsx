import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);

  function setOpenModal() {
    setOpen(!open);
  }

  return (
    <>
      <MainHeader openModal={setOpenModal} />
      <main>
        <PostList isOpen={open} isClose={setOpenModal} />
      </main>
    </>
  );
}

export default App;
