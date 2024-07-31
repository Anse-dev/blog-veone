// components/Header.js
export default function Header() {
    return (
      <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">My Dashboard</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded"
          />
        </div>
      </div>
    );
  }
  