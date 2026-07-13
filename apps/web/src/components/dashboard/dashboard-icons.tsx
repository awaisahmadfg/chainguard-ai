export type DashboardIconName =
  | "ai"
  | "bell"
  | "dashboard"
  | "menu"
  | "reports"
  | "review"
  | "risk"
  | "settings"
  | "user"
  | "wallet";

type DashboardIconProps = {
  className?: string;
  name: DashboardIconName;
};

export function DashboardIcon({
  className = "size-5",
  name,
}: DashboardIconProps) {
  if (name === "menu") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "dashboard") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "review") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m9 12 2 2 4-5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "reports") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M5 4h14v16H5V4Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8 16v-4m4 4V8m4 8v-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M7 9h10v8H7V9Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9 9V6m6 3V6M9 17v2m6-2v2M5 12H3m18 0h-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M10 13h.01M14 13h.01"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (name === "risk") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="m12 4 9 16H3L12 4Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 10v4m0 3h.01"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M19.4 15a8 8 0 0 0 .1-1l2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L15 6.5h-6L8.6 9a8 8 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a8 8 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a8 8 0 0 0 1.7 1l.4 2.5h6l.4-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5a8 8 0 0 0-.1-1Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 7h16v12H4V7Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M16 12h4v4h-4a2 2 0 0 1 0-4Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10 21h4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4.5 20a7.5 7.5 0 0 1 15 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}
