import { Link } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="mt-auto border-t border-gray-200 p-4 text-center text-xs text-gray-500">
          <div className="flex items-center justify-center space-x-4">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/support" className="hover:underline">
              Support
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Footer