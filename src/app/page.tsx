"use client"

import { Award, HelpCircle, Sparkles, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="large"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Resources", id: "resources" },
            { name: "About", id: "about" }
          ]}
          brandName="FileExplorer Pro"
          bottomLeftText="Organize. Control. Optimize."
          bottomRightText="contact@fileexplorerpro.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Master Your Files with FileExplorer Pro"
          description="Experience the next generation of Windows file management. Lightning-fast navigation, intelligent organization, and powerful search capabilities—all designed for maximum productivity."
          background={{ variant: "plain" }}
          tag="Next-Gen File Management"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Download Free Trial", href: "#contact" },
            { text: "Watch Demo", href: "#features" }
          ]}
          buttonAnimation="blur-reveal"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-sleek-modern-windows-file-explorer-int-1773441324925-0d987b93.png",              imageAlt: "FileExplorer Pro interface showing organized file structure"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-secondary-file-explorer-view-showing-a-1773441326704-f097a64c.png",              imageAlt: "Advanced file management features and controls"
            }
          ]}
          mediaAnimation="blur-reveal"
          rating={5}
          ratingText="Trusted by 50,000+ professionals"
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-4"
          titleClassName="text-5xl md:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl"
          buttonContainerClassName="flex gap-4 mt-8"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Powerful Features Built for Speed"
          description="Discover what makes FileExplorer Pro the ultimate choice for professionals who demand more from their file management."
          tag="Core Features"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Lightning-Fast Navigation",              description: "Access files instantly with our optimized search engine. Find any file in milliseconds, not seconds.",              buttons: [{ text: "Learn More", href: "#" }],
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/an-app-interface-showing-lightning-fast--1773441324967-9834afe1.png",                imageAlt: "Speed optimization interface"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/an-organized-file-system-interface-showi-1773441325556-fa00e855.png",                imageAlt: "File organization system"
              }
            },
            {
              id: 2,
              title: "Smart Organization",              description: "Auto-categorize files by type, size, and date. Create custom tags and color-coded folders for perfect organization.",              buttons: [{ text: "Explore Features", href: "#" }],
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/an-organized-file-system-interface-showi-1773441325556-fa00e855.png",                imageAlt: "Smart organization features"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/an-app-interface-showing-lightning-fast--1773441324967-9834afe1.png",                imageAlt: "Quick access interface"
              }
            },
            {
              id: 3,
              title: "Advanced Security",              description: "Protect your files with encryption, secure deletion, and access controls. Your data stays safe and private.",              buttons: [{ text: "View Security", href: "#" }],
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/an-app-interface-showing-lightning-fast--1773441324967-9834afe1.png",                imageAlt: "Security features interface"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/an-organized-file-system-interface-showi-1773441325556-fa00e855.png",                imageAlt: "Protection controls"
              }
            }
          ]}
          showStepNumbers={true}
          animationType="blur-reveal"
          textboxLayout="split"
          useInvertedBackground={false}
          buttonAnimation="blur-reveal"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Choose Your Perfect Plan"
          description="FileExplorer Pro comes in multiple editions to suit your needs. Start free and upgrade anytime."
          tag="Plans & Pricing"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          products={[
            {
              id: "basic",              name: "Basic Edition",              price: "Free",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-comprehensive-view-of-the-fileexplorer-1773441325802-6e3be2bc.png",              imageAlt: "FileExplorer Pro Basic"
            },
            {
              id: "pro",              name: "Pro Edition",              price: "$29",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-comprehensive-view-of-the-fileexplorer-1773441325802-6e3be2bc.png",              imageAlt: "FileExplorer Pro Professional"
            },
            {
              id: "enterprise",              name: "Enterprise Edition",              price: "Custom",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-comprehensive-view-of-the-fileexplorer-1773441325802-6e3be2bc.png",              imageAlt: "FileExplorer Pro Enterprise"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="split"
          useInvertedBackground={false}
          buttons={[{ text: "Explore All Plans", href: "#pricing" }]}
          buttonAnimation="blur-reveal"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Millions"
          description="Join professionals worldwide who've revolutionized their file management with FileExplorer Pro."
          tag="Impact & Growth"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            { id: "users", value: "500K+", description: "Active Users Worldwide" },
            { id: "uptime", value: "99.9%", description: "System Uptime Guaranteed" },
            { id: "speed", value: "10x", description: "Faster Than Standard Explorer" },
            { id: "rating", value: "4.9/5", description: "Average User Rating" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          textboxLayout="split"
          useInvertedBackground={false}
          buttons={[{ text: "See Case Studies", href: "#" }]}
          buttonAnimation="blur-reveal"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="FileExplorer Pro has transformed how I manage my files. What used to take hours now takes minutes. The search functionality is incredibly fast, and the organization features are intuitive. I recommend it to every professional I meet."
          rating={5}
          author="Sarah Chen, IT Manager"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-professional-headshot-of-a-male-tech-p-1773441324073-b973d438.png",              alt: "Sarah Chen"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-professional-headshot-of-a-female-busi-1773441324307-d2ea0266.png",              alt: "Team member"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-professional-headshot-of-a-male-tech-i-1773441323854-f3c85a2b.png",              alt: "Team member"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AuSrhMzNUvBUMZl5vGVd6xtx0Y/a-professional-headshot-of-a-female-tech-1773441324197-26fa3c44.png",              alt: "Team member"
            }
          ]}
          ratingAnimation="blur-reveal"
          avatarsAnimation="blur-reveal"
          useInvertedBackground={false}
          className="w-full"
          containerClassName="max-w-2xl mx-auto px-4 py-12"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about FileExplorer Pro and how it can improve your file management workflow."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Is FileExplorer Pro compatible with Windows 10 and 11?",              content: "Yes, FileExplorer Pro works seamlessly with Windows 10 and Windows 11. It integrates directly with your system and doesn't require any special configuration. Simply install and start organizing!"
            },
            {
              id: "2",              title: "Can I sync my files across multiple computers?",              content: "Pro and Enterprise editions include cloud sync capabilities. You can access your organized file structure and settings across all your devices. The free Basic edition includes local file management only."
            },
            {
              id: "3",              title: "How does the search function work?",              content: "Our advanced search uses AI-powered indexing to find files by name, content, metadata, and custom tags. Most searches complete in under 100 milliseconds, even across large drives."
            },
            {
              id: "4",              title: "Is my data secure?",              content: "Absolutely. We use military-grade AES-256 encryption for sensitive files. All your data remains on your computer by default, with optional cloud backup through our secure servers."
            },
            {
              id: "5",              title: "Can I customize the interface?",              content: "Yes! FileExplorer Pro offers extensive customization options including themes, layout preferences, custom shortcuts, and personalized organization rules."
            },
            {
              id: "6",              title: "What's the difference between editions?",              content: "Basic is perfect for personal use with core features. Pro adds cloud sync, advanced search, and batch operations. Enterprise includes team features, priority support, and custom integrations."
            }
          ]}
          faqsAnimation="blur-reveal"
          textboxLayout="split"
          useInvertedBackground={false}
          buttons={[{ text: "Still Have Questions?", href: "#contact" }]}
          buttonAnimation="blur-reveal"
          containerClassName="max-w-4xl mx-auto px-4"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Transform Your File Management?"
          description="Join thousands of professionals who've already upgraded to FileExplorer Pro. Download free today—no credit card required."
          background={{ variant: "aurora" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Download Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. We'll send you download links and occasional product updates."
          className="w-full"
          containerClassName="max-w-2xl mx-auto px-4 py-16"
          contentClassName="text-center"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="FileExplorer Pro"
          columns={[
            {
              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Download", href: "#contact" }
              ]
            },
            {
              items: [
                { label: "Documentation", href: "#" },
                { label: "Support", href: "#" },
                { label: "Community", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-4 py-12"
          columnsClassName="grid grid-cols-3 gap-8 mt-8"
        />
      </div>
    </ThemeProvider>
  );
}