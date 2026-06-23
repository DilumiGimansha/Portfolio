// ─── Add this to your existing User.ts file ───────────────────────────────────
// (alongside your existing ProjectInfo export)

export const CertificateInfo = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        image: "/certificates/aws-saa.png",          // path to your certificate image
        date: "Dec 2024",
        credentialId: "AWS-SAA-C03-XXXXXXXX",
        skills: ["AWS", "Cloud", "Architecture"],
        link: "https://www.credly.com/your-badge-link",
    },
    {
        title: "React - The Complete Guide",
        issuer: "Udemy",
        image: "/certificates/react-complete.png",
        date: "Sep 2024",
        credentialId: "UC-XXXXXXXXXXXXXXXX",
        skills: ["React", "JavaScript", "Redux"],
        link: "https://udemy.com/certificate/your-id",
    },
    {
        title: "Meta Front-End Developer",
        issuer: "Coursera / Meta",
        image: "/certificates/meta-frontend.png",
        date: "Jun 2024",
        credentialId: undefined,                      // omit if no credential ID
        skills: ["React", "CSS", "UX Design"],
        link: "https://coursera.org/verify/your-id",
    },
];
