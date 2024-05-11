import { Provider } from "react-redux";
import store from "./store/store";
import WebApp from "./WebApp";
import MobileApp from "./MobileApp";
import { useFindBreakPoint } from "./hook/useFindBreakPoint";

const App = () => {
  const screenWidth = useFindBreakPoint();
  const isWeb =
    screenWidth > 992
      ? window.innerWidth > 992
        ? true
        : false
      : window.innerWidth <= 992
      ? false
      : true;
  return (
    <Provider store={store}>{isWeb ? <WebApp /> : <MobileApp />}</Provider>
  );
};

export default App;
