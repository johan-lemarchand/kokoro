import Image from "next/image";
import clsx from "clsx";

// ==========================================================
interface TeamCardKokoroProps {
  name: string;
  image: string;
  shadow?: boolean;
  description: string;
}
// ==========================================================

export default function TeamCardKokoro({
  name,
  image,
  description,
  shadow = false
}: TeamCardKokoroProps) {
  return (
      <div className={clsx({ 'shadow-lg': shadow }) + ' card h-full flex flex-col'}>
        <div className="card-body flex flex-col justify-between h-full">
          <div className="w-full h-auto mb-4 overflow-hidden rounded-lg flex-shrink-0">
            <Image src={image} width={160} height={240} alt="Team Member" className="w-full h-auto" />
          </div>
          <div className="flex-grow">
            <h4 className="mb-1 text-center">{name}</h4>
          </div>
          <p className="mb-2 text-center flex-grow">{description}</p>
        </div>
      </div>
  );
}
