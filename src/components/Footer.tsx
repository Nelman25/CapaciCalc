export default function Footer() {
  return (
    <footer className="pt-8 mt-12 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          © 2025 Jonel Villaver. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Nelman25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jonel-villaver-70704a2b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
