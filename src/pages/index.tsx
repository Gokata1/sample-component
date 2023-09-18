import { Inter } from "next/font/google";
import React from "react";
import { ButtonTab, ExportTab, ImportTab } from "../../packages/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const buttonLabels = {
    label1: "Export",
    label2: "Import",
  };

  const [currentTab, setCurrentTab] = React.useState("export");

  const setCurrentTabHandler = () => {
    if (currentTab === "export") {
      setCurrentTab("import");
    } else if (currentTab === "import") {
      setCurrentTab("export");
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <ButtonTab
        buttonLabels={buttonLabels}
        buttonTabCallback={setCurrentTabHandler}
        currentTab={currentTab === "export" ? <ExportTab /> : <ImportTab />}
        tabs={{
          tab1: <ExportTab />,
          tab2: <ImportTab />,
        }}
      />
    </main>
  );
}
