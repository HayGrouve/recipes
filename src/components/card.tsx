import Link from "next/link";
import { FC } from "react";
import { Separator } from "./ui/separator";

interface IProps {
  id: string;
  title: string;
  authorImg: string;
  authorName: string;
  createdAt: Date;
}

const Card: FC<IProps> = ({ id, title, authorImg, authorName, createdAt }) => {
  return (
    <div className="max-w-sm shadow-xl lg:flex lg:max-w-full">
      <div className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-bl lg:rounded-tl">
        <Link href={`/${id}`}>
          <img
            className="h-full w-full object-cover"
            src="https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg"
            title={title}
            alt={title}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
        <div className="mb-8">
          <Link href={`/${id}`}>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
          </Link>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <Separator className="mb-2" />
        <div className="flex items-center">
          <img
            className="mr-4 h-10 w-10 rounded-full"
            src={authorImg ? authorImg : "./user.jpg"}
            alt={`Avatar of ${authorName}`}
          />
          <div className="text-sm">
            <p className="leading-none text-gray-900">{authorName}</p>
            <p className="text-gray-600">
              {`${createdAt.getDate()} ${createdAt.toString().slice(4, 7)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
