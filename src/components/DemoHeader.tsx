
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoHeader = () => {
  const scrollToFirstSection = () => {
    const section = document.getElementById('section-1');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative bg-gradient-to-br from-brand-50 to-white">
      <div className="container max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Experience the Power of <span className="text-brand-600">Customization</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl">
          An Interactive Order Management Demo
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl">
          Discover how our tailored software solutions can revolutionize your operations. 
          This Order Management System is just one example of what we can build for your unique business needs. 
          All data in this demo is for illustrative purposes and will reset when you refresh the page.
        </p>
        
        <Button 
          onClick={scrollToFirstSection}
          className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-6 rounded-lg text-lg"
        >
          Start the Interactive Demo
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce-down">
        <ChevronDown size={36} className="text-brand-500" onClick={scrollToFirstSection} />
      </div>
    </section>
  );
};

export default DemoHeader;
