import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const TestimonialCard = ({ name, text, rating }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="testimonial-card__text">{text}</p>
        <p className="testimonial-card__name">{name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard; 