// Central content store. Keeping copy and links here (separate from UI
// components) makes it easy to update text without touching markup.

export const profile = {
  name: "Aslam Pathan",
  pronouns: "He/Him",
  primaryTitle: "Web & API Security Researcher",
  tagline: "Bug Bounty Hunter • Responsible Disclosure • TryHackMe Top 1% • CTF Enthusiast",
  shortIdentity: "Bug Bounty Hunter & Web/API Security Researcher",
  heroDescription:
    "Security researcher focused on discovering, validating, and responsibly disclosing vulnerabilities across modern web applications and APIs.",
  aboutShort:
    "Aslam Pathan is a Bug Bounty Hunter and Web & API Security Researcher who identifies security vulnerabilities and helps organizations strengthen their defenses through responsible disclosure — with a Top 1% TryHackMe ranking earned through consistent, hands-on practice.",
  aboutLong:
    "Aslam Pathan is a Bug Bounty Hunter and Web & API Security Researcher, passionate about identifying security vulnerabilities and helping organizations strengthen their security through responsible disclosure. His primary areas of focus are web application security, API security testing, and bug bounty hunting, alongside an active, hands-on introduction to AI security and offensive security more broadly. He builds his skills through practical labs and real-world research on platforms such as TryHackMe, Hack The Box, Bugcrowd, HackerOne, and Com Olho — work that has earned him a Top 1% ranking on TryHackMe, several responsible disclosure submissions, and public recognition from organizations for valid security findings. For Aslam, security research is about continuous learning, practical experience, and responsible practice: finding real issues, validating their impact safely, and giving organizations the room to fix them before they can be abused. He is always open to connecting with fellow security researchers, bug bounty hunters, recruiters, and cybersecurity professionals.",
  links: {
    linkedin: "https://www.linkedin.com/in/aslam-pathan/",
    youtube: "https://youtube.com/@pathanaslam1280?si=q5htlVMRd8xL7Vv4",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Security Focus", href: "#focus" },
  { label: "Hall of Fame", href: "#hall-of-fame" },
  { label: "Contact", href: "#contact" },
];

export const statusItems = [
  "Web Security",
  "API Security",
  "Bug Bounty",
  "Responsible Disclosure",
  "Offensive Security",
  "AI Security — Learning",
];

export const achievement = {
  value: "Top 1%",
  label: "TryHackMe Ranking",
  description:
    "Achieved a Top 1% ranking through hands-on cybersecurity labs and continuous practice.",
};

export const hallOfFame = [
  {
    org: "HelloAeterna",
    href: "https://helloaeterna.com/vdp/pathan-aslam",
    cta: "View Recognition",
    note: "Vulnerability Disclosure Program",
  },
  {
    org: "PESCHECK",
    href: "https://pescheck.io/responsible-disclosure-hall-of-fame/",
    cta: "View Hall of Fame",
    note: "Responsible Disclosure Hall of Fame",
  },
  {
    org: "TrekMail",
    href: "https://trekmail.net/security/hall-of-fame",
    cta: "View Hall of Fame",
    note: "Security Hall of Fame",
  },
  {
    org: "TATA Motors",
    href: "https://cyber.comolho.com/verify-certificate/006b2509-fb80-4d7a-bc8f-76c84075b64c/",
    cta: "View Certificate",
    note: "Security Recognition",
  },
  {
    org: "HDFC",
    href: "https://cyber.comolho.com/verify-certificate/2c29881c-f302-40f3-b7c2-fffe050aea63/",
    cta: "View Certificate",
    note: "Security Recognition",
  },
  {
    org: "ixigo",
    href: "https://cyber.comolho.com/verify-certificate/d7f59aec-6322-4aad-ab12-f6b90cf8339c/",
    cta: "View Certificate",
    note: "Security Recognition",
  },
  {
    org: "Max Insurance",
    href: "https://cyber.comolho.com/verify-certificate/be32baa2-3fe9-4812-8839-c9d0b6c750f8/",
    cta: "View Certificate",
    note: "Security Recognition",
  },
  {
    org: "ClearTax",
    href: "https://cyber.comolho.com/verify-certificate/f5b6c157-cb20-4513-874c-4dba76219048/",
    cta: "View Certificate",
    note: "Security Recognition",
  },
];

export const arsenal = {
  Languages: ["Python", "Bash", "JavaScript", "C / C++", "Java", "HTML"],
  "Security Tools": [
    "Burp Suite",
    "Wireshark",
    "Nmap",
    "Metasploit",
    "httpx",
    "SQLmap",
    "Nuclei",
    "Postman",
    "FFUF",
  ],
  "Operating Systems": ["Kali Linux", "Parrot OS", "Ubuntu"],
  Specializations: [
    "Web Application Security",
    "Reconnaissance",
    "OWASP Top 10",
    "SQL Injection",
    "XSS",
    "IDOR",
    "SSRF",
    "LFI / RFI",
    "XXE",
    "Open Redirect",
    "API Security",
    "JWT",
  ],
  "Other Tools": ["Git", "Docker", "Linux", "CDX Analysis", "OSINT"],
};

export const securityFocus = [
  {
    title: "Web Application Security",
    description:
      "Finding vulnerabilities in modern web applications and understanding application security weaknesses.",
  },
  {
    title: "API Security",
    description:
      "Testing APIs for authentication, authorization, access control, input validation, and business logic weaknesses.",
  },
  {
    title: "Bug Bounty",
    description:
      "Real-world vulnerability research through responsible disclosure and security programs.",
  },
  {
    title: "Offensive Security",
    description:
      "Hands-on security testing, reconnaissance, exploitation concepts, and practical security research.",
  },
  {
    title: "AI Security",
    description:
      "Currently learning and exploring security challenges around AI systems and applications.",
  },
];

export const methodology = [
  "Reconnaissance",
  "Attack Surface Discovery",
  "Enumeration",
  "Manual Testing",
  "Vulnerability Validation",
  "Impact Analysis",
  "Responsible Disclosure",
];

export const platforms = [
  { name: "TryHackMe", note: "Top 1% ranking" },
  { name: "Hack The Box", note: "Hands-on practice" },
  { name: "HackerOne", note: "Vulnerability research" },
  { name: "Bugcrowd", note: "Bug bounty programs" },
  { name: "Com Olho", note: "Security research" },
];
