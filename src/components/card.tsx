import Link from "next/link";
import { FC } from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";

interface IProps {
  id: string;
  title: string;
  image?: string;
  description: string;
  userImg?: string;
  userName: string;
  createdAt: string;
}

const Card: FC<IProps> = ({
  id,
  title,
  image,
  description,
  userImg,
  userName,
  createdAt,
}) => {
  return (
    <Link href={`recipe/${id}`}>
      <div className="card-aspect w-64 max-w-sm shadow-2xl md:w-80 lg:flex lg:w-auto">
        <div className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-bl lg:rounded-tl">
          <img
            className="h-full w-full object-cover"
            src={image ? image : "/recipe.jpg"}
            alt={title}
          />
        </div>
        <div className="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: description.slice(0, 50) + "...",
              }}
              className="text-base text-gray-700"
            ></p>
          </div>
          <Separator className="mb-2" />
          <div className="flex items-center">
            <Image
              className="mr-4 h-10 w-10 rounded-full"
              src={userImg ? userImg : "/user.jpg"}
              alt={`Avatar of ${userName}`}
              width={1000}
              height={1000}
            />
            <div className="text-sm">
              <p className="leading-none text-gray-900">{userName}</p>
              <p className="text-gray-600">
                {`${new Date(createdAt).getDate()} ${new Date(
                  createdAt,
                ).toLocaleString("default", { month: "short" })}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
