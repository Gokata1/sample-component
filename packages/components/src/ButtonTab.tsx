import React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonTabInterface {
  currentActiveIndex?: number;
  buttonLabels: {
    label1: string;
    label2: string;
  };
  tabs: {
    tab1: React.ReactNode;
    tab2: React.ReactNode;
  };
  currentTab?: React.ReactNode;
  buttonTabCallback: () => void;
}

const ButtonTab: React.FC<ButtonTabInterface> = ({
  currentActiveIndex,
  buttonLabels,
  buttonTabCallback,
  currentTab,
  tabs,
}) => {
  const [activeButtonIndex, setActiveButtonIndex] = React.useState<number>(
    currentActiveIndex ? currentActiveIndex : 0
  );

  const changeActiveButtonHandler = () => {
    if (activeButtonIndex === 0) {
      setActiveButtonIndex(1);
    } else if (activeButtonIndex === 1) {
      setActiveButtonIndex(0);
    }
    buttonTabCallback();
  };

  const activeButtonStylesLeft = "bg-black text-white font-bold rounded-l-full";
  const activeButtonStylesRight =
    "bg-black text-white font-bold rounded-r-full";
  const defaultButtonStyles = "flex justify-center w-full transition-all";

  return (
    <div id="button-tab-main-wrapper" className="flex flex-col w-full">
      <div
        id="buttons-wrapper"
        className="w-full flex justify-center border border-black rounded-full"
      >
        <button
          id="button-one"
          onClick={changeActiveButtonHandler}
          tabIndex={-1}
          className={twMerge(
            defaultButtonStyles,
            activeButtonIndex === 0 ? activeButtonStylesLeft : ""
          )}
        >
          {buttonLabels.label1}
        </button>
        <button
          id="button-two"
          onClick={changeActiveButtonHandler}
          tabIndex={-1}
          className={twMerge(
            defaultButtonStyles,
            activeButtonIndex === 1 ? activeButtonStylesRight : ""
          )}
        >
          {buttonLabels.label2}
        </button>
      </div>
      {/* {currentTab && currentTab} */}
      {activeButtonIndex === 0 ? tabs.tab1 : tabs.tab2}
    </div>
  );
};

export default ButtonTab;
