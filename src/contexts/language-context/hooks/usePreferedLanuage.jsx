import { useState } from "react";

const usePreferedLanuage = () => {
  const [preferedLanguage, setPreferedLanguage] = useState('ar');
  return {
    preferedLanguage,
    setPreferedLanguage
  }
}

export default usePreferedLanuage;