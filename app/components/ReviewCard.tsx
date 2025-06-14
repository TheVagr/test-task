import { getRewiews } from "../../lib/api";

const ReviewCard = async () => {
  const reviews = await getRewiews();

  return (
    <>
      {reviews.map((review: any) => (
        <div className="max-w-[468px] max-h-[611px] h-full w-full bg-[#D9D9D9] rounded-[15px] p-4  text-2xl text-[#000000] flex flex-col gap-4">
          <div className="mb-3">
            <p>Отзыв </p>
            <p>Полученный с api</p>
            <p>HTML</p>
          </div>
          <ul>
            <li
              key={review.id}
              dangerouslySetInnerHTML={{ __html: review.text }}
            />
          </ul>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
