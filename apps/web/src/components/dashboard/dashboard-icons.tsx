export type DashboardIconName =
  | "ai"
  | "arbitrum"
  | "base"
  | "bell"
  | "dashboard"
  | "download"
  | "ethereum"
  | "link"
  | "lock"
  | "menu"
  | "play"
  | "polygon"
  | "reports"
  | "review"
  | "risk"
  | "search"
  | "settings"
  | "shield"
  | "sparkle"
  | "upload"
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

  if (name === "shield") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3Z" />
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

  if (name === "search") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m21 21-4.3-4.3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "link") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "upload") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 16V4m0 0 4 4m-4-4-4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 4v9m0 0 4-4m-4 4-4-4M5 18h14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "play") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M8 5v14l11-7L8 5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6v-9Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M5 20a7 7 0 0 1 14 0"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "sparkle") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="m12 3 1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Zm7 9 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5ZM5 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "ethereum") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2v6.5l6 3.5-6-3.5V2Zm0 8.5 6 3.5-6 8.5V10.5ZM6 14l6-3.5V22L6 14Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "polygon") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="m12 3 9 6.5v7L12 21l3-4.5v-7L12 3Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "arbitrum") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M13 4 5 12h5l-1 8 8-8h-5l1-8Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "base") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M6 6h12v5H6V6Zm0 7h12v5H6v-5Z"
          stroke="currentColor"
          strokeLinejoin="round"
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
