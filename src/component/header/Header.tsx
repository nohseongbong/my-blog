"use client";

export default function Header() {
  return (
    <div className=" w-full h-24 flex px-5 shadow-sm rounded-lg">
      <ul className="flex w-2/6">
        <li className=" flex-1 hover:bg-gray-dark flex-center bg-orange">
          메뉴1
        </li>
        <li className="flex-1 flex-center bg-purple">메뉴2</li>
        <li className="flex-1 flex-center bg-purple">메뉴3</li>
        <li className="flex-1 flex-center bg-purple">메뉴4</li>
      </ul>
    </div>
  );
}
