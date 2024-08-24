import { TestimonialCard5 } from "../../../components/reuseable/testimonial-cards";
// CUSTOM DATA
import { reviews } from "../../../data/demo-12";

export default function Testimonial12() {
  return (
    <div className="grid mb-14 mb-md-18 mt-3">
      <div className="row isotope gy-6 mt-n19 mt-md-n22">
        {reviews.map((item) => (
          <div className="item col-md-6 col-xl-3" key={item.id}>
            <TestimonialCard5 borderBottom {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
