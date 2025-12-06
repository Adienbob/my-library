import { useState } from "react";
import { pdfLibrary } from "@/data/pdfData";
import PDFCard from "./PDFCard";

const PDFLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...new Set(pdfLibrary.map((pdf) => pdf.category))];

  // Filter PDFs by category
  const filteredPDFs =
    selectedCategory === "All"
      ? pdfLibrary
      : pdfLibrary.filter((pdf) => pdf.category === selectedCategory);

  return (
    <section id="library" className="pb-20 pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
            Document Library
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Browse our collection of documents and download the ones you need.
          </p>
        </div>

        {/* Category filters */}
        <div id="categories" className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PDF Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPDFs.map((pdf, index) => (
            <PDFCard key={pdf.id} pdf={pdf} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredPDFs.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              No documents found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PDFLibrary;
