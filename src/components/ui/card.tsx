export const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-[#011a18] rounded-xl border border-[#00262340] dark:border-[#b9a77940] shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);