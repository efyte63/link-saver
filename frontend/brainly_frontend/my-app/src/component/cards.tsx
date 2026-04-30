import { Button } from "./ui/Button";
import { Shareicon, DeleteIcon } from "./ui/iconscomp";

interface Cardinterface {
  tittle: string;
  link: URL;
  linktype: "twitter" | "instagram" | "youtube" | "other";
  description: string;
  contentId: string;
  onDelete: (id: string) => void;
}

export function Cards(props: Cardinterface) {
  return (
    <a
      href={props.link.toString()}
      target="_blank"
      rel="noopener noreferrer"
     className="block h-[300px] w-[300px] bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 border border-black rounded-lg shadow hover:shadow-lg transition"
    >
      {/* Top Section */}
      <div className="relative top-[15px] h-[100px] w-[300px] flex">

        {/* Title */}
        <div className="h-[100px] w-[220px]">
          <h3 className="text-2xl pl-2">{props.tittle}</h3>
        </div>

        {/* Buttons */}
        <div className="h-[70px] w-[76px] flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            text=" "
            startIcon={<Shareicon size="sm" />}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();

              navigator.clipboard.writeText(props.link.toString());
              alert("Link copied!");
            }}
          />

          <Button
            variant="secondary"
            size="sm"
            text=" "
            startIcon={<DeleteIcon size="sm" />}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();

              props.onDelete(props.contentId);
            }}
          />
        </div>
      </div>

      {/* Description */}
      <div className="relative top-[20px] h-[230px] w-[300px]">
        <p className="text-2xl pl-2">{props.description}</p>
      </div>
    </a>
  );
}