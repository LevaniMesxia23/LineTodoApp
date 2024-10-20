import { format } from "date-fns";
import { DateIcon } from "../icons/icons";

function DateInput() {
  const formattedDate = format(new Date(), "dd/MM/yy");
  return (
    <div>
      <div className="bg-[#FDF8F2] max-w-[8rem] h-[30px] px-[10px] rounded-full flex justify-start gap-2 items-center mb-4">
        <DateIcon />
        <span className="text-[14px] font-normal text-textColor leading-6">
          ({formattedDate})
        </span>
      </div>
    </div>
  );
}

export default DateInput;
