import routes from "./routesConfig";

import AppContext from "../AppContext";

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => (
    <AppContext.Provider
      value={{
        routes,
      }}
    >
      <Component {...props} />
    </AppContext.Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
