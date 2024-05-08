const ChatArea = () => {
  return (
    <section className="chat">
      <header>
        <h3 className="notes__item" to="23">
          <span>MN</span>
          <span>My Notes</span>
        </h3>
      </header>
      <ul className="chat__area">
        <li className="chat__area--items">
          <p>
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day{"'"}s writing projects, words
            are already flowing from their fingers.
          </p>
          <p>
            <span>9 Mar 2023</span>
            <span>10:10 AM</span>
          </p>
        </li>
      </ul>
      <div className="chat__message">
        <form className="chat__message--textEditor__wrapper">
          <textarea placeholder="Enter your text here........"></textarea>
          <button type="submit">
            <img alt="send" src="/src/assets/images/send.png" />
          </button>
        </form>
      </div>
    </section>
  );
};
export default ChatArea;