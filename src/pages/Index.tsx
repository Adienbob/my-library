import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PDFLibrary from "@/components/PDFLibrary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PDFLibrary />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
