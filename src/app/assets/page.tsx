"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function Page() {
  const { user } = useDynamicContext();
  const research_name = "research name";

  const value = "$XX";

  return (
    <div className=" flex justify-center items-center flex-col gap-2">
      <div className="w-[89%] justify-end flex" >
        <text className="text-2xl font-bold">{value}</text>
      </div>
      <div className="w-[94%] flex items-end justify-start" >
        <text className="text-2xl font-bold">My Research</text>
      </div>
      <div className="w-[96%] h-32 flex bg-teal-950 border-teal-800 border-2 rounded-xl justify-between items-center flex-row px-4 mb-2">
        <text className="text-4xl font-bold">{research_name}</text>
        <div className="flex gap-4">
          <button
            disabled
            className="bg-blue-950 border-blue-800 border-2 rounded-lg p-4">
            <text className="text-2xl font-bold">
              {value}
            </text>
          </button>
        </div>

      </div>
      <div className="w-[94%] flex items-end justify-start" >
        <text className="text-2xl font-bold">My Citations</text>
      </div>
      <div className="w-[96%] h-32 flex bg-teal-950 border-teal-800 border-2 rounded-xl justify-between items-center flex-row px-4 mb-2">
        <text className="text-4xl font-bold">{research_name}</text>
        <div className="flex gap-4">
          <button
            disabled
            className="bg-amber-950 border-amber-800 border-2 rounded-lg p-4">
            <text className="text-2xl font-bold">
              {value}
            </text>
          </button>
        </div>

      </div>
    </div>
  );
}
