import React, { FC, PropsWithChildren, useState, useEffect } from "react";

export const SearchLayout: FC<PropsWithChildren> = ({ children }) => {
  const [] = useState<number[]>([]);

  return (
    <div className="flex justify-center rounded-2xl bg-[#8686f3b2] h-full w-4/5">
      <div className="flex items-center w-[95%]">{children}</div>
    </div>
  );
};
