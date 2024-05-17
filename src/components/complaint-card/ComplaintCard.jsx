import complaintLogo from '../../assets/problem.svg'

const ComplaintCard = () => {
  return (
    <div className='flex justify-between items-center border-2 border-stone-300 rounded-lg p-5'>
      <div >
        <p className='text-base font-bold px-5 my-5'>هل يوجد مشكلة في شحنتك ؟!</p>
        <button className='w-60 border-2 bg-red-600 p-3 text-stone-100 rounded-3xl'>إبلاغ عن مشكلة</button>
      </div>
      <div className='w-2/6'>
        <img src={complaintLogo} alt="هل يوكد مشكلة في شحنتك" className='h-36' />
      </div>
    </div>
  )
}

export default ComplaintCard
