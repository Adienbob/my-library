import { FileText, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FileText className="h-4 w-4" />
            </div>
            <span className="font-semibold text-foreground">خزينة المستندات</span>
          </div>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            صُنع بـ <Heart className="h-4 w-4 text-primary" /> لسهولة الوصول إلى المستندات
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
