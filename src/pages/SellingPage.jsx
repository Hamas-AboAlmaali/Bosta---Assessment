import { useLanguageContext } from "../contexts/language-context"
import translate from "../utils/translateData";

const SellingPage = () => {
  const { preferedLanguage, setPreferedLanguage } = useLanguageContext();

  return (
    <h1 className="font-bold text-4xl mt-5 text-center">{translate('Call Sales', preferedLanguage)}</h1>
  )
}

export default SellingPage
