import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import {
  IconSend,
  IconMail,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
  IconCircleCheck,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

// ─── Update these to your own details ────────────────────────────────────────
const INFO = {
  email: "dilmansha2001@gmail.com",
  location: "Matara, Sri Lanka",
  github: "https://github.com/DilumiGimansha",
  linkedin: "https://www.linkedin.com/in/dilumi-gimansha-karunarathna",
  mail: "mailto:dilmansha2001@gmail.com",
  facebook: "https://www.facebook.com/dilumi.gimansha",
};
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const emptyForm = { name: "", email: "", phone: "", message: "" };

  const [formData, setFormData] = useState<{ [key: string]: string }>(emptyForm);
  const [formError, setFormError] = useState<{ [key: string]: string }>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormError((prev) => ({ ...prev, [id]: validateForm(id, value) }));
  };

  const handleSubmit = async () => {
    let valid = true;
    const newFormError: { [key: string]: string } = {};

    for (const key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);

    if (!valid) {
      toast.error("Please fix the errors before sending.", { duration: 4000 });
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "portfolio"), formData);
      setFormData(emptyForm);
      setSubmitted(true);
      toast.success("Message sent! I'll get back to you soon.", { duration: 4000 });
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      toast.error("Something went wrong. Please try again.", { duration: 4000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const btnSize = useMatches({ xsm: "xs", sm: "sm", md: "md", lg: "lg" });

  return (
    <div
      className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono"
      id="Contact"
    >
      {/* Section heading */}
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>

      {/* Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="w-[82%] lg-mx:w-full m-auto flex md-mx:flex-col rounded-3xl overflow-hidden"
        style={{
          border: "1px solid #64FFDA35",
          boxShadow: "0 0 40px 0 #64FFDA18",
        }}
      >
        {/* ── LEFT: Info panel ─────────────────────────────────── */}
        <div
          className="w-[38%] md-mx:w-full flex flex-col gap-6 p-8 sm-mx:p-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #64FFDA12 0%, #64FFDA04 100%)",
            borderRight: "1px solid #64FFDA20",
          }}
        >
          {/* Dot-grid decoration */}
          <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
              backgroundImage: "radial-gradient(circle, #64FFDA 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              opacity: 0.055,
            }}
          />

          {/* Headline */}
          <div className="relative z-10">
            <span
              className="text-xs tracking-[0.18em] uppercase font-semibold"
              style={{ color: "#64FFDA" }}
            >
              Get in touch
            </span>
            <h2 className="text-2xl sm-mx:text-xl font-bold text-white mt-2 leading-snug">
              Got a project?
              <br />
              <span className="text-primaryColor">Let's make it happen.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Open to freelance work, collaborations, and full-time opportunities.
              Send a message and I'll reply within 24 hours.
            </p>
          </div>

          {/* Divider */}
          <div className="relative z-10" style={{ borderTop: "1px solid #64FFDA18" }} />

          {/* Contact details */}
          <div className="flex flex-col gap-3 relative z-10">
            {[
              { Icon: IconMail, label: "Email", value: INFO.email, href: `mailto:${INFO.email}` },
              { Icon: IconMapPin, label: "Based in", value: INFO.location },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3 group">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ border: "1px solid #64FFDA28", background: "#64FFDA0C" }}
                >
                  <Icon size={16} color="#64FFDA" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white text-sm transition-colors duration-200 hover:text-primaryColor"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative z-10" style={{ borderTop: "1px solid #64FFDA18" }} />

          {/* Social links */}
          <div className="flex gap-3 relative z-10">
            {[
              { Icon: IconBrandGithub, href: INFO.github, label: "GitHub" },
              { Icon: IconBrandLinkedin, href: INFO.linkedin, label: "LinkedIn" },
              { Icon: IconBrandGmail, href: INFO.mail, label: "Gmail" },
              { Icon: IconBrandFacebook, href: INFO.facebook, label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ border: "1px solid #64FFDA28", background: "#64FFDA0C" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#64FFDA22")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#64FFDA0C")
                }
              >
                <Icon size={17} color="#64FFDA" />
              </a>
            ))}
          </div>

          {/* Availability badge — pinned to bottom */}
          <div className="relative z-10 mt-auto">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-primaryColor"
              style={{ border: "1px solid #64FFDA30", background: "#64FFDA0D" }}
            >
              <span
                className="w-2 h-2 rounded-full bg-primaryColor animate-pulse"
              />
              Available for work
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form panel ────────────────────────────────── */}
        <div className="flex-1 flex flex-col gap-5 p-8 sm-mx:p-6">
          <div>
            <p className="text-white font-semibold text-lg">Send a message</p>
            <p className="text-gray-500 text-xs mt-0.5">All fields are required.</p>
          </div>

          {/* Name + Phone on the same row */}
          <div className="grid grid-cols-2 sm-mx:grid-cols-1 gap-4">
            <FloatingInput
              id="name"
              name="Name"
              value={formData.name}
              handleChange={handleChange}
              error={formError.name}
            />
            <FloatingInput
              id="phone"
              name="Phone Number"
              value={formData.phone}
              handleChange={handleChange}
              error={formError.phone}
            />
          </div>

          <FloatingInput
            id="email"
            name="Email"
            value={formData.email}
            handleChange={handleChange}
            error={formError.email}
          />
          <FloatingInput
            id="message"
            name="Message"
            value={formData.message}
            handleChange={handleChange}
            error={formError.message}
          />

          {/* Submit button */}
          <Button
            fullWidth
            onClick={handleSubmit}
            loading={isSubmitting}
            rightSection={
              submitted ? (
                <IconCircleCheck size={18} />
              ) : !isSubmitting ? (
                <IconSend size={17} />
              ) : undefined
            }
            className="!text-bgColor !font-bold !mt-1"
            variant="filled"
            size={btnSize}
            radius="lg"
            color={submitted ? "#52d9a4" : "#64FFDA"}
            disabled={isSubmitting}
          >
            {submitted ? "Message Sent!" : isSubmitting ? "Sending…" : "Send Message"}
          </Button>

          <p className="text-gray-600 text-xs text-center">
            Typical response time: within 24 hours · No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;