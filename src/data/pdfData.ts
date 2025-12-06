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
    title: "Getting Started Guide",
    description: "A comprehensive introduction to help you begin your journey with our platform.",
    fileName: "getting-started.pdf",
    fileSize: "2.4 MB",
    category: "Documentation",
  },
  {
    id: "2",
    title: "User Manual 2024",
    description: "Complete user manual with detailed instructions and best practices.",
    fileName: "user-manual.pdf",
    fileSize: "5.1 MB",
    category: "Guides",
  },
  {
    id: "3",
    title: "API Reference",
    description: "Technical documentation for developers integrating with our services.",
    fileName: "api-reference.pdf",
    fileSize: "3.8 MB",
    category: "Technical",
  },
  {
    id: "4",
    title: "Security Whitepaper",
    description: "In-depth analysis of our security architecture and compliance standards.",
    fileName: "security-whitepaper.pdf",
    fileSize: "1.9 MB",
    category: "Security",
  },
  {
    id: "5",
    title: "Annual Report 2023",
    description: "Financial statements and company performance overview for the fiscal year.",
    fileName: "annual-report.pdf",
    fileSize: "8.2 MB",
    category: "Reports",
  },
  {
    id: "6",
    title: "Brand Guidelines",
    description: "Official brand assets, logo usage, and visual identity standards.",
    fileName: "brand-guidelines.pdf",
    fileSize: "4.5 MB",
    category: "Design",
  },
];
