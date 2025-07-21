export default function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className="h-full w-full"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hamburger Menu</title>
      <g transform="matrix(1,0,0,1,12,12)">
        {/* Bottom line */}
        <g
          className="transition-all duration-300 ease-out"
          style={{
            transform: isOpen
              ? "matrix(1.5,0,0,1.5,0,0) rotate(45deg)"
              : "matrix(1,0,0,1,0,7)",
          }}
        >
          <path
            d="M-10,0.008 C-10,0.008 10,0 10,0"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>

        {/* Middle line */}
        <g
          className="transition-all duration-1000"
          style={{
            opacity: isOpen ? 0 : 1,
            transitionDelay: isOpen ? "0.1s" : "0.15s",
          }}
        >
          <path
            d="M-10,-0.023 C-10,-0.023 10,0 10,0"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeWidth="1.5"
            style={{
              transform: isOpen ? "translateX(-100%)" : "translateX(0)",
            }}
          />
        </g>

        {/* Top line */}
        <g
          className="transition-all duration-300 ease-out"
          style={{
            transform: isOpen
              ? "matrix(1.5,0,0,1.5,0,0) rotate(-45deg)"
              : "matrix(1,0,0,1,0,-7)",
          }}
        >
          <path
            d="M-10,0.008 C-10,0.008 10,0 10,0"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
}
