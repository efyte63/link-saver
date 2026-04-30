import type { ReactNode } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "lg" | "md" | "sm";
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // ✅ allow event
}

export const Button = (props: ButtonProps) => {
  let variantClass = "";
  let sizeClass = "";

  // --- Variant ---
  if (props.variant === "primary") {
    variantClass = "bg-blue-500 text-white hover:bg-blue-600";
  } else {
    variantClass = "bg-blue-300 text-black hover:bg-blue-400";
  }

  // --- Size ---
  if (props.size === "lg") sizeClass = "h-[50px] px-6";
  else if (props.size === "md") sizeClass = "h-[40px] px-4";
  else sizeClass = "h-[30px] px-2";

  return (
    <button
      className={`${sizeClass} ${variantClass} rounded flex items-center gap-2 transition`}
      onClick={props.onClick} // ✅ now can receive MouseEvent
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};

// --- Icon components ---
interface IconProps {
  size: "lg" | "md" | "sm";
}

const sizeMap: Record<IconProps["size"], string> = {
  lg: "w-8 h-8",
  md: "w-6 h-6",
  sm: "w-4 h-4",
};

export function Plusicon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={sizeMap[props.size]}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

export function Shareicon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={sizeMap[props.size]}
    >
      <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={sizeMap[props.size]}
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function DeleteIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={sizeMap[props.size]}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}


