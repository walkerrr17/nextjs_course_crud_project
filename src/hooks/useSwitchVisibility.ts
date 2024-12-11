import { useState } from "react";

export default function useSwitchVisibility() {
  const [sectionVisibility, setSectionVisibility] = useState<"table" | "form">("form");

  const displayTable = () => setSectionVisibility("table");
  const displayForm = () => setSectionVisibility("form");

  return {
    formIsVisible: sectionVisibility === "form",
    tableIsVisible: sectionVisibility === "table",
    displayTable,
    displayForm
  }
}