import { frame } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center justify-center gap-2">
          <img src={frame} alt="Logo" className="w-10 object-contain" />
          <span className="font-satoshi self-end font-semibold desc mb-[0.40rem]">
            JUAD TEXT SUMZ
          </span>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Juadebfm/juadeb-text-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize article with <br className="max-md:hidden" />
        <span className="orange_gradient">OPEN AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify reading and reduce assimilation time with summarize, an
        open-source article summarizer that transforms lengthy articles into
        clear, concise and precise summaries.
      </h2>
    </header>
  );
};

export default Hero;
