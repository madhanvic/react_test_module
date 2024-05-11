//Images
import encryptedImg from "../assets/images/encrypt.png";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <img src="/src/assets/images/chat_empty_bg.png" alt="Background" />
        <h2>Pocket Notes</h2>
        <p>
          Send and receive messages without keeping your phone online.
          <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <footer>
        <p>
          <img src={encryptedImg} alt="encrypted" width={15} height={18} />
          <span>end-to-end encrypted</span>
        </p>
      </footer>
    </section>
  );
};

export default Home;
