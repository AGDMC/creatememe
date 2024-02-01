import "./Main.scss";

const GenerateMeme = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section ClassName="meme">
      <h1 className="meme__title">Generate your Meme </h1>

      <form className="meme__form" onSubmit={handleSubmit}>
        <div className="meme__formwrapper">
          <label className="meme__labelname" htmlFor="label">
            Enter Top Text:
          </label>
          <input className="meme_input" type="text" placeholder="Add a text" />

          <label className="meme__labelname" htmlFor="label">
            Enter Bottom Text:
          </label>
          <input className="meme_input" type="text" placeholder="Add a text" />
        </div>

        <div className="meme__button">
          <button className="meme__click">Generate Meme</button>
        </div>
      </form>
    </section>
  );
};

export default GenerateMeme;
