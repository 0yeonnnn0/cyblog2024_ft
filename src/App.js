import { useState } from "react";
import HPFrame from "./components/Homepage/HPFrame";
import HomePage from "./pages/HomePage";
import { Helmet } from "react-helmet";
import NewPostPage from "./pages/NewPostPage";

function App() {
  const [writeModal, setWriteModal] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Trust.</title>
      </Helmet>

      <HPFrame writeModal={writeModal} setWriteModal={setWriteModal} />
      <button className="m-10" onClick={() => setWriteModal(true)}>
        글쓰기 버튼
      </button>
      {writeModal && <NewPostPage setWriteModal={setWriteModal} />}
    </div>
  );
}

export default App;
