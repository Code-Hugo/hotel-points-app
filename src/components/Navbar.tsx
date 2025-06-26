import { Link } from "react-router-dom";
import { Calculator, MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700 py-3">
      <div className="max-w-6xl mx-auto flex items-center space-x-6 text-sm font-medium text-slate-700 dark:text-slate-200">
        <Link
          to="/"
          className="flex items-center space-x-1 hover:text-indigo-600 transition-colors"
        >
          <Calculator size={16} />
          <span>Calculator</span>
        </Link>
        <Link
          to="/contact"
          className="flex items-center space-x-1 hover:text-indigo-600 transition-colors"
        >
          <MessageSquare size={16} />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
}
