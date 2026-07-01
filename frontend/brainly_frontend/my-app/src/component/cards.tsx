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
      className="
        block
        w-[95%] sm:w-[260px] md:w-[300px]
        min-h-[180px] sm:min-h-[230px] md:h-[300px]
        bg-gradient-to-br
        from-red-100 via-pink-100 to-purple-100
        border border-black
        rounded-xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        overflow-hidden
      "
    >
      {/* Top Section */}
      <div className="flex justify-between items-start p-3">

        {/* Title */}
        <div className="flex-1 pr-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold break-words">
            {props.tittle}
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">

          <Button
            variant="secondary"
            size="sm"
            text=""
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
            text=""
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
      <div className="px-3 pb-4">

        <p className="text-sm sm:text-lg md:text-xl break-words leading-relaxed">
          {props.description}
        </p>

      </div>
    </a>
  );
}