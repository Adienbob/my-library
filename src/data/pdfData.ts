export interface PDFItem {
  id: string;
  title: string;
  description: string;
  fileName: string;
  fileSize: string;
  category: string;
  thumbnail?: string;
}

// Add your PDFs to the public/pdfs folder and list them here
export const pdfLibrary: PDFItem[] = [
  {
    id: "1",
    title: "دليل البدء السريع",
    description: "مقدمة شاملة لمساعدتك في بدء رحلتك مع منصتنا.",
    fileName: "getting-started.pdf",
    fileSize: "2.4 ميجابايت",
    category: "التوثيق",
  },
  {
    id: "2",
    title: "دليل المستخدم 2024",
    description: "دليل المستخدم الكامل مع التعليمات التفصيلية وأفضل الممارسات.",
    fileName: "user-manual.pdf",
    fileSize: "5.1 ميجابايت",
    category: "الأدلة",
  },
  {
    id: "3",
    title: "مرجع واجهة البرمجة",
    description: "الوثائق التقنية للمطورين الذين يتكاملون مع خدماتنا.",
    fileName: "api-reference.pdf",
    fileSize: "3.8 ميجابايت",
    category: "تقني",
  },
  {
    id: "4",
    title: "ورقة بيضاء عن الأمان",
    description: "تحليل متعمق لبنية الأمان ومعايير الامتثال لدينا.",
    fileName: "security-whitepaper.pdf",
    fileSize: "1.9 ميجابايت",
    category: "الأمان",
  },
  {
    id: "5",
    title: "التقرير السنوي 2023",
    description: "البيانات المالية ونظرة عامة على أداء الشركة للسنة المالية.",
    fileName: "annual-report.pdf",
    fileSize: "8.2 ميجابايت",
    category: "التقارير",
  },
  {
    id: "6",
    title: "إرشادات العلامة التجارية",
    description: "أصول العلامة التجارية الرسمية واستخدام الشعار ومعايير الهوية البصرية.",
    fileName: "brand-guidelines.pdf",
    fileSize: "4.5 ميجابايت",
    category: "التصميم",
  },
];
