"use client";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "./store";
import  Content  from "./content";

const Page = () => {
  return <Provider store={store}>
    <Content/>
  </Provider>;
};

export default Page;
