import { FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
            <img src="/pdfs/hussien.jpg" alt="" className="rounded-md h-[50px] w-[40px]" />
          <span className="text-xl font-bold text-foreground">حسين وليد</span>
        </div>
        <nav className="hidden items-center gap-6 sm:flex">
          <a href="#library" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            المكتبة
          </a>
          <a href="#categories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            التصنيفات
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
