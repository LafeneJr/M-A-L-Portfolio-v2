import { ContactHero } from "./components/ContactHero";
import { ContactForm } from "./components/ContactForm";
import { ContactMethods } from "./components/ContactMethods";
import { ContactCTA } from "./components/ContactCTA";


export const ContactSection = () => {
  return (
    <section      
      className="
        relative   
        overflow-hidden             
      "
    >
      <div
        className="            
          mx-auto

          px-6
          md:ml-20
          lg:ml-18
          xl:px-15
        "
      >        
        {/* HERO + FORM */}
        
        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-2

            gap-5            
                        
          "
        >
          <ContactHero />

          <ContactForm />
        </div>                   
                 
          {/* Contact Info */}

          <div
            className="
              mt-8                           
            "
          >
            {/* ContactMethods goes here */}
            <ContactMethods />
                                    
          </div>        
        
        {/* FINAL CTA */}
        
        <div className="mt-10">
          <ContactCTA />
        </div>
      </div>
    </section>
  );
};