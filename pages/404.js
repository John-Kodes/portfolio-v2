import { useEffect } from "react";
import Router from "next/router";

const NotFoundPage = () => {
  useEffect(() => Router.push("/"), []);

  return <div></div>;
};

export default NotFoundPage;
