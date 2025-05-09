
import { OrderProvider } from '@/contexts/OrderContext';
import Header from '@/components/Header';
import DemoHeader from '@/components/DemoHeader';
import OrderProcessingSection from '@/components/OrderProcessingSection';
import InventorySection from '@/components/InventorySection';
import FulfillmentSection from '@/components/FulfillmentSection';
import CustomerSection from '@/components/CustomerSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import CustomizationSection from '@/components/CustomizationSection';

const Index = () => {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main>
          <DemoHeader />
          <div className="container mx-auto px-4">
            <OrderProcessingSection />
            <InventorySection />
            <FulfillmentSection />
            <CustomerSection />
            <AnalyticsSection />
            <CustomizationSection />
          </div>
        </main>
        
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Custom Software Solutions. All rights reserved.</p>
            <p className="text-gray-400 mt-2 text-sm">
              This interactive demo is for illustration purposes only.
            </p>
          </div>
        </footer>
      </div>
    </OrderProvider>
  );
};

export default Index;
