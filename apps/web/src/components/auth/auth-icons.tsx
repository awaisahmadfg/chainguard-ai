type AuthIconProps = {
  name:
    | "arrow-left"
    | "arrow-right"
    | "chevron-right"
    | "check-circle"
    | "eye"
    | "google"
    | "info"
    | "key"
    | "login"
    | "lock"
    | "mail"
    | "qr"
    | "refresh"
    | "signature"
    | "shield"
    | "user"
    | "wallet";
  className?: string;
};

export function AuthIcon({ name, className = "size-5" }: AuthIconProps) {
  if (name === "user") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M4.5 20a7.5 7.5 0 0 1 15 0"  
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 6h16v12H4V6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M7 10V8a5 5 0 0 1 10 0v2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6 10h12v10H6V10Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 14v2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "key") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M14.5 9.5a4 4 0 1 0-2.8 3.8L14 15.6V18h2.4l1.4 1.4H20v-2.2l-5.5-5.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M7.5 9.5h.01"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (name === "check-circle") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m8 12 2.5 2.5L16 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "refresh") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 12a8 8 0 0 1 13.4-5.9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M17.5 3.5v4h-4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M20 12a8 8 0 0 1-13.4 5.9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.5 20.5v-4h4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M16 12h4v4h-4a2 2 0 0 1 0-4Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6 7V5h10v2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "signature") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M6 3h8l4 4v14H6V3Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14 3v5h4"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.5 16.5c1.5-2 2.5-2 3 0 .4 1.6 1.4 1.6 3 0"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "eye") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "chevron-right") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="m9 18 6-6-6-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "info") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 10v6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M12 7h.01"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (name === "qr") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14 14h2v2h-2v-2Zm4 0h2v6h-6v-2h4v-4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "login") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M10 17H5V7h5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M13 16l4-4-4-4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M17 12H9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3Z"
          fill="#10b981"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M12 7v10"
          stroke="#020617"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M12 17c2.5-1.1 4-3.4 4-6V8.1L12 6.4V17Z"
          fill="#d1fae5"
        />
      </svg>
    );
  }

  if (name === "google") {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.2 3-7.2Z"
          fill="#4285F4"
        />
        <path
          d="M12 22c2.7 0 5-.9 6.6-2.5L15.4 17c-.9.6-2 .9-3.4.9a6 6 0 0 1-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"
          fill="#34A853"
        />
        <path
          d="M6.4 13.8A6 6 0 0 1 6 12c0-.6.1-1.2.4-1.8V7.6H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.4l3.3-2.6Z"
          fill="#FBBC05"
        />
        <path
          d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.7 9.7 0 0 0 12 2a10 10 0 0 0-8.9 5.6l3.3 2.6A6 6 0 0 1 12 6.1Z"
          fill="#EA4335"
        />
      </svg>
    );
  }

  if (name === "arrow-left") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path
          d="M19 12H5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m11 6-6 6 6 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
