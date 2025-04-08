import { Link } from "react-router-dom";
import { Calculator, MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 p-2 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center space-x-6 text-sm text-gray-700">
        <Link to="/" className="flex items-center space-x-1 hover:text-black">
          <Calculator size={16} />
          <span>Calculator</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-1 hover:text-black">
          <MessageSquare size={16} />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
} 