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
    title: "الشريعة الاسلامية",
    description: "امتحان المواريث و الوصايا الخاص بالميدتيرم",
    fileName: "الشريعة الاسلامية.pdf",
    fileSize: "2.4 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "2",
    title: "القانون التجارى",
    description: "امتحان القانون التجارى الخاص بالميدتيرم",
    fileName: "القانون التجارى.pdf",
    fileSize: "5.1 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "3",
    title: "القانون الجنائى",
    description: "امتحان القانون الجنائى جرائم الاعتداء على الاشخاص",
    fileName: "القانون الجنائى جرائم الاعتداء على الاشخاص.pdf",
    fileSize: "3.8 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "4",
    title: "القانون الجنائى",
    description: "امتحان القانون الجنائى جرائم الاعتداء على الاموال الخاص بالميدتيرم",
    fileName: "القانون الجنائى جرائم الاعتداء على الاموال.pdf",
    fileSize: "1.9 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "5",
    title: "القانون الجنائى",
    description: "امتحان القانون الجنائى جرائم الاعتداء على المصلحة العامة الخاص بالميدتيرم",
    fileName: "القانون الجنائى جرائم الاعتداء على المصلحة العامة.pdf",
    fileSize: "8.2 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "6",
    title: "القانون الدولى الخاص ( الجنسية )",
    description: "أصول العلامة التجارية الرسمية واستخدام الشعار ومعايير الهوية البصرية.",
    fileName: "القانون الدولى الخاص ( الجنسية ).pdf",
    fileSize: "4.5 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "7",
    title: "القانون الدولى الخاص",
    description: "امتحان القانون الدولى الخاص مركز الاجانب الخاص بالميدتيرم",
    fileName: "القانون الدولى الخاص مركز الاجانب.pdf",
    fileSize: "4.5 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "8",
    title: "القانون المالى",
    description: "امتحان القانون المالى الخاص بالميدتيرم",
    fileName: "القانون المالى.pdf",
    fileSize: "4.5 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "9",
    title: "القانون المدنى العقود",
    description: "امتحان القانون المدنى العقود الخاص بالميدتيرم",
    fileName: "القانون المدنى العقود.pdf",
    fileSize: "4.5 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "10",
    title: "قانون المرافعات",
    description: "امتحان قانون المرافعات التنظيم القضائى الخاص بالميدتيرم",
    fileName: "قانون المرافعات التنظيم القضائى.pdf",
    fileSize: "4.5 ميجابايت",
    category: "ميدتيرم",
  },
  {
    id: "11",
    title: "قانون المراعات",
    description: "امتحان قانون المرافعات التنظيم الاختصاصى الخاص بالميدتيرم",
    fileName: "قانون المرافعات التنظيم و الاختصاص.pdf",
    fileSize: "4.5 ميجابايت",
    category: "ميدتيرم",
  },
];
