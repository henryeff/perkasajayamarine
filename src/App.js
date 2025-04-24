import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useEffect, useState } from "react";
import TwoStrokes from "./Pages/TwoStrokes";
import DisplayProduct from "./component/DisplayProduct";
import Yamalube from "./Pages/Yamalube";
import Parts from "./Pages/Parts";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import DisplayNews from "./component/DisplayNews";

function App() {
  const [news, setNews] = useState([]);
  const [product2tak, setProduct2tak] = useState([]);
  const [product4tak, setProduct4tak] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const responseNews = await fetch("news.txt");
        const response2tak = await fetch("twostrokes.txt");
        const response4tak = await fetch("fourstrokes.txt");
        const dataTextNews = await responseNews.text();
        const dataText2tak = await response2tak.text();
        const dataText4tak = await response4tak.text();
        const dataNews = JSON.parse(dataTextNews);
        const data2tak = JSON.parse(dataText2tak);
        const data4tak = JSON.parse(dataText4tak);
        setNews(dataNews.news);
        setProduct2tak(data2tak.products);
        setProduct4tak(data4tak.products);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home news={news} />} />
          <Route path="about" element={<About />} />
          <Route path="yamalube" element={<Yamalube />} />
          <Route path="genuineparts" element={<Parts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News news={news} />} />
          <Route path="news/:id" element={<DisplayNews news={news} />} />
          <Route
            path="2Strokes"
            element={
              <TwoStrokes
                products={product2tak}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
              />
            }
          >
            <Route
              path=":id"
              element={
                <DisplayProduct
                  products={product2tak}
                  openModal={openModal}
                  handleCloseModal={handleCloseModal}
                  handleOpenModal={handleOpenModal}
                />
              }
            />
          </Route>
          <Route
            path="4Strokes"
            element={
              <TwoStrokes
                products={product4tak}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
              />
            }
          >
            <Route
              path=":id"
              element={
                <DisplayProduct
                  products={product4tak}
                  openModal={openModal}
                  handleCloseModal={handleCloseModal}
                  handleOpenModal={handleOpenModal}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
