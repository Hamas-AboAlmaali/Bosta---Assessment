const ShipmentStep = ({ title, body, shipmentState }) => {
  return (
    <div className="sm:border-2 sm:rounded-lg sm:border-stone-300 sm:my-5 sm:p-4 md:border-hidden">
      <p className={`text-stone-400 font-bold text-lg my-1.5`}>{title}</p>
      <p className={`text-stone-900 font-bold text-xl ${shipmentState === 'DELIVERED' ? 'text-emerald-600' : shipmentState === 'DELIVERED_TO_SENDER' ? 'text-red-500' : ''}`}>{body}</p>
    </div>
  )
}

export default ShipmentStep