import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PDFItem } from "@/data/pdfData";

interface PDFCardProps {
  pdf: PDFItem;
  index: number;
}

const PDFCard = ({ pdf, index }: PDFCardProps) => {
  const handleDownload = () => {
    // Create download link - PDFs should be in public/pdfs folder
    const link = document.createElement("a");
    link.href = `/pdfs/${pdf.fileName}`;
    link.download = pdf.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article
      className="animate-fade-up group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Category badge */}
      <div className="mb-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
        {pdf.category}
      </div>

      {/* PDF Icon/Thumbnail */}
      <div className="mb-5 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-colors group-hover:from-primary/15 group-hover:to-primary/10">
        <div className="flex h-16 w-14 items-center justify-center rounded-lg bg-primary/10 transition-transform group-hover:scale-110">
          <FileText className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
          {pdf.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {pdf.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-muted-foreground">
            {pdf.fileSize}
          </span>
          <Button
            variant="download"
            size="sm"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            تحميل
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PDFCard;
