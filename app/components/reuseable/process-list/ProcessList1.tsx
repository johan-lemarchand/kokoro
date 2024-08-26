import clsx from "clsx";

// ==============================================================
interface ProcessList1Props {
  no: string;
  subtitle: string;
  shadow?: boolean;
  className: string;
}
// ==============================================================

export default function ProcessList1({ no, subtitle, className, shadow }: ProcessList1Props) {
  return (
      <div className={clsx("card", {
          "shadow-lg": shadow,
          [className]: Boolean(className)
      })}
      >
          <div className="card-body p-6">
              <div className="flex flex-row items-center">
                  <div>
        <span className="bg-soft-primary text-primary rounded-full w-12 h-12 flex items-center justify-center mr-4">
          <span className="text-lg">{no}</span>
        </span>
                  </div>

                  <div className="flex flex-col items-center">
                      <p className="m-0 text-center">{subtitle}</p>
                  </div>
              </div>
          </div>
      </div>
  );
}
