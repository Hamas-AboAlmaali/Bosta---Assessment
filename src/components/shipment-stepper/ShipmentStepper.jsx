import { useState, useEffect } from 'react'
import ShipmentStep from "./ShipmentStep"
import fetchShippingData from '../../apis/shipment.api'
import translate from '../../utils/translateData'
import { formatTimestampIntoDate, formatTimestampIntoTime, getDayName, getDayNumberInMonth, getMonthName, getYearNumber } from '../../utils/formatTimeStamp'
import { useLanguageContext } from "../../contexts/language-context"
import { Steps } from 'antd'

const ShipmentStepper = () => {
  const { preferedLanguage, setPreferedLanguage } = useLanguageContext();
  const [shipmentData, setShipmentData] = useState()

  useEffect(() => {
    async function getshipmentData() {
      const resData = await fetchShippingData('99995')
      setShipmentData(resData)
    }
    getshipmentData()
  }, [])

  return (
    <>
      <div className="p-5 my-20 mx-16 border-2 border-stone-300 rounded-lg">
        {shipmentData && (
          <div className="md:flex flex-row-reverse justify-between items-center my-3 text-right">
            <ShipmentStep title={`رقم الشحنة ${shipmentData.TrackingNumber}`} body={`${translate(shipmentData.CurrentStatus.state, preferedLanguage)}`} shipmentState={shipmentData.CurrentStatus.state} />
            <ShipmentStep title={`اخر تحديث`} body={`at ${formatTimestampIntoTime(shipmentData.CurrentStatus.timestamp)} ${formatTimestampIntoDate(shipmentData.CurrentStatus.timestamp)} ${translate(getDayName(shipmentData.CurrentStatus.timestamp), preferedLanguage)}`} />
            <ShipmentStep title={`اسم التاجر`} body={`SOUQ.COM`} />
            <ShipmentStep title={`موعد التسليم خلال`} body={`${getYearNumber(shipmentData.PromisedDate)} ${translate(getMonthName(shipmentData.PromisedDate), preferedLanguage)}  ${getDayNumberInMonth(shipmentData.PromisedDate)}`} />
          </div>
        )}
        <hr className="my-8" />
        {shipmentData && (
          <div className='my-3'>
            <Steps className='text-red-500'
              current={4}
              items={[
                {
                  title: 'تم إنشاء الشحنة',
                },
                {
                  title: 'تم إستلام الشحنة من التاجر',
                },
                {
                  title: 'الشحنة خرجت للتسليم',
                  description: `${shipmentData.CurrentStatus.state === 'DELIVERED_TO_SENDER' ? 'تم إلغاء الشحنة من التاجر' : ''}`
                },
                {
                  title: 'تم التسليم',
                },
              ]}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default ShipmentStepper
