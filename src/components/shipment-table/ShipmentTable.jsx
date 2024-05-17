import { useState, useEffect } from 'react'
import ShipmentTableRow from "./ShipmentTableRow"
import AddressCard from '../address-card/AddressCard'
import ComplaintCard from '../complaint-card/ComplaintCard'
import fetchShippingData from '../../apis/shipment.api'
import translate from '../../utils/translateData'
import { formatTimestampIntoTime, formatTimestampIntoDate } from '../../utils/formatTimeStamp'
import { useLanguageContext } from "../../contexts/language-context"


const ShipmentTable = () => {
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
      <div className='p-5 w-full md:flex gap-5 flex-row-reverse justify-around mt-5 mb-10 text-xl text-right'>
        <div className='md:w-3/4 p-9'>
          <p className='my-5 font-bold'>تفاصيل الشحنة</p>
          {shipmentData && (
            <table className='w-full'>
              <thead>
                <tr>
                  <th>تفاصيل</th>
                  <th>الوقت</th>
                  <th>التاريخ</th>
                  <th width='20%'>الفرع</th>
                </tr>
              </thead>
              <tbody>
                {shipmentData.TransitEvents.map((step, index) => {
                  return (
                    <ShipmentTableRow
                      key={index}
                      details={translate(step.state, preferedLanguage)}
                      time={formatTimestampIntoTime(step.timestamp)}
                      date={formatTimestampIntoDate(step.timestamp)}
                      branch={step.hub}
                    />
                    // branch={'مدينة نصر'} key={index} />  // use this to make branch as a ststic data
                  )
                })}
              </tbody>
            </table>
          )}</div>
        <div className='md:w-3/12 p-9'>
          <p className='my-5 font-bold'>عنوان التسليم</p>
          <AddressCard address={'امباية شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٢٢'} />
          <ComplaintCard />
        </div>
      </div>
    </>
  )
}

export default ShipmentTable
