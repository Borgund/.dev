import type { MetaFunction } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";

import styles from "../styles/apps.module.css";
import { Windowcontrols } from "~/components/windowcontrols";

export const meta: MetaFunction = () => {
  return [
    { title: "Borgund.dev, Adrian" },
    {
      name: "description",
      content: "My name is Adrian Borgund and i am a developer!",
    },
  ];
};

export default function AppsIndex() {
  const navigate = useNavigate();
  return (
    <>
      <main className={styles.app}>
        <Windowcontrols on_close={() => navigate("/")} />
        <Outlet />
      </main>
    </>
  );
}
