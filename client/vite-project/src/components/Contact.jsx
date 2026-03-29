const contactLinks = [
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    className: "hover:text-blue-300",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.21-.25 7.27 5.54a.85.85 0 0 0 1.03 0l7.28-5.54H4.21Zm15.79 1.88-6.46 4.93a2.85 2.85 0 0 1-3.46 0L4 8.38v8.87c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V8.38Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    className: "hover:text-blue-300",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.56 9.75h2.77V18H5.56V9.75Zm4.5 0h2.66v1.13h.04c.37-.7 1.28-1.43 2.63-1.43 2.81 0 3.33 1.85 3.33 4.26V18h-2.77v-3.8c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01V18h-2.76V9.75Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/chaitanyamali1710",
    className: "hover:text-blue-300",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M12 .75A11.25 11.25 0 0 0 .75 12a11.25 11.25 0 0 0 7.6 10.67c.56.1.76-.24.76-.54v-1.89c-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.11.08 1.69 1.13 1.69 1.13.98 1.69 2.58 1.2 3.2.91.1-.71.39-1.2.7-1.47-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.43-2.22 1.14-3-.12-.28-.5-1.43.1-2.98 0 0 .93-.3 3.04 1.15a10.5 10.5 0 0 1 5.53 0c2.1-1.45 3.03-1.15 3.03-1.15.61 1.55.23 2.7.11 2.98.7.78 1.14 1.78 1.14 3 0 4.3-2.6 5.23-5.08 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.25 11.25 0 0 0 23.25 12 11.25 11.25 0 0 0 12 .75Z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-black px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="mb-8 text-4xl font-bold tracking-tight text-slate-100">
          Contact Me
        </h2>

        <div className="mb-8 flex items-center justify-center gap-6 text-blue-600">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              className={`transition duration-300 hover:-translate-y-1 ${link.className}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="mb-8 h-px w-full max-w-3xl bg-gray-800" />

        <div className="w-full max-w-3xl rounded-[2rem] border border-gray-800 bg-gray-900/70 px-6 py-6 text-center text-lg text-gray-300 shadow-lg">
          Chaitanya Mali | Portfolio
        </div>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-blue-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 3.99a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.41l2.3 2.3V4a1 1 0 0 1 1-1Zm-7 13a1 1 0 0 1 1 1v1.25c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V17a1 1 0 1 1 2 0v1.25A2.75 2.75 0 0 1 17.25 21H6.75A2.75 2.75 0 0 1 4 18.25V17a1 1 0 0 1 1-1Z" />
        </svg>
        Resume
      </a>
    </section>
  );
};

export default Contact;
