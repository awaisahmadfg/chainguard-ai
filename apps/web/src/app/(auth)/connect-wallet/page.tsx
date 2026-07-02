import Link from "next/link";
import {
  WalletCoinbase,
  WalletMetamask,
  WalletWalletConnect,
} from "@web3icons/react";
import type { ReactNode } from "react";
import { AuthIcon } from "@/components/auth/auth-icons";

type WalletOptionProps = {
  icon: ReactNode;
  label: string;
};

function WalletOption({ icon, label }: WalletOptionProps) {
  return (
    <Link
      className="group flex w-full items-center justify-between rounded-lg border border-[#27272a] bg-[#131315] p-4 transition-colors hover:border-[#3f3f46] hover:bg-[#1c1b1d]"
      href="/wallet-signature"
    >
      <span className="flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-full border border-[#3c4a42] bg-[#353437] transition-colors group-hover:border-emerald-400">
          {icon}
        </span>
        <span className="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4] transition-colors group-hover:text-emerald-400">
          {label}
        </span>
      </span>
      <AuthIcon
        className="size-5 text-[#bbcabf] transition-colors group-hover:text-emerald-400"
        name="chevron-right"
      />
    </Link>
  );
}

export default function ConnectWalletPage() {
  return (
    <main className="w-full max-w-md">
      <div className="rounded-xl border border-[#27272a] bg-[#0c0c0e] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg border border-[#3c4a42] bg-[#2a2a2c] text-emerald-400">
            <AuthIcon className="size-7" name="shield" />
          </div>
          <h1 className="mb-1 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
            ChainGuard AI
          </h1>
          <p className="text-sm leading-5 text-[#bbcabf]">
            Enterprise Security Protocol
          </p>
        </div>

        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
            Connect Wallet
          </h2>
          <p className="text-sm leading-5 text-[#bbcabf]">
            Choose a wallet to verify your on-chain identity
          </p>
        </div>

        <div className="mb-6 space-y-3">
          <WalletOption
            icon={<WalletMetamask size={20} variant="branded" />}
            label="MetaMask"
          />
          <WalletOption
            icon={<WalletCoinbase size={20} variant="branded" />}
            label="Coinbase Wallet"
          />
          <WalletOption
            icon={<WalletWalletConnect size={20} variant="branded" />}
            label="WalletConnect"
          />
        </div>

        <div className="mb-6 flex items-start gap-2 rounded-md border border-[#3c4a42] bg-[#0e0e10] p-3">
          <AuthIcon className="mt-0.5 size-4 text-[#bbcabf]" name="info" />
          <p className="text-xs leading-5 text-[#bbcabf]">
            Signing a message verifies wallet ownership and does not cost gas
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#27272a] pt-6">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded border border-[#27272a] bg-transparent px-4 py-2.5 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4] transition-colors hover:border-[#3f3f46] hover:bg-[#131315]"
            href="/login"
          >
            <AuthIcon className="size-[18px]" name="mail" />
            Use Email Instead
          </Link>
          <button
            className="flex w-full items-center justify-center gap-2 rounded border border-[#27272a] bg-transparent px-4 py-2.5 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4] transition-colors hover:border-[#3f3f46] hover:bg-[#131315]"
            type="button"
          >
            <AuthIcon className="size-[18px]" name="login" />
            Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
}
