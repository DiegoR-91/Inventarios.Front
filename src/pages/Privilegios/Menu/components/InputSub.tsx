import { BiSpreadsheet } from "react-icons/bi";

const InputSub = ({ row, column }: any) => {
  const columnData = column?.columnDef?.meta;
  const rowData = row?.original;

  return (
    <div className="edit-cell-container">
      <div className="flex justify-start items-center pl-4">
        {columnData.isAdmin ? (
          <button className="flex gap-2 bg-transparent rounded-md hover:cursor-pointer">
            <BiSpreadsheet
              onClick={() => {}}
              className="text-greenPrimaryButton"
            />
          </button>
        ) : (
          <p>Solo Lectura</p>
        )}
      </div>
    </div>
  );
};

export default InputSub;
