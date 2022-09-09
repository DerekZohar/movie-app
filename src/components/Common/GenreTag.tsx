import React from "react";

export const GenreTag = ({ name }: { name: string }) => {
  return (
    <span className="text-sm text-gray-400 border border-gray-400 rounded-full px-2 py-1 mr-1">
      {name}
    </span>
  );
};
