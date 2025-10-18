import { useState } from "react";
import {
  CoffeeIcon,
  HeartIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  SendIcon,
  CheckIcon,
  ArrowUpIcon,
} from "lucide-react";
import { Notification } from "./Notification";
import emailjs from "@emailjs/browser";
import { Connect } from "./Contact";

export function Footer() {
  const [email, setEmail] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const serviceId = "service_xvi56ik"; // Replace with your EmailJS service ID
      const templateId = "template_thgp5cs"; // Replace with your EmailJS template ID
      const publicKey = "zO3Ha5PPnbeLCPgAg"; // Replace with your EmailJS public key

      // Template parameters for the email
      const templateParams = {
        from_email: email,
        to_email: "areejrazzaq00@gmail.com",
        recipients: "areejrazzaq00@gmail.com",
        message: ``,
        reply_to: email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Update UI state
      setSubmittedEmail(email);
      setShowNotification(true);
      setIsSent(true);
      setEmail("");

      // Reset sent state after 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Still show notification even if email fails
      setSubmittedEmail(email);
      setShowNotification(true);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <footer
      id="connect"
      className="bg-primary text-primary-foreground pb-8 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <Connect />
        {/* Footer bottom */}
        <div className="mt-0 pt-8 border-t border-accent border-opacity-30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <CoffeeIcon size={20} className="text-accent" />
              <p className="text-accent">
                I'll be there for you (in your coding journey)
              </p>
            </div>
            <p className="text-sm text-accent flex items-center">
              Made with{" "}
              <HeartIcon size={14} className="mx-1 text-accent animate-pulse" />{" "}
              and a lot of coffee
            </p>
          </div>
        </div>
      </div>

      <Notification
        isVisible={showNotification}
        onClose={handleCloseNotification}
        email={submittedEmail}
      />
    </footer>
  );
}
