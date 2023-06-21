"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="m-4 font-bold ">
      <h2 className="text-xl font-bold mb-4">Error</h2>
      <p className="text-red-600 mb-10">{error.message}</p>
      <button
        className="px-2 py-1 text-white bg-blue-500 rounded-lg"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
