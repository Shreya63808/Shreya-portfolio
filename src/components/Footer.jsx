export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0b0f19]/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {year} Shreya Mohanty. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Shreya63808"
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-mohanty-325563349?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/shreya060904?igsh=a3Q0NnlqNTg1Z3dp"
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
