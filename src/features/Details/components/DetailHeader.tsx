import { BiLeftArrow } from "react-icons/bi";
import { useNavigate } from "react-router";

const DetailHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between">
      <div onClick={() => navigate(-1)} className="flex cursor-pointer items-center gap-2 text-lg font-medium">
        <BiLeftArrow size={20} />
        Back
      </div>
    </div>
  );
};

export default DetailHeader;
