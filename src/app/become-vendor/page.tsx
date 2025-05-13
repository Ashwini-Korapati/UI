
import { VendorForm } from '@/components/forms/vendor-form'; // Import the form component

export default function BecomeVendorPage() {
  return (
    <>
      {/* Page Header - Full Width */}
      <section className="py-12 md:py-20 bg-secondary text-center px-4 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto w-full"> {/* Added max-width and w-full */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Become a Vendor</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Join our network of trusted professionals! Fill out the form below to partner with Events Unlimited and reach new clients.
          </p>
        </div>
      </section>

      {/* Vendor Form Section - Full Width */}
      <section className="py-16 md:py-24 bg-background px-4 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto w-full"> {/* Kept max-width for centered content and w-full */}
           <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-border">
             <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">Vendor Application Form</h2>
             <VendorForm />
          </div>
        </div>
      </section>
    </>
  );
}

