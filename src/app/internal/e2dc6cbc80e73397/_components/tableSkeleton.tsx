import React from 'react';

const TableSkeleton = () => {
  return (
    <div className="animate-pulse mt-3">
     
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
              <th className="py-2"><div className="h-4 bg-gray-300 rounded"></div></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
                <td className="py-2"><div className="h-4 bg-gray-300 rounded"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
