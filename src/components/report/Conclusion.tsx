import React from 'react'

const Conclusion = ({ color, content }: { color: string; content: string }) => {
  return (
    <div className="flex flex-col p-4 gap-2">
      {/* Conclusion Title with Hex Color */}
      <h1 style={{ color }} className="text-xl font-bold">
        Conclusion
      </h1>

      {/* Content with Background Color & White Text */}
      <div style={{ backgroundColor: color }} className="p-2 text-white rounded-lg">
        {content}
      </div>
    </div>
  )
}

export default Conclusion
