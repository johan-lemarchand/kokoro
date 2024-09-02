import NextLink from '../links/NextLink';
import { IconProps } from '../../../types/iconProps';
import { LinkType } from '../../../types/demo-1';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../../src/@/components/ui/dialog';

// ===============================================================
interface ServiceCard1Props {
  title: string;
  linkType: LinkType;
  description: string;
  learnMore: string;
  cardClassName?: string;
  iconClassName?: string;
  Icon: (props: IconProps) => JSX.Element;
}
// ===============================================================

export default function ServiceCard1({
  title,
  Icon,
  linkType,
  description,
  learnMore,
  cardClassName = '',
  iconClassName = '',
}: ServiceCard1Props) {
  return (
    <div className="col-md-6">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          <Icon className={iconClassName} />
          <h4>{title}</h4>
          <p
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Dialog>
            <DialogTrigger asChild>
              <NextLink
                title="En savoir plus"
                href="#"
                className={`more hover link-${linkType}`}
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription asChild>
                  <div dangerouslySetInnerHTML={{ __html: learnMore }} />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
