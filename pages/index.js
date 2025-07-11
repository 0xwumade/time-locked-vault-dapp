import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'

export default function Home() {
  const { address, isConnected } = useAccount()
  const [owner, setOwner] = useState(null)
  const [unlockTime, setUnlockTime] = useState(null)
  const [isLocked, setIsLocked] = useState(true)

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-8 text-center border border-yellow-400">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          🔒 Time-locked Vault
        </h1>

        <div className="mb-6">
          <ConnectButton showBalance={false} />
        </div>

        {isConnected ? (
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-yellow-400">
                Vault Info
              </h2>
              <p className="text-sm mt-2">
                <span className="font-medium text-yellow-300">Owner:</span>{' '}
                {owner ?? <span className="italic text-gray-400">Loading…</span>}
              </p>
              <p className="text-sm">
                <span className="font-medium text-yellow-300">Unlock Time:</span>{' '}
                {unlockTime ?? <span className="italic text-gray-400">Loading…</span>}
              </p>
              <p className="text-sm">
                <span className="font-medium text-yellow-300">Status:</span>{' '}
                {isLocked ? (
                  <span className="text-red-400">🔒 Locked</span>
                ) : (
                  <span className="text-green-400">🔓 Unlocked</span>
                )}
              </p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-yellow-400">
                Your Account
              </h2>
              <p className="text-sm mt-2">
                <span className="font-medium text-yellow-300">Address:</span> {address}
              </p>
              <p className="text-sm">
                <span className="font-medium text-yellow-300">You are the Owner:</span>{' '}
                {address?.toLowerCase() === owner?.toLowerCase() ? (
                  <span className="text-green-400">✅ Yes</span>
                ) : (
                  <span className="text-red-400">❌ No</span>
                )}
              </p>
            </div>
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-400">
            Please connect your wallet to see vault info.
          </p>
        )}
      </div>
    </main>
  )
}
