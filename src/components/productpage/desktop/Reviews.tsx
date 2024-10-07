import Review from './Review';
import Bracelet from '@/assets/images/bracelet.png';

const Reviews = () => {
  const reviews = [
    {
      firstName: 'alex',
      lastName: 'paxwel',
      rating: 4,
      date: '4th March 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Vitae donec urna rutrum curabitur. Vestibulum lectus quis ac nunc nibh luctus vitae libero varius. Urna bibendum quis velit blandit sed lectus nibh nibh. Elementum elementum id magna vitae id eget nisi non. Nibh tincidunt commodo fermentum pulvinar donec vitae tincidunt et. Nisl congue eu ut eu natoque ac egestas. Integer sit neque commodo orci. Est ipsum massa feugiat ullamcorper sit mauris donec tempor quam. Est donec urna vel eget ut venenatis. At felis ut mauris nullam dui urna consequat duis.',
      images: [Bracelet, Bracelet],
    },
    {
      firstName: 'mathew',
      lastName: 'thew',
      rating: 4,
      date: '4th March 2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Vitae donec urna rutrum curabitur. Vestibulum lectus quis ac nunc nibh luctus vitae libero varius. Urna bibendum quis velit blandit sed lectus nibh nibh. Elementum elementum id magna vitae id eget nisi non. Nibh tincidunt commodo fermentum pulvinar donec vitae tincidunt et. Nisl congue eu ut eu natoque ac egestas. Integer sit neque commodo orci. Est ipsum massa feugiat ullamcorper sit mauris donec tempor quam. Est donec urna vel eget ut venenatis. At felis ut mauris nullam dui urna consequat duis.',
      images: [],
    },
  ];
  return (
    <div className="max-w-[960px] mx-auto mt-[47px]">
      {reviews.map((review) => (
        <Review
          firstName={review.firstName}
          lastName={review.lastName}
          date={review.date}
          comment={review.comment}
          images={review.images}
        />
      ))}
      <div className="flex justify-center">
        <button className="px-[30px] py-[10px] text-brand-blue font-semibold rounded-[7px] border border-brand-blue">
          View More
        </button>
      </div>
    </div>
  );
};

export default Reviews;
