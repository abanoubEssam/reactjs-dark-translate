import i18n from "i18next";
import React, { FunctionComponent } from "react";
import { withTranslation } from "react-i18next";

interface TranslateComponentProps {
    t: Function
}

const TranslateComponent: FunctionComponent<TranslateComponentProps> = ({
  t,
}) => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("ar")}>ar</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <h2>{t("welcome")}</h2>
    </div>
  );
};

export default withTranslation()(TranslateComponent);
