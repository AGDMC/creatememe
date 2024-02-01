import { useState, useEffect } from "react";
import "./Main.scss";

const GenerateMeme = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memeUrl, setMemeUrl] = useState("");

  useEffect(() => {
    // Fetch images from the API
    fetch("https://api.memegen.link/images")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedImage || !topText || !bottomText) {
      // alert("Please fill in all fields");
      return;
    }

    // Generate meme URL
    const memeApiUrl = `https://api.memegen.link/images/${selectedImage}/${topText}/${bottomText}.png`;
    setMemeUrl(memeApiUrl);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <section ClassName="meme">
      <h1 className="meme__title">Generate your Meme </h1>

      <form className="meme__form" onSubmit={handleSubmit}>
        <div className="meme__formwrapper">
          <label className="meme__labelname" htmlFor="label">
            Select Image:
          </label>
          <select
            className="meme_input"
            onChange={(e) => setSelectedImage(e.target.value)}
          >
            <option value="">Select an Image</option>
            {images.map((image, index) => (
              <option key={index} value={image.id}>
                {image.name}
              </option>
            ))}
          </select>

          <label className="meme__labelname" htmlFor="label">
            Enter Top Text:
          </label>
          <input
            className="meme_input"
            type="text"
            placeholder="Add a text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />

          <label className="meme__labelname" htmlFor="label">
            Enter Bottom Text:
          </label>
          <input
            className="meme_input"
            type="text"
            placeholder="Add a text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
        </div>

        <div className="meme__button">
          <button className="meme__click">Generate Meme</button>
        </div>
      </form>
      {memeUrl && (
        <div className="meme__result">
          <img src={memeUrl} alt="Generated Meme" />
        </div>
      )}
    </section>
  );
};

export default GenerateMeme;
