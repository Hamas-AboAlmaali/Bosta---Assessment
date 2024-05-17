const dictionary = {
  "Home": {
    ar: 'الصفحة الرئيسية',
    en: "Home"
  },
  "Prices": {
    ar: 'الأسعار',
    en: "Prices"
  },
  "Call Sales": {
    ar: 'كلم المبيعات',
    en: "Call Sales"
  },
  "Shipment Tracking": {
    ar: 'تتبع شحنتك',
    en: "Track Your Shipment"
  },
  "Login": {
    ar: 'تسجيل الدخول',
    en: "Login"
  },
  "TICKET_CREATED": {
    ar: 'تم إنشاء الشحنة',
    en: "TICKET_CREATED"
  },
  "PACKAGE_RECEIVED": {
    ar: 'تم إستلام الشحنة من التاجر',
    en: "PACKAGE_RECEIVED"
  },
  "OUT_FOR_DELIVERY": {
    ar: 'الشحنة خرجت للتسليم',
    en: "OUT_FOR_DELIVERY"
  },
  "DELIVERED": {
    ar: 'تم التوصيل',
    en: "DELIVERED"
  },
  "IN_TRANSIT": {
    ar: 'الشحنة في الإنتظار',
    en: "IN_TRANSIT"
  },
  "DELIVERED_TO_SENDER": {
    ar: 'تم إلغاء الشحنة',
    en: "DELIVERED_TO_SENDER"
  },
  "Saturday": {
    ar: 'السبت',
    en: "Saturday"
  },
  "Sunday": {
    ar: 'الأحد',
    en: "Sunday"
  },
  "Monday": {
    ar: 'الأثنين',
    en: "Monday"
  },
  "Tuesday": {
    ar: 'الثلاثاء',
    en: "Tuesday"
  },
  "Wednesday": {
    ar: 'الأربعاء',
    en: "Wednesday"
  },
  "Thursday": {
    ar: 'الخميس',
    en: "Thursday"
  },
  "Friday": {
    ar: 'الجمعة',
    en: "Friday"
  },
  "September": {
    ar: 'سبتمبر',
    en: "September"
  },

  // ... rest of the months.
};

export default function translate(englishTerm, local = 'ar') {
  return dictionary[englishTerm][local] || englishTerm;
}